@echo off
cd /d "%~dp0"
set "NODEJS=%ProgramFiles%\nodejs"
if exist "%NODEJS%\npm.cmd" (
  call "%NODEJS%\npm.cmd" run dev
) else (
  call npm run dev
)
