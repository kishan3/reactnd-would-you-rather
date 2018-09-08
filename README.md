# WouldYouRather Project

This is the react nanodegree project where it is a polling website.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── .gitignore # List of files to ignore from git.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
|   └── manifest.json
|   └── 404.html
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`utils/_DATA.js`](src/utils/_DATA.js) contains the methods you will need to perform necessary operations on the backend:

* [`_getUsers`](#getUsers)
* [`_getQuestions`](#getquestions)

### `getUsers`

Method Signature:

```js
_getUsers()
```

* Returns a Promise which resolves to a JSON object containing a collection of users objects.
* This collection represents the users currently in app.

### `getQuestions`

Method Signature:

```js
_getQuestions()
```

* questions: `<Object>` containing at minimum an `id` attribute
* Returns a Promise which resolves to a JSON object containing the Questions in the App.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

