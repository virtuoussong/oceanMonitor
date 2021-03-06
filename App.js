import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
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
import FourthAreaListView from './screens/FolderViews/FourthAreaList';
import DocumentDetailView from './screens/FolderViews/DocumentDetailView';
import AreaDetailView from './screens/FolderViews/AreaDetailView';
import RegionDetailView from './screens/DocDetail/components/RegionDetail/RegionDetailView';

//User List View
import UserListView from './screens/UserListView';

//location setting
import DefaultLocationSetting from './screens/DefaultMapLocation';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import { init, initArea1Table } from './Redux/database/db';

import {initArea2Table} from './Redux/database/area2DB';
import {initArea3Table} from './Redux/database/area3DB';
import {initArea4Table} from './Redux/database/area4DB';
import { initRegionDocTable } from './Redux/database/regionDoc';
import { initLocationDocTable } from './Redux/database/locationDoc';
import {initRegionMarkTable} from './Redux/database/regionMarks';
init().then(()=>{
  // console.log("initialized database")
}).catch(err => {
  console.log("initialize db failed", err)
});

initRegionMarkTable().then(()=>{
  console.log("initialized region mark database")
}).catch(err => {
  console.log("initialize  region mark db failed", err)
});

initArea1Table().then(()=>{
  // console.log("initialized initArea1Table database")
}).catch(err => {
  console.log("initialize initArea1Table db failed", err)
});

initArea2Table().then(()=>{
  console.log("initialized initArea2Table database")
}).catch(err => {
  console.log("initialize initArea2Table db failed", err)
});


initArea3Table().then(()=>{
  // console.log("initialized initArea1Table database")
}).catch(err => {
  console.log("initialize initArea3Table db failed", err)
});

initArea4Table().then(()=>{
  console.log("initialized initArea4Table database")
}).catch(err => {
  console.log("initialize initArea4Table db failed", err)
});

initRegionDocTable().then(()=>{
  // console.log("initialized initArea1Table database")
}).catch(err => {
  console.log("initialize initRegionDocTable db failed", err)
});

initLocationDocTable().then(()=>{
  // console.log("initialized initArea1Table database")
}).catch(err => {
  console.log("initialize initLocationDocTable db failed", err)
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
    {...props}
    toggleDrawer={() => navigation.toggleDrawer()} 
    style={{flex: 1}}
    onPress={() => navigation.navigate("구역 2단계")}
  />);

  let secondListView = props => (<SecondAreaListView 
    {...props}
    toggleDrawer={() => navigation.toggleDrawer()} 
    onPress={() => navigation.navigate("구역 3단계")}
    viewAreaDetail={() => navigation.navigate("지역 정보")}
  />)

  let thirdListView = props => (<ThirdAreaListView 
    {...props}
    toggleDrawer={() => navigation.toggleDrawer()} 
    onPress={() => navigation.navigate("구역 4단계")}
    viewAreaDetail={() => navigation.navigate("지역 정보")}
  />)

  let fourthListView = props => (<FourthAreaListView
    {...props}
    // toggleDrawer={() => navigation.toggleDrawer()} 
    viewAreaDetail={() => navigation.navigate("지역 정보")}
  />)

  let documentDetailView = props =>(
    <DocumentDetailView 
      {...props}
      toggleDrawer={() => navigation.toggleDrawer()} 
    />
  )

  // let areaDetailView =()=> (
  //   <AreaDetailView 
  //     toggleDrawer={() => navigation.toggleDrawer()} 
  //   />
  // )

  let areaDetailView = props => (
    <RegionDetailView 
      {...props}
      // toggleDrawer={() => navigation.toggleDrawer()} 
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
        component={thirdListView}
      />

      <Stack.Screen 
        name="구역 4단계" 
        component={fourthListView}
      />

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

function LocationSetting({ navigation }) {
  return (
    <DefaultLocationSetting
      toggleDrawer={() => navigation.toggleDrawer()}
    />
  )
}

const Drawer = createDrawerNavigator();


export default function App() {
  // const [isLoaded, setLoad] = useState(false)

  // if (isLoaded == false) {
  //   return <View style={{flex: 1}}>
  //     <Image  onLoad={loadDone} />
  //   </View>
  // }

  // const loadDone = () => {

  // }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="지도">
          <Drawer.Screen name="지도" component={MapScreen} />
          <Drawer.Screen name="파일" component={Document}/>
          <Drawer.Screen name="작성자 목록" component={Users}/>
          <Drawer.Screen name="기본 지역 설정" component={LocationSetting}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

