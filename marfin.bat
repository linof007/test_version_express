

Rem  marfin.bat
@Echo off
cls

start java --module-path %PATH_TO_FX% --add-modules javafx.controls -jar C:\apache-tomcat-9.0.97\webapps\MarWeb\WEB-INF\lib\marfin.jar

