## Try a RPG game

1. Project using [nodejs](http://nodejs.org/) and [socketio](http://socket.io/)
2. Its a test app.

## Settings up the project

1. script.js (Location: js/script.js) - Line No. 87 - Please replace the ip with your local ip(INTERNAL_IP).
2. I have used port 1111. Please make sure this port is not used by any other application. Might show some exceptions otherwise.
3. To start the server: In terminal please type the command below
  node js/server.js 
Above command will start the server.
4. Frontend url - http://INTERNAL_IP/walk/
* Please extract the folder and put it in localhost directory.

## Output

1. You can open the same url in multiple tabs. So you get to see multiple players.
2. You can see only red and grey colored squares. Which i am considering as players.
3. Grey square is the user itself. And red squares represents other users.
4. Players can be moved using arrow keys. i.e the grey square moves on pressing arrow keys. 
5. Movement of each user can be seen in every tab.

## Brief description

My walk folder contains:
1. css/
  a. "libs" directory contains my less files for this project. Which are compiled and exported as bootstrap.min.css.
  b. bootstrap.min.css - My css files to be imported for this project.
2. extras/
  - These are my configurations files for watchr.
  - Helps me to upload my changed files to server when i change any of the watched files. For this project i only used less.watchr for compiling my less files.
3. images/
  - All images goes here.
4. js/
  - "libs" directory usually contains all my external libraries.
  - "plugins.js" - Usually i concatenate all external libraries to this file.
  - "script.js" - Used for client side scripting.
  - "server.js" - Used for server side scripting.
5. index.html - The only html file as of now.


## Todo

1. Use grunt for build
2. Upgrade and complete level 1 asap.


