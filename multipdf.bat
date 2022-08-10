@echo off
setlocal
set TARGET=Result
set "files=" for %%F in ("*.html") do (call set files=%%files%% %%F)

:: go to the folder with lots of html files and one css file
rem cd \users\jjpdq\documents\flexdoc\build\docs\Video-summaries

:: convert to a pdf file
rem wkhtmltopdf %files% ^
rem wkhtmltopdf FLEx-vidsum-audio.html ^
rem --enable-local-file-access ^
rem --user-style-sheet styles.a47262ef ^
rem %TARGET%_Report.pdf


wkhtmltopdf.exe -g --enable-local-file-access  --disable-smart-shrinking --footer-center [page] -s A4 -T 14mm -B 14mm -L 14mm -R 14mm --disable-external-links --disable-internal-links ^
Index-of-Demo-Movies.html  ^
FLEx-vidsum-intro.html ^
FLEx-vidsum-lexicon.html ^
FLEx-vidsum-bulkedit.html ^
FLEx-vidsum-texts.html ^
FLEx-vidsum-sendrec.html ^
FLEx-vidsum-audio.html --enable-local-file-access --user-style-sheet styles.a47262ef ^
flex-vidsum-all.pdf

pause


rem https://stackoverflow.com/questions/73135520/how-to-load-multiple-html-files-by-using-wkhtmltopdf-with-other-options-in-a-bat