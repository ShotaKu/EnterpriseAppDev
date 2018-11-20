# LentBorrow
## About this project
This project was created for term project 1 for learn Enterprise Application Development (CS3433/SC4374) in Assumption University.

### Requirement:
 - Must have cart system (Session Management)
 - CLUD Operation (Can use any database system)

### Objective: 
 Create website which user can post book that they want to trading with other people. User can do following action in website.
   + Registration/Login
   + Post book
   + Request trading
   + See request box and accept/reject the requests
   + Search book
   + Delete posted books


## Installation
1. Install npm package management from [website](https://www.npmjs.com/)
2. Set path of npm then, run command
    ```
    cd <directory which you want to save npm data>
    npm install firebase --save
    ```
3. Download this project file from git
4. Installation finish

## Testing run
Open `public/index.html` by web browser

## Deploy
1. Run command to install firebase tools from npm
    ```
    npm install -g firebase-tools
    ```
2. Login firebase from command
    ```
    firebase login
    ```
3. Change to project file directory and setup firebase configuration  file
    ```
    cd <project file directory> /LentBorrow
    firebase init
    ```
4. Change to root directory of project file and run 
    ```
    firebase deploy
    ```

5. Deployment finish