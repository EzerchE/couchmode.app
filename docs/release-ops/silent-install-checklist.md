# Silent install / uninstall dry-run checklist (Store / public-beta readiness)

Status: **prepared commands and checks only.** The installer binary and its
source are in the app build repo, not the website repo, so these commands must
be run there against a signed (or local test) `CouchMode-Setup-*.exe`. Do not
change installer behavior unless a blocker is found.

The `/VERYSILENT` flag indicates an **Inno Setup** installer; the commands below
assume Inno Setup. If the installer is actually WiX/MSI or NSIS, use the
equivalent flags noted at the end.

## Preconditions

- Use a clean Windows 11 x64 VM or a throwaway user profile (installer state,
  Start-menu entries, scheduled tasks, and startup entries persist otherwise).
- Have a known-good signed build once beta.109 signing is done; for a pre-sign
  dry-run, a locally-built unsigned test installer is fine **as long as it is
  never uploaded or linked publicly**.
- Capture a baseline before install: existing scheduled tasks and Run keys.

```powershell
# Baseline (before install)
Get-ScheduledTask | Where-Object TaskName -like '*CouchMode*' | Select TaskName,State
Get-ItemProperty 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Run'   -ErrorAction SilentlyContinue
Get-ItemProperty 'HKLM:\Software\Microsoft\Windows\CurrentVersion\Run'   -ErrorAction SilentlyContinue
```

## 1. Silent install (Inno Setup)

```powershell
# /VERYSILENT = no wizard, no progress window; /SUPPRESSMSGBOXES = no modal prompts
# /NORESTART  = never auto-reboot; /LOG = capture an install log to verify steps
Start-Process -FilePath '.\CouchMode-Setup-<version>.exe' `
  -ArgumentList '/VERYSILENT','/SUPPRESSMSGBOXES','/NORESTART','/LOG=install.log' `
  -Wait -PassThru | Select-Object ExitCode
```

Checks:
- [ ] Exit code is `0`.
- [ ] **No installer UI / first-run wizard appeared** during silent install
      (watch the session; nothing should flash a window).
- [ ] App files present at the install dir, e.g.
      `%LocalAppData%\Programs\CouchMode\` or `%ProgramFiles%\CouchMode\`
      (confirm the actual `DefaultDirName` from the installer script).
      ```powershell
      Get-ChildItem 'C:\Program Files\CouchMode' -ErrorAction SilentlyContinue | Select Name,Length
      ```
- [ ] Uninstall entry registered:
      ```powershell
      Get-ItemProperty 'HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*',
                       'HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*' `
        -ErrorAction SilentlyContinue |
        Where-Object DisplayName -like '*CouchMode*' |
        Select DisplayName,DisplayVersion,QuietUninstallString,UninstallString
      ```
- [ ] `install.log` shows no errors and no unexpected elevation.

## 2. Startup / scheduled-task behavior must NOT be silently enabled

The product model is: startup automation and any "Start inside Xbox Mode"
scheduled task are **opt-in / user-controlled**. A silent install must not
enable them by default.

```powershell
# After install, compare against baseline
Get-ScheduledTask | Where-Object TaskName -like '*CouchMode*' |
  Select TaskName,State,@{n='Triggers';e={$_.Triggers.Count}}
Get-ItemProperty 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Run' -ErrorAction SilentlyContinue
Get-ItemProperty 'HKLM:\Software\Microsoft\Windows\CurrentVersion\Run' -ErrorAction SilentlyContinue
```

Checks:
- [ ] No new **enabled** CouchMode scheduled task created by the installer
      (a registered-but-disabled task the user can opt into is acceptable; an
      auto-enabled startup task is a blocker).
- [ ] No new CouchMode `Run` key auto-added at HKLM/HKCU by the silent install
      unless that is the intended, documented default.
- [ ] App does not auto-launch elevated after a silent install.

## 3. Silent uninstall

```powershell
# Prefer the QuietUninstallString captured above (already includes silent flags).
# For an Inno Setup unins000.exe, the flags mirror install:
Start-Process -FilePath 'C:\Program Files\CouchMode\unins000.exe' `
  -ArgumentList '/VERYSILENT','/SUPPRESSMSGBOXES','/NORESTART' `
  -Wait -PassThru | Select-Object ExitCode
```

Checks:
- [ ] Exit code is `0`, no UI shown.
- [ ] Install directory removed (only user-data left behind if intended):
      ```powershell
      Test-Path 'C:\Program Files\CouchMode'   # expect False
      ```
- [ ] Uninstall registry entry removed.
- [ ] Any CouchMode scheduled task / Run key created by the app is removed or
      returned to the baseline state.
- [ ] No orphaned Start-menu shortcuts.
- [ ] Re-running the baseline queries matches the pre-install baseline.

## 4. Idempotency / re-install

- [ ] Silent install over an existing install succeeds (exit 0) and upgrades in
      place without a wizard.
- [ ] Uninstall then re-install leaves a clean, working install.

## Non-Inno equivalents (only if the installer is not Inno Setup)

- **MSI (WiX/msi):**
  - install: `msiexec /i CouchMode.msi /qn /norestart /l*v install.log`
  - uninstall: `msiexec /x CouchMode.msi /qn /norestart`
- **NSIS:**
  - install: `CouchMode-Setup.exe /S`
  - uninstall: `"C:\Program Files\CouchMode\Uninstall.exe" /S`

## Reporting

Record for each run: installer filename + version, signed/unsigned, exit codes,
whether any UI appeared, install dir contents, scheduled-task/Run-key diff vs
baseline, and uninstall cleanliness. File a blocker only if a real deviation is
found (UI during silent install, auto-enabled startup, non-zero exit, or unclean
uninstall). Do not change installer behavior otherwise.
