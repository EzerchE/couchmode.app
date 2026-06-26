# Admin Reports Panel and triage workflow

Status: plan only. No admin UI is built, no backend routes are touched, and no
admin data is exposed publicly. This document describes the private report
management workflow for user-submitted bug reports and feature requests.

## Current state

- The app can send user-approved reports.
- The backend stores reports and returns `CM-R-...` references.
- The admin API supports list, CSV export, and status update.
- Current statuses: `new`, `triaged`, `fixed`, `closed`, `spam`.
- A basic PII scan has passed.
- No public admin UI exists yet.

## Recommended panel location

Preferred:

- `admin.couchmode.app`

Access:

- Cloudflare Access or an equivalent private access gate.
- No search indexing.
- No public links from the main website.
- Never expose `REPORTS_ADMIN_TOKEN` in public client code. The admin panel is a
  UI only; access control and data access are enforced by the backend API behind
  the access gate.

## Core panel features

- report list
- detail view
- status filter
- type filter
- affected area filter
- app version filter
- FSE state filter
- Windows build filter
- status update
- CSV export
- copy App Dev summary
- copy changelog candidate
- mark spam
- link related reports manually

## App Dev handoff format

The panel should generate a copyable summary like:

```
Issue: CM-R-2026-000011
Type: bug_report
Area: Other
Version: 0.4.10-beta.45
System: Windows 11 build 26200
FSE: unconfirmed
Launcher: xbox
```

Then include:

- user description
- reproduction steps if present
- sanitized diagnostics
- log tail if present
- suggested severity
- suggested next action

## Feature request workflow

Feature requests should be triaged separately from bugs.

Fields or tags to support later:

- request type
- priority
- effort estimate
- target release
- accepted / declined / backlog

Do not promise every feature publicly.

## Changelog workflow

When a report is fixed, the panel should help generate a neutral changelog
candidate.

Examples:

- `Fixed a report submission issue where empty descriptions could reach the server.`
- `Improved Windows 11 version reporting in diagnostics.`

Do not include:

- user names
- emails
- report references in the public changelog
- private diagnostics
- internal blame language

## Privacy and safety rules

- Show only sanitized report data.
- Never show tokens, Patreon IDs, raw user paths, emails, or raw entitlement data.
- Keep redaction tests as a release gate.
- Admin actions should be auditable later.
- Spam rows should remain hidden by default but available via filter.

## Implementation phases

Phase 1:

- private list and detail view
- status update
- copy App Dev summary
- CSV export link

Phase 2:

- filters
- related reports
- changelog candidate copy
- feature request triage fields

Phase 3:

- lightweight dashboard metrics
- trend view by app version, area, Windows build, FSE state

Do not start Product Insights telemetry here. The report admin panel is for
user-submitted reports only.

## Validation checklist for future implementation

- admin routes are not public
- no token in the built JS
- no indexing
- list loads
- detail opens
- status update works
- copy summary contains no PII
- CSV export still works
- spam rows hidden by default
- backend behavior unchanged unless explicitly approved
