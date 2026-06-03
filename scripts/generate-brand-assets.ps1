param(
  [string]$OutputDir = "$(Join-Path $PSScriptRoot '..\\public')"
)

Add-Type -AssemblyName System.Drawing

function New-RoundedRectPath {
  param(
    [System.Drawing.RectangleF]$Rect,
    [float]$Radius
  )

  $diameter = $Radius * 2
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
  $path.AddArc($Rect.X, $Rect.Y, $diameter, $diameter, 180, 90)
  $path.AddArc($Rect.Right - $diameter, $Rect.Y, $diameter, $diameter, 270, 90)
  $path.AddArc($Rect.Right - $diameter, $Rect.Bottom - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($Rect.X, $Rect.Bottom - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()

  return $path
}

function New-Canvas {
  param(
    [int]$Width,
    [int]$Height
  )

  $bitmap = [System.Drawing.Bitmap]::new($Width, $Height)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  return @{
    Bitmap = $bitmap
    Graphics = $graphics
  }
}

function Save-Jpeg {
  param(
    [System.Drawing.Bitmap]$Bitmap,
    [string]$Path,
    [int]$Quality = 92
  )

  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq "image/jpeg" } |
    Select-Object -First 1

  $encoder = [System.Drawing.Imaging.Encoder]::Quality
  $encoderParams = [System.Drawing.Imaging.EncoderParameters]::new(1)
  $encoderParams.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new($encoder, [long]$Quality)
  $Bitmap.Save($Path, $codec, $encoderParams)
  $encoderParams.Dispose()
}

function Draw-Chip {
  param(
    [System.Drawing.Graphics]$Graphics,
    [string]$Text,
    [float]$X,
    [float]$Y,
    [float]$Width
  )

  $height = 50
  $rect = [System.Drawing.RectangleF]::new($X, $Y, $Width, $height)
  $path = New-RoundedRectPath -Rect $rect -Radius 24
  $fill = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(34, 255, 255, 255))
  $pen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(40, 255, 255, 255), 1)
  $font = [System.Drawing.Font]::new("Segoe UI Semibold", 16, [System.Drawing.FontStyle]::Regular)
  $textBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(225, 228, 234, 244))
  $format = [System.Drawing.StringFormat]::new()
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center

  $Graphics.FillPath($fill, $path)
  $Graphics.DrawPath($pen, $path)
  $Graphics.DrawString($Text, $font, $textBrush, $rect, $format)

  $format.Dispose()
  $textBrush.Dispose()
  $font.Dispose()
  $pen.Dispose()
  $fill.Dispose()
  $path.Dispose()
}

function New-BrandIcon {
  param(
    [int]$Size,
    [string]$OutputPath
  )

  $surface = New-Canvas -Width $Size -Height $Size
  $bitmap = $surface.Bitmap
  $graphics = $surface.Graphics

  $graphics.Clear([System.Drawing.Color]::Transparent)

  $baseRect = [System.Drawing.RectangleF]::new(0, 0, $Size, $Size)
  $background = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.PointF]::new(0, 0),
    [System.Drawing.PointF]::new($Size, $Size),
    [System.Drawing.Color]::FromArgb(18, 22, 36),
    [System.Drawing.Color]::FromArgb(29, 36, 58)
  )
  $graphics.FillRectangle($background, $baseRect)

  $glowBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(80, 134, 88, 255))
  $graphics.FillEllipse($glowBrush, $Size * 0.12, $Size * 0.08, $Size * 0.76, $Size * 0.76)

  $panelRect = [System.Drawing.RectangleF]::new($Size * 0.08, $Size * 0.08, $Size * 0.84, $Size * 0.84)
  $panelPath = New-RoundedRectPath -Rect $panelRect -Radius ($Size * 0.16)
  $panelBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.PointF]::new($panelRect.Left, $panelRect.Top),
    [System.Drawing.PointF]::new($panelRect.Right, $panelRect.Bottom),
    [System.Drawing.Color]::FromArgb(255, 79, 47, 150),
    [System.Drawing.Color]::FromArgb(255, 70, 117, 255)
  )
  $panelPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(60, 255, 255, 255), [Math]::Max($Size * 0.01, 2))
  $graphics.FillPath($panelBrush, $panelPath)
  $graphics.DrawPath($panelPen, $panelPath)

  $font = [System.Drawing.Font]::new("Segoe UI Semibold", $Size * 0.28, [System.Drawing.FontStyle]::Bold)
  $textBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
  $format = [System.Drawing.StringFormat]::new()
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $textRect = [System.Drawing.RectangleF]::new($Size * 0.08, $Size * 0.08, $Size * 0.84, $Size * 0.84)
  $graphics.DrawString("CM", $font, $textBrush, $textRect, $format)

  $bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)

  $format.Dispose()
  $textBrush.Dispose()
  $font.Dispose()
  $panelPen.Dispose()
  $panelBrush.Dispose()
  $panelPath.Dispose()
  $glowBrush.Dispose()
  $background.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()
}

function New-Favicon {
  param(
    [string]$SourcePng,
    [string]$OutputPath
  )

  $bitmap = [System.Drawing.Bitmap]::new($SourcePng)
  $icon = [System.Drawing.Icon]::FromHandle($bitmap.GetHicon())
  $stream = [System.IO.File]::Open($OutputPath, [System.IO.FileMode]::Create)
  try {
    $icon.Save($stream)
  } finally {
    $stream.Dispose()
    $icon.Dispose()
    $bitmap.Dispose()
  }
}

function New-OgImage {
  param(
    [string]$OutputPath
  )

  $surface = New-Canvas -Width 1200 -Height 630
  $bitmap = $surface.Bitmap
  $graphics = $surface.Graphics

  $background = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.PointF]::new(0, 0),
    [System.Drawing.PointF]::new(1200, 630),
    [System.Drawing.Color]::FromArgb(15, 18, 32),
    [System.Drawing.Color]::FromArgb(12, 17, 28)
  )
  $graphics.FillRectangle($background, 0, 0, 1200, 630)

  $violetGlow = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(70, 120, 65, 255))
  $blueGlow = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(50, 64, 153, 255))
  $graphics.FillEllipse($violetGlow, -120, -80, 520, 520)
  $graphics.FillEllipse($blueGlow, 760, 40, 420, 420)

  $panelRect = [System.Drawing.RectangleF]::new(72, 68, 1056, 494)
  $panel = New-RoundedRectPath -Rect $panelRect -Radius 34
  $panelFill = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(28, 255, 255, 255))
  $panelPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(36, 255, 255, 255), 1.2)
  $graphics.FillPath($panelFill, $panel)
  $graphics.DrawPath($panelPen, $panel)

  $logoBitmap = [System.Drawing.Bitmap]::new((Join-Path $OutputDir "icon-192.png"))
  $graphics.DrawImage($logoBitmap, 112, 110, 82, 82)

  $labelFont = [System.Drawing.Font]::new("Segoe UI Semibold", 18, [System.Drawing.FontStyle]::Regular)
  $titleFont = [System.Drawing.Font]::new("Segoe UI Semibold", 36, [System.Drawing.FontStyle]::Bold)
  $bodyFont = [System.Drawing.Font]::new("Segoe UI", 20, [System.Drawing.FontStyle]::Regular)
  $smallFont = [System.Drawing.Font]::new("Segoe UI Semibold", 16, [System.Drawing.FontStyle]::Regular)

  $labelBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(187, 198, 211, 238))
  $titleBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(245, 248, 252, 255))
  $bodyBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(205, 211, 220, 235))
  $mutedBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(190, 187, 196, 215))

  $graphics.DrawString("COUCHMODE", $labelFont, $labelBrush, 224, 126)
  $graphics.DrawString("PC Power. Console Comfort.", $titleFont, $titleBrush, 112, 194)
  $graphics.DrawString(
    "Turn your Windows PC into a couch gaming setup with controller-triggered free mode and Pro automation for audio, HDR, display, power, notifications, and safe restore.",
    $bodyFont,
    $bodyBrush,
    [System.Drawing.RectangleF]::new(112, 294, 900, 90)
  )

  Draw-Chip -Graphics $graphics -Text "7-day Pro trial" -X 112 -Y 422 -Width 182
  Draw-Chip -Graphics $graphics -Text "No account required" -X 312 -Y 422 -Width 220
  Draw-Chip -Graphics $graphics -Text "Compatible controllers" -X 552 -Y 422 -Width 242

  $graphics.DrawString("Windows couch gaming utility", $smallFont, $mutedBrush, 112, 502)

  Save-Jpeg -Bitmap $bitmap -Path $OutputPath -Quality 92

  $mutedBrush.Dispose()
  $bodyBrush.Dispose()
  $titleBrush.Dispose()
  $labelBrush.Dispose()
  $smallFont.Dispose()
  $bodyFont.Dispose()
  $titleFont.Dispose()
  $labelFont.Dispose()
  $logoBitmap.Dispose()
  $panelPen.Dispose()
  $panelFill.Dispose()
  $panel.Dispose()
  $blueGlow.Dispose()
  $violetGlow.Dispose()
  $background.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()
}

if (-not (Test-Path -LiteralPath $OutputDir)) {
  New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

$icon192 = Join-Path $OutputDir "icon-192.png"
$icon512 = Join-Path $OutputDir "icon-512.png"
$favicon = Join-Path $OutputDir "favicon.ico"
$ogImage = Join-Path $OutputDir "og-image.jpg"

New-BrandIcon -Size 192 -OutputPath $icon192
New-BrandIcon -Size 512 -OutputPath $icon512
New-Favicon -SourcePng $icon512 -OutputPath $favicon
New-OgImage -OutputPath $ogImage
