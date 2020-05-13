import React from 'react';
import {View, SafeAreaView, Button, Platform} from 'react-native';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import OceanMap from '../screens/OceanMapView';
import { NavigationContainer } from '@react-navigation/native';



function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  
  const Drawer = createDrawerNavigator();
  
  const DrawerNav = () => {
    return (
      <NavigationContainer style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="지도" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

  export default DrawerNav;

