## Android Build
```sh
npx expo prebuild -p android
cd android
./gradlew --version
./gradlew assembleRelease
adb install android/app/build/outputs/apk/release/app-release.apk
# android/app/build/outputs/apk/release/
# build a .aab
# bubdletools
java -jar bundletool.jar build-apks --bundle=app.abb --output=app.apks --mode=universal
```
```sh
# build a release .aab -> 
./gradlew bundleRelease
```

## IOS Build
```sh
npx expo prebuild -p ios
xcodebuild --version

```

## EAS
```sh
#ibrahimolayinkaa@gmail.com
#Isee-You-I4seeYouDollar*2
npm install -g eas-cli 
# To upgrade, run:
npm install -g eas-cli
eas login
whoami
eas init
eas build:configure
eas build
eas build --profile development --platform ios

# to convert aab to apk, you need bundletool

```
```sh
npx create-expo-app --template
npx expo install @react-native-async-storage/async-storage  
npm i convex
npx convex dev
npm create convex@latest
npm install --save-dev @svgr/cli
npx expo install react-native-svg
npx create-expo@latest --template default@sdk-54
npx expo install expo-web-browser
npx expo install expo-crypto
npx expo install @dev-plugins/react-query
```


```sh
npm install zod @hookform/resolvers
npm install react-hook-form 
npm install -D style-dictionary
```

# XCODE : how to start up
```sh
npx expo prebuild 
npx expo install expo-dev-client 
open ios/*.xcworkspace 
```

# Command
```sh
adb emu kill
adb devices
adb kill-server

# to run two emulator device or more at the same time
npx expo run:android --device 
# list all existing routes
npx expo-router-sitemap
npx expo install expo-blur 
# 
```

# React Native component
```sh
npm i react-native-keyboard-controller
npm install react-native-element-dropdown  
npm i react-native-safe-area-context
npm i react-native-svg
npm i react-native-size-matters

```

#
```sh
# 1. Shutdown all simulators
xcrun simctl shutdown all

# 2. Erase all simulators
xcrun simctl erase all

# 3. Boot simulator again
open -a Simulator

# 4. Restart expo
npx expo start --clear
xcrun simctl shutdown all && xcrun simctl erase all && open -a Simulator
```

```md
How they work together (The Workflow)When you want to add a native feature (like the Camera we discussed):

- Install the library: npx expo install expo-camera
- Install the client: npx expo install expo-dev-client (only once).
- Run Prebuild: npx expo prebuild (generates the ios folder with camera permissions).
- Run Locally: npx expo run:ios (this compiles the native code and installs the app on your simulator).
```

## Opening Development build on IOS simulator
```sh
xcrun simctl list devices
npx expo run:ios --device "CC4CFFD7-7033-4DFD-8149-5C41AECE2D3A"
```

## ANDROID
```sh
# list android emulator devices
emulator -list-avds  

```


## Packages & Libraries
- react-native-onboarding-swiper
- react native gesture handler