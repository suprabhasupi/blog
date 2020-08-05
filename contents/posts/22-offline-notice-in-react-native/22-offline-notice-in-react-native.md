---
title: Offline Notice In React Native
slug: /22-offline-notice-in-react-native
date: 2020-06-01
desc: Handle no internet connection in react or react native
# Old URL
# Minute Read
cover:
  img: ../../../photos/22-offline-notice-in-react-native.png
banner: ../../banners/22-offline-notice-in-react-native.png
tags:
  - React
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import NoInternet1 from './1-no-internet-connection.png'
import NoInternet2 from './2-no-internet-connection.png'

Offline Notice In React Native

Have you ever seen the red “No Internet Connection” sign in mobile apps. It looks something like this:
<ImgPost src={NoInternet1} alt='no-internet-connection' width={60} margin='2rem 0' />

I will show you how to create this in your React Native application.

**Step 1:**

`NetInfo` exposes info about online/offline status.

```jsx
import { NetInfo } from 'react-native’
```

**Step 2:**

Add the below snippet into main file where you import `Netinfo`:

```jsx
constructor() {
    super();
    this.state = {
        isConnected: true
    };
}
```

Our `componentDidMount` should look like this:

```jsx
componentDidMount() {              
     NetInfo.isConnected.addEventListener('connectionChange',
     this.handleConnectivityChange);
},
```

Also it is good practise to remove event listeners when your component is about to be unmounted to avoid any memory leakage, so we would do that in the `componentWillUnmount` lifecycle method.

```jsx
componentWillUnmount() {  
    NetInfo.isConnected.removeEventListener('connectionChange', 
    this.handleConnectivityChange);
}
```

**In render:**

```jsx
render() {
  {!this.state.isConnected ? <View>
      <Text>You are offline. Please check your connectivity</Text>
      </View>
      : <View><Text>Everything working fine!</Text></View>
  }
}
```
<ImgPost src={NoInternet2} alt='no-internet-connection' width={30} />

Thanks for reading this article ♥

I hope you find helpful. If you have any question feel free to ping me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋
