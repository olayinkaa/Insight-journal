## installation
```shell
npx create-expo-app ./
npx create-expo-app furniture-app
```
## Core Components
```js
import {View, Button, Image, Text, pressable} from 'react-native'

<Button 
title="Click"
onPress={()=> {}}
color="midnightblue"
/>

//loading images
const logoImg = require("../assets/logo.png")

<Image
source={logoImg}
style={{width: 300, height: 300}}
/>

<Image
source={{uri: "https://picmap.com/logo.png"}}
style={{width: 300, height: 300}}
/>

<Pressable onPress={()=> {}}>
    <Image
    source={{uri: "https://picmap.com/logo.png"}}
    style={{width: 300, height: 300}}
    />
</Pressable>
```
```js
import { Modal, View, Text } from 'react-native'

<Modal 
isVisible={true} 
onRequestClose={()=> {}} animationType="fade" 
presentationStyle="formSheet" // pageSheet
>
    <View>
        <Text>Modal is here</Text>
    </View>
</Modal>
```
```js
import {StatusBar} from "react-native"
<StatusBar 
backgroundColor="lightgreen" 
barStyle="default" // light-content, dark-content
/>
```
```js
import {ActivityIndicator} from "react-native"
<ActivityIndicator
size={large}
color="midnightblue"
animating={false}
/>
```
```js
import {Alert, Button} from "react-native"
<Button title="click" onPress={()=> Alert.alert("Invalid dat!",[
    {
        text: "Cancel",
        onPress: ()=> console.log("Cancel Pressed)
    },
    {
        text: "Ok",
        onPress: ()=> console.log("Ok  Pressed)
    }
])}>
```
```js
import {StyleSheet} from 'react-native'

<View style={styles.container}></View>
<View style={[styles.container, styles.box]}></View>

const styles = StyleSheet.create({
    container: {

    },
    box: {
        shadowColor: "#33333",
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowRadius: 4,
        shadowOpacity: 0.6
    },
    androidShadow: {
        elevation: 10 // for shadow on android
    } 
    // shadow property does not work on android
    // shadowColor is the only property applicable to android and ios
})
```
```js
import {Platform} from "react-native"

Platform.OS === "android"
Platform.OS === "ios"

const styles = StyleSheet.create({
    text: {
        ...Platform.select({
            ios: {
                color: "purple",
                fontSize: 24
            },
            android: {
                color: "blue",
                fontSize: 23
            }
        })
    },
    box: {
        padding: Platform.OS === "android" ? 10 : 15
    }
 
})
```
```js
Platform specific code filename
CustomButton.android.js
CustomButton.ios.js

import CustomButton from './components/CustomButton'
```