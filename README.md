# Forked from https://github.com/DimiMikadze/firebase-react-native-redux-starter
# Starter For Firebase, React Native,Redux Applications built using Expo, With 100% Of Code In Common Between IOS And Android, with built In Authentication, Crud Example And Form Validation.

## Features

- Authentication
- CRUD ( Create, Read, Update, Delete )
- Form validation
- Redux form library configuration
- Redux configuration
- React Native Router Flux configuration
- Linting with Airbnb eslint configuration
- Expo set up already 
- Listview replaced with Flatlist


## Getting started

### Clone Repo

````
git clone https://github.com/surbhitrao/firebase-expo-react-native-redux-starter
````

### yarn install dependencies

````
yarn install
````

## Firebase

### Create firebase app

- You'll need a JavaScript (web or Node.js) app to create at Firebase.
- Find firebase.json file in src directory, edit it with your Firebase app configuration.

### Add rules to firebase database

In firebase console navigate to, Database -> Rules and add following code snippet.

````
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
````

Also give authentication permission in Firebase console via Email and password.

## Application

## iOS and Android

````
yarn start
````

