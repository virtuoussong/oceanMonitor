import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import OceanMapView from './screens/OceanMapView';

//redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import areaListReducer from './Redux/reducers/area.js';
import area2ListReducer from './Redux/reducers/area2.js';
import area3ListReducer from './Redux/reducers/area3.js';
import area4ListReducer from './Redux/reducers/area4.js';

import coordinateReducer from './Redux/reducers/coordinateNav.js'

//DocumentFolderView
import FirstAreaListView from './screens/FolderViews/DocumentViewListView';
import SecondAreaListView from './screens/FolderViews/SecondAreaListView';
import ThirdAreaListView from './screens/FolderViews/ThirdAreaListView';
import DocumentDetailView from './screens/FolderViews/DocumentDetailView';
import AreaDetailView from './screens/FolderViews/AreaDetailView';
import RegionDetailView from './screens/DocDetail/components/RegionDetail/RegionDetailView';

//User List View
import UserListView from './screens/UserListView';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import { init } from './Redux/database/db';

init().then(()=>{
  console.log("initialized database")
}).catch(err => {
  console.log("initialize db failed", err)
});

const rootReducer = combineReducers({
  areaListRoot : areaListReducer,
  area2ListRoot : area2ListReducer,
  area3ListRoot : area3ListReducer,
  area4ListRoot : area4ListReducer,
  focusedPolygonRoot : coordinateReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


function MapScreen({ navigation }) {
  return (
    <OceanMapView toggleDrawer={() => navigation.toggleDrawer()}/>
  );
}

const Stack = createStackNavigator();

function Document({ navigation }) {

  let firstListView = props => (<FirstAreaListView 
    toggleDrawer={() => navigation.toggleDrawer()} 
    style={{flex: 1}}
    onPress={() => navigation.navigate("구역 2단계")}
  />);

  let secondListView = () => (<SecondAreaListView 
    toggleDrawer={() => navigation.toggleDrawer()} 
    onPress={() => navigation.navigate("구역 3단계")}
    viewAreaDetail={() => navigation.navigate("지역 정보")}
  />)

  let thirdListView = () => (<ThirdAreaListView 
    toggleDrawer={() => navigation.toggleDrawer()} 
    onPress={() => navigation.navigate("문서 페이지")}
    viewAreaDetail={() => navigation.navigate("지역 정보")}
  />)

  let documentDetailView =()=>(
    <DocumentDetailView 
          toggleDrawer={() => navigation.toggleDrawer()} 
    />
  )

  // let areaDetailView =()=> (
  //   <AreaDetailView 
  //     toggleDrawer={() => navigation.toggleDrawer()} 
  //   />
  // )

  let areaDetailView =()=> (
    <RegionDetailView 
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

      <Stack.Screen 
        name="지역 정보" 
        component={areaDetailView}/>
    </Stack.Navigator>
  );
}

// function Users({navigation}) {
//   let userEditView = () => <UserListView
//       toggleDrawer={() => navigation.toggleDrawer()} 
//   />

//   return userEditView;
// }

function Users({ navigation }) {
  return (
    <UserListView
      toggleDrawer={() => navigation.toggleDrawer()} 
  />
  );
}

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <Provider store={store}>
       <NavigationContainer>
        <Drawer.Navigator initialRouteName="지도">
          <Drawer.Screen name="지도" component={MapScreen} />
          <Drawer.Screen name="파일" component={Document}/>
          <Drawer.Screen name="작성자 목록" component={Users}/>
        </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

