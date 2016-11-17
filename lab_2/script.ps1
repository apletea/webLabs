foreach ( $item in Get-Content C:\ps-test\group2.txt ) { New-Item -ItemType "directory" -Path "c:\ps-test\group2\$item" }
foreach ( $item in Get-Content C:\ps-test\group9.txt ) { New-Item -ItemType "directory" -Path "c:\ps-test\group9\$item" }
//вместо с:\ps-test\укажите ваш путь
