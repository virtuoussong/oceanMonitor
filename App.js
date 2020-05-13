import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import OceanMapView from './screens/OceanMapView';

//DocumentFolderView
import FirstAreaListView from './screens/FolderViews/DocumentViewListView';
import SecondAreaListView from './screens/FolderViews/SecondAreaListView';
import ThirdAreaListView from './screens/FolderViews/ThirdAreaListView';
import DocumentDetailView from './screens//FolderViews/DocumentDetailView';
// import DrawerNav from './navigation/DrawerNavigation';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function MapScreen({ navigation }) {
  return (
    <OceanMapView toggleDrawer={() => navigation.toggleDrawer()}/>
  );
}

const Stack = createStackNavigator();

function Document({ navigation }) {
  // useEffect(()=>{

  // }, [])

  let firstListView = props => (<FirstAreaListView 
    toggleDrawer={() => navigation.toggleDrawer()} 
    style={{flex: 1}}
    onPress={() => navigation.navigate("구역 2단계")}
  />);

  let secondListView = () => (<SecondAreaListView 
    toggleDrawer={() => navigation.toggleDrawer()} 
    onPress={() => navigation.navigate("구역 3단계")}
  />)

  let thirdListView = () => (<ThirdAreaListView 
    toggleDrawer={() => navigation.toggleDrawer()} 
    onPress={() => navigation.navigate("문서 페이지")}
  />)

  let documentDetailView =()=>(
    <DocumentDetailView 
          toggleDrawer={() => navigation.toggleDrawer()} 
    />
  )

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="구역 1단계" 
        component={firstListView}
      />
      <Stack.Screen 
        name="구역 2단계" 
        component={secondListView}
      />

      <Stack.Screen 
        name="구역 3단계" 
        component={thirdListView}/>

      <Stack.Screen 
        name="문서 페이지" 
        component={documentDetailView}/>
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="지도">
          <Drawer.Screen name="지도" component={MapScreen} />
          <Drawer.Screen name="파일" component={Document}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

