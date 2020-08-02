---
title: Native Base Issue
slug: /14-native-base-issue
date: 2019-03-25
desc: next and go in Form don’t work (React Native and native-base)
# Old URL
# Minute Read
cover:
  img: ../../../photos/14-native-base-issue.png
banner: ../../banners/14-native-base-issue.png
tags:
  - React
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'

### next and go in Form don’t work (React Native and native-base) 😋

<p><span class='first-letter'>W</span>hen using native-base’s form to handle user’s username and password. When I press next or go from keyboard, it doesn’t move cursor to the next or doesn’t submit the inputs.</p>

I was getting error as:

<p>  <span class='error'>“_this2.refs.password.focus is not a function”</span> on onSubmitEditing of TextInput.</p>

This is how I fixed it:
- Upgraded package for native-base “^2.4.2” to  native-base “^2.7.1”.

```jsx
<Item floatingLabel style={{ marginLeft: 0 }}>
  <Label>Mobile Number</Label>
  <Input
    getRef={(input) => { this.textInput = input; }}
    onChangeText = {(phone) => this.setState({phone})}
    value = {this.state.phone}
    autoCapitalize="none"
    keyboardType='numeric'
    returnKeyType={"next"}
    maxLength = {10}
    onSubmitEditing={(event) => this._password._root.focus()}
  />
</Item>
<Item floatingLabel style={{ marginLeft: 0 }}>
  <Label>Password</Label>
  <Input
    getRef={(c) => this._password = c}
    onChangeText = {(password) => this.setState({password})}
    value={this.state.password}
    autoCapitalize="none"
    returnKeyType={"done"}
    secureTextEntry={this.state.hiddenPassword}
    onSubmitEditing = {this.handleLogin}
  />
</Item>

<TouchableOpacity>
  <Button style={styles.Button}
    onPress={this.handleLogin.bind(this)}>
    <Text style={styles.buttonText}>
      LOGIN
    </Text>
  </Button>
</TouchableOpacity>
```

That’s all for this blog now. Will keep it updated once I found any more issue.
