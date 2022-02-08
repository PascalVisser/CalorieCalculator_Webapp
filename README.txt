Author: Pascal Visser/Ewoud ooms

Date: 07-02-2022
Version: 1.0


## Calorie WEB APP Tracker ########################################################################################################################



# Description:

This is a calorie tracker app. This app lets you register your nutrient intake for the day.


# Usage

Login with the following information:

username: Pascal/Ewoud
password: Visser/Ooms

Then you can enter food products into the database and specify the quantitiy.
Next you are forwarded to the dashboard, where you can see all the nutrients of the intake food. 
 

# Installation Prerequisites:

IntelliJ Idea

First you need a working version of IntelliJ Idea 2018.3 or higher. 
Which you can download here: https://www.jetbrains.com/idea/download/
Chose the version for your Operating system

Tomcat

To start working with web app, you must get a server runtime. This project uses Tomcat, version 9.0.58
To use tomcat:

- Go to https://tomcat.apache.org/ and download version 9.0.58 as a .zip file, which is suitable for use OS. 
- Extract the .zip in a suitable location and make it executable. (To test, go to http://localhost:8080/ and you should see the Tomcat management page)


Config Tomcat:

To make Tomcat working, follow the following steps: 

- In IntelliJ, go to File > Settings > Build, Execution, Deployment > Application Servers and with the top-left plus sign, add Tomcat server. 
- With the tomcat server added, in Run/Debug Configurations, set URL to http://localhost:8080/index 
- Under deployment, At the bottom set Application context to: /

Now the IntelliJ project is configured.

The minimum requirement for Java = JDK 14+



# Database Tunnel:

The web app makes usage of a remote database from storage and login. To access the database the following steps need to be made:

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

This tunnel needs to be open before running the web app, otherwise the database interaction will fail. 




# Possible issues:

if in the AutoComplete.jp errors are thrown at Asyc/await. Do the following:

- In IntelliJ go to File > Settings > Languages & Frameworks > JavaScript
- Set JavaScript language version to ECMAScript 6+
- Enable everything in libraries
- Webpack need to be set on automatically 


# Support:

All other questions can be emailed to p.visser@st.hanze.nl or e.ooms@st.hanze.nl

