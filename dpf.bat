
@ECHO OFF
SETLOCAL
IF "%1"=="" GOTO MENU
SET M=%1
SET X=1
GOTO :AFTER_MENU
:MENU
CLS

ECHO.
ECHO Docu-pdf command for producing FRENCH PDFs of Docusaurus FLExdoc
ECHO.
ECHO ---------------------------------------------
ECHO PRESS 1-9 to select your task, or 0 to EXIT
ECHO ---------------------------------------------
ECHO .
ECHO . Manuals
ECHO 1 - French Manual version 9.3
ECHO 2 - French Manual version 9.2
ECHO 3 - French Manual version 9.3 LH
ECHO 4 - French Manual version 9.2 LH
ECHO . 
ECHO . Video Summaries
ECHO 5 - French Vidsum version 9.3
ECHO 6 - French Vidsum version 9.2
ECHO 7 - French Vidsum version 9.3 LH
ECHO 8 - French Vidsum version 9.2 LH
ECHO 9 - ?? 
ECHO 0 - EXIT
ECHO.

SET /P M= Type 1-9 or 0 then press ENTER:
:AFTER_MENU
IF %M%==1 GOTO FR-man-9.3
IF %M%==2 GOTO FR-man-9.2
IF %M%==3 GOTO FR-man-9.3-LH
IF %M%==4 GOTO FR-man-9.2-LH
IF %M%==5 GOTO FR-vidsum-9.3
IF %M%==6 GOTO FR-vidsum-9.2
IF %M%==7 GOTO FR-vidsum-9.3-LH
IF %M%==8 GOTO FR-vidsum-9.2-LH
IF %M%==9 GOTO CLEARC
IF %M%==0 GOTO EOF

:FR-man-9.3
ECHO 1 - docu-pdf French manual 9.3 from web
npx docu-pdf https://manual.paratext.org/fr/Training-Manual/Overview --coverPath="cover-man-fr.html"  --contentSelector="article" --pageSize="A5" --outputPath="Ptx-man-a5-fr-9.3.pdf" --disableTOC --headerTemplate="<footer />" --pdfMargin="40,40,80,40" --excludeURLs="https://manual.paratext.org/fr/category/paratext-training-manual,https://manual.paratext.org/fr/category/appendix"

IF "%X%"== "1" GOTO :EOF
GOTO MENU

:FR-man-9.2
ECHO 2 - Print French MAN 9.2 from web 
npx docu-pdf https://manual.paratext.org/fr/9.2/Training-Manual/Overview --coverPath="cover-man-fr-9.2.html"  --contentSelector="article" --pageSize="A5" --outputPath="Ptx-man-a5-fr-9.2.pdf" --disableTOC --headerTemplate="<footer />" --pdfMargin="40,40,80,40" --excludeURLs="https://manual.paratext.org/fr/9.2/category/paratext-training-manual,https://manual.paratext.org/fr/9.2/category/appendix"

IF "%X%"== "1" GOTO :EOF
GOTO MENU

:FR-man-9.3-LH
ECHO 3 - Print French MAN 9.3 from local host
npx docu-pdf http://localhost:3000/fr/Training-Manual/Overview --coverPath="cover-man-fr.html"  --contentSelector="article" --pageSize="A5" --outputPath="Ptx-man-a5-fr-9.3-LH.pdf" --disableTOC --headerTemplate="<footer />" --pdfMargin="40,40,80,40" --excludeURLs="http://localhost:3000/fr/category/paratext-training-manual,http://localhost:3000/fr/category/appendix"

IF "%X%"== "1" GOTO :EOF
GOTO MENU

:FR-man-9.2-LH
ECHO 4 - Print French MAN 9.2 from local host 
npx docu-pdf http://localhost:3000/fr/9.2/Training-Manual/Overview --coverPath="cover-man-fr-9.2.html"  --contentSelector="article" --pageSize="A5" --outputPath="Ptx-man-a5-fr-9.2-LH.pdf" --disableTOC --headerTemplate="<footer />" --pdfMargin="40,40,80,40" --excludeURLs="http://localhost:3000/fr/9.2/category/paratext-training-manual,http://localhost:3000/fr/9.2/category/appendix"

IF "%X%"== "1" GOTO :EOF
GOTO MENU

:FR-vidsum-9.3
ECHO 5 - Print French VIDSUM  from web 
npx docu-pdf https://jennibeadle.github.io/flexdoc/fr/Video-summaries/FLEx-vidsum-intro --coverPath="cover-vidsum-fr.html"  --contentSelector="article" --pageSize="A5" --outputPath="Ptx-vidsum-a5-fr-9.3.pdf" --disableTOC --headerTemplate="<footer />" --pdfMargin="40,40,80,40" --excludeURLs="@excludesFRvid.txt" --excludeURLs="https://jennibeadle.github.io/flexdoc/Training/FLEx-video-course-2017,https://jennibeadle.github.io/flexdoc/Training/FLEx_8"
IF "%X%"== "1" GOTO :EOF
GOTO MENU

:FR-vidsum-9.2
ECHO 6 - Print French VIDSUM 9.2 from web 
npx docu-pdf https://manual.paratext.org/fr/9.2/Video-summaries/TOC-overview --coverPath="cover-vidsum-fr-9.2.html"  --contentSelector="article" --pageSize="A5" --outputPath="Ptx-vidsum-a5-fr-9.2.pdf" --disableTOC --headerTemplate="<footer />" --pdfMargin="40,40,80,40" --excludeURLs="@excludesFRvid92.txt"
IF "%X%"== "1" GOTO :EOF
GOTO MENU

:FR-vidsum-9.3-LH
ECHO 7 - Print French VIDSUM  from local host 
npx docu-pdf http://localhost:3000/flexdoc/fr/Video-summaries/FLEx-vidsum-intro --coverPath="cover-vidsum-fr.html"  --contentSelector="article" --pageSize="A5" --outputPath="FLEx-vidsum-a5-fr-9.3-LH.pdf" --disableTOC --headerTemplate="<footer />" --pdfMargin="40,40,80,40" 
IF "%X%"== "1" GOTO :EOF
GOTO MENU

:FR-vidsum-9.2-LH
ECHO 8 - Print French VIDSUM 9.2 from local host 
npx docu-pdf http://localhost:3000/fr/9.2/Video-summaries/TOC-overview --coverPath="cover-vidsum-fr-9.2.html"  --contentSelector="article" --pageSize="A5" --outputPath="Ptx-vidsum-a5-fr-9.2-LH.pdf" --disableTOC --headerTemplate="<footer />" --pdfMargin="40,40,80,40" --excludeURLs="@excludesFRvid92lh.txt"
IF "%X%"== "1" GOTO :EOF
GOTO MENU

:CLEARC
ECHO Docusarus clear (cache, build...) npm run docusaurus clear
npm run docusaurus clear
IF "%X%"== "1" GOTO :EOF
GOTO MENU

:EOF
