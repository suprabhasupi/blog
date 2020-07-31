---
title: NativeBase
slug: /5-nativebase
date: 2019-02-07
desc: Build React Native apps over a single JavaScript codebase for Android and iOS
# Old URL
# Minute Read
cover:
  img: ../../../photos/5-nativebase.png
banner: ../../banners/5-nativebase.png
tags:
  - React
---

import LinkPost from '../../../src/components/linkPost'

It’s an open source framework to build React Native apps over a single JavaScript codebase for Android and iOS. So for make it easier, I am using Native Base. This helps you to build world-class application experiences on native platforms using pre built component for both Andriod and iOS.

Without Native base, you have to write separate component for Android and iOS manually. For Beginner, NativeBase prove to be huge time saver.

## Integrating Native Base to App:

- Install Native Base

```sh
$ npm install native-base --save
```

Now you can use the native-base component easily.

To know more about native base and it’s components please check: <LinkPost href='https://docs.nativebase.io/' name='https://docs.nativebase.io/' />

## Font Icons:

If you want to use font icons in app, then you have to use NativeBase custom fonts that can be loaded using loadAsync function.

```js
constructor() {
   super();
   this.state = {
     isReady: false,
     isConnected: true
   };
 }

async loadFonts() {
   await Expo.Font.loadAsync({
     Roboto: require("native-base/Fonts/Roboto.ttf"),
     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
     Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
   });
   this.setState({ isReady: true });
 }

componentWillMount() {
   Amplitude.initialize(AMPLITUDE_KEY);
   this.loadFonts();
 }

render() {
   if (!this.state.isReady) {
     return <Expo.AppLoading />;
   }

return()
}
```

Using above snippet, you can start using custom font into app.




