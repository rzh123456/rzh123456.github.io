@echo off
git add --all
git commit -m "Update at %time% %date%"
git push -u origin main
pause