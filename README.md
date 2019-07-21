# React Native basic template

[x] - React Native: 0.60.4
[x] - React Navigation: 3.11.1
[x] - React Redux: 7.1.0 & redux: 4.0.4
[] - React Persins
[] - React Saga

## React Native

The branch master is the basic react native proyect.

## React Navigation

The branch react-navigation is the branch with a initial react navigation.

``npm run install``

``cd ios; pod install``

### Files:

    - app.js : app entry point
    - src/ : App folder
    - src/screens : App´s Screens
    - src/assets : App´s Assets
    - src/navigation : App´s navigator. Define here the screens for the app.
    - src/commponents : Folder for all app components "shared": components shared with others. 

## Redux

The banch redux has all necesaries files to run redux.

### New Files:

    - reducers/homeReducer: Home screen reducer
    - store/appStore: Main store. import here all the reducers.
