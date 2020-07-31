---
title: React Native App using EXPO
slug: /4-react-native-app-using-expo
date: 2019-02-06
desc: Build an react native app in short time using Native Base and Expo
# Old URL
# Minute Read
cover:
  img: ../../../photos/3-adoptive-headers-using-css.png
banner: ../../banners/1-aws-appsync-integration-with-react-native.png
tags:
  - React
---

import ImgPost from '../../../src/components/imgPost'
import FolderStructure from './1.png'

For beginner, who wants to start working on APP, it’s really easy to start with EXPO. We can build an app in short time using Native Base and Expo. Xcode or Android Studio are not required. We just have to install another tool called expo.

This toolchain includes * over the air (OTA)** updates, easy build tooling and a lot of extra API’s on top of React-Native.

## What is OTA:

An OTA update does pretty much what it says. You send an update out, the user downloads it, and the app updates — much like the web. OTA updates are a strong point of React Native. Since we, the developers, usually write our logic in JavaScript (which doesn’t have to be compiled and installed) we can just send out a new JavaScript bundle, and once the user downloads `{“type”:”block”,”srcIndex”:0,”srcClientId”:”9e83ea28-f3a5-4f1c-be6e-7ddde7f002cc”,”srcRootClientId”:””}` it they have the updated logic! No waiting required.

#### <mark>PROS:</mark>

- Easy to get started
- Option to live reload on Expo app and others
- Support both iOS and Android from the start.
- Save valuable time when creating production builds
- Publish updates for your apps faster
- Easily we can integrate push notification

#### <mark>CONS:</mark>

- If you need to keep your app size extremely lean, Expo may not be the best choice
- Must stick with supported SDK’s

### SETUP

We can setup the EXPO react native app in following steps:

- Make sure Node.js has been installed in the system
- `$ brew install watchman`
- Install `npm install -g create-react-native-app`
- Then run the following commands to create a new React Native project
    - `create-react-native-app fooodie` or
    - `cd create-react-native-app AwesomeProject`
    - `npm start`


which will start the server.

How my folder structure for App looks like:

<ImgPost src={FolderStructure} alt="folder structure for expo react native" width="30" margin="10px" />

#### Let's understand `app.json` file:

In root we have app.json file which is configuration file for react native which contains many variables. 

*Such as:*

- <mark>Splash screen</mark>: First screen where user comes first.

- <mark>androidStatusBar</mark>: where the battery is present.

- <mark>associatedDomain</mark>: write all the list of api’s which we are using in app.

- <mark>Android permission</mark>: We have to give location information such as goole key.

- <mark>certificateHash</mark> will be generated from android Xcode.


## How to debug React Native

To debug React native code, You need to install `react-devtools` 

```sh
$ npm install -g react-devtools
```

Add the script for react-devtools in `package.json`

```json
"react-devtools": "react-devtools"
```

Run at root of the project
```sh
$ npm run react-devtools
```

## Access console log in React Native:

Expo gives the script which will show the console in react native if there is any.

```sh
$ react-native log-ios
```

## Expo Vector Icons

Adding Expo Vector Icons to the project. 
Check out it <a href='https://ionicons.com/' target='_blank' rel="noopener noreferrer"> here</a>.

## How to make Build?

To make a build and export, you can use the below following commands:
1. To build android APK:
   ```sh
   $ exp build:android
    ```

2. To check the status:
    ```sh
    $ exp build:status
    ```

    which will give result like:
    ```sh
    the Apk’s is hosted on amazon aws
    [exp] Android:
    [exp] APK: https://HOST/yourapp.apk
      ```

## Bug Log

To log the bugs, you can use <a href='https://sentry.io/welcome/' target='_blank' rel="noopener noreferrer">sentry</a>.
