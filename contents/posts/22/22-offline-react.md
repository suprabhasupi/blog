Offline Notice In React Native
Have you ever seen the red “No Internet Connection” sign in mobile apps. It looks something like this:

I will show you how to create this in your React Native application.

Step 1:

NetInfo exposes info about online/offline status.
```
import { NetInfo } from 'react-native’
```

Step 2:

Add the below snippet into main file where you import Netinfo:
```
constructor() {
	super();
	this.state = {
		isConnected: true
	};
}
```

Our componentDidMount should look like this:



```
componentDidMount() { 		   	    NetInfo.isConnected.addEventListener('connectionChange',    this.handleConnectivityChange);
},
```
Also it is good practise to remove event listeners when your component is about to be unmounted to avoid any memory leakage, so we would do that in the componentWillUnmount lifecycle method.

```
componentWillUnmount() {  NetInfo.isConnected.removeEventListener('connectionChange',    this.handleConnectivityChange);
}
```
In View Part:
```
render() {
  {!this.state.isConnected ? <View>
      <Text>You are offline. Please check your connectivity</Text>
      </View>
      : <View><Text>Everything working fine!</Text></View>
  }
}
```

Thanks for reading this article ♥

I hope you find helpful. Feel free to ping me if you have any question on @suprabhasupi 😋