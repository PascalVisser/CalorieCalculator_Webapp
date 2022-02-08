Author: Pascal Visser/Ewoud ooms
Date: 07-02-2022
Version: 1.0


Calorie WEB APP Tracker



Description:

This is a calorie tracker app. This app lets you register you food intake for the day.



Installation Prerequisites:

IntelliJ Idea

First you need a working version of IntelliJ Idea 2018.3 or higher. 
Which you can download here: https://www.jetbrains.com/idea/download/
Chose the version for your Operating system

Tomcat

To start working with web app, you have to get a server runtime. This project uses Tomcat, version 9.0.58
To use tomcat:

- Go to https://tomcat.apache.org/ and download version 9.0.58 as a .zip file, which is suitable for use OS. 
- Extract the .zip in a suitable location and make it executable. (to test, go to http://localhost:8080/ and you should see the Tomcat management page)


Config Tomcat:

To make Tomcat working, follow the following steps: 

- In IntelliJ, go to File > Settings > Build, Execution, Deployment > Application Servers and with the top-left plus sign, add Tomcat server. 
- With the tomcat server added, in Run/Debug Configurations, set URL to http://localhost:8080/index 
- Under deployment, At the bottem set Application context to: /

Now the IntelliJ project is configuerd.

The minimum requairement for Java = JDK 14+



Database Tunnel:

The web app makes useage of a remote database from storage and login. To access the database the following step need to be made:

Windows:

- Download MobaXtrem installer edition 
- Click Tunneling button
- Set Local clients to 2222
- set SSH server to bioinf.nl, 'binusername', 4235
- Set Remote server to webprojectsdb.bin.bioinf.nl, 3306
- Click on Save

MACos/Linux:

In the terminal

- ssh -N -L 2222:webprojectsdb.bin.bioinf.nl:3306 username@bioinf.nl -p 4235
- mysql -h 127.0.0.1 -P 2222 -u calories -p calories

With no errors or messages, it is good. 

This tunnel need to be open before running the web app, otherwise the database interaction will fail. 



The Databse:

The database exisit of the following schemas:

_nog aanvullen_



Possible issues:

if in the AutoComplete.jp errors are trown at Asyc/await. Do the following:

- In IntelliJ go to File > Settings > Lauguages & Frameworks > JavaScript
- Set JavaScript lauguage versionto ECMAScript 6+
- Enable everyting in libaries
- Webpack need to be set on automtically 


Support:

All other questions can be email to p.visser@st.hanze.nl or e.ooms@st.hanze.nl
