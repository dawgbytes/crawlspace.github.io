[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$images = @{
    # Wood rot - decayed timber
    "wood-rot.jpg" = "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800"
    # Better insulation image
    "insulation.jpg" = "https://images.pexels.com/photos/7937015/pexels-photo-7937015.jpeg?auto=compress&cs=tinysrgb&w=800"
    # Mold moisture
    "mold-moisture.jpg" = "https://images.pexels.com/photos/5691623/pexels-photo-5691623.jpeg?auto=compress&cs=tinysrgb&w=800"
    # Gallery 1 - encapsulation before/after split
    "gallery1-split.jpg" = "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=800"
    # Gallery 2 before - rotted joists
    "gallery2-before.jpg" = "https://images.pexels.com/photos/5691636/pexels-photo-5691636.jpeg?auto=compress&cs=tinysrgb&w=600"
    # Gallery 2 after - repaired joists
    "gallery2-after.jpg" = "https://images.pexels.com/photos/8961051/pexels-photo-8961051.jpeg?auto=compress&cs=tinysrgb&w=600"
    # Gallery 3 before - falling insulation
    "gallery3-before.jpg" = "https://images.pexels.com/photos/5691630/pexels-photo-5691630.jpeg?auto=compress&cs=tinysrgb&w=600"
    # Gallery 3 after - sealed liner
    "gallery3-after.jpg" = "https://images.pexels.com/photos/8961055/pexels-photo-8961055.jpeg?auto=compress&cs=tinysrgb&w=600"
    # Gallery 4 before - standing water
    "gallery4-before.jpg" = "https://images.pexels.com/photos/5691614/pexels-photo-5691614.jpeg?auto=compress&cs=tinysrgb&w=600"
    # Gallery 4 after - sump pump installed
    "gallery4-after.jpg" = "https://images.pexels.com/photos/8961069/pexels-photo-8961069.jpeg?auto=compress&cs=tinysrgb&w=600"
}

foreach ($file in $images.Keys) {
    Write-Host "Downloading $file..."
    try {
        Invoke-WebRequest -Uri $images[$file] -OutFile $file -UseBasicParsing
        $size = (Get-Item $file).Length
        Write-Host "  OK - $size bytes"
    } catch {
        Write-Host "  FAILED - will use fallback URL in code"
    }
}

Write-Host "`nDone! Listing all jpg files:"
Get-ChildItem *.jpg | Select-Object Name, Length | Format-Table -AutoSize
