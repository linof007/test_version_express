
@Rem  stage1.bat
@Echo off
cls


 REM  ### ...".bat-File"Starten, wo .bat-file und .jar-file in gleichen Ordner sich befinden.  ... ###

  start java --module-path %PATH_TO_FX% --add-modules javafx.controls -jar C:\apache-tomcat-9.0.97\webapps\MarWeb\WEB-INF\lib\stage1.jar

  