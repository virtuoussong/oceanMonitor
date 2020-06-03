import React, { useState, useEffect, useCallback } from "react";
import {ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Animated, Image, Easing, Modal } from "react-native";
import MapView, {PROVIDER_GOOGLE, Polygon, Marker, Polyline, Circle, fitToCoordinates } from "react-native-maps";
import LocationNameModal from '../screens/LocationNameModel';
import RightSideView from '../screens/RightSideView';
import DrawerNavButton from '../components/DrawerNavButton';
import { getDistance, getAreaOfPolygon, getCenterOfBounds } from 'geolib';

import * as areaActions from '../Redux/actions/area.js';
import * as area2Actions from '../Redux/actions/area2.js';
import * as area3Actions from '../Redux/actions/area3.js';
import * as polygonNavAction from '../Redux/actions/coordinateNav.js';

import { useSelector, useDispatch } from "react-redux";

const OceanMapView = (props) => {
  const [newPolygon, setNewPolygon] = useState([]);
  // const [polygonsState, setPolygonAdd] = useState(polygonArray);
  const [isAddingPolygon, setAddPolygon] = useState(false);
  const [addButtonText, setAddButton] = useState("지역 추가");
  const [viewLevel, setViewLevel] = useState({currentViewLevel: 1});
  const [rightSideDrawer, setRgithSideDrawer] = useState(new Animated.Value(-270))
  const [isRightDrawerOpen, setRightDrawer] = useState(false)
  const [arrowRotate, setArrowRotate] = useState(new Animated.Value(0))
  const [modalVisible, setModalVisible] = useState(false);
  const [isMeasuringLength, startMeasureDistance] = useState(false);
  const [distanceLines, setDistanceDots] = useState([]);
  const [distanceArray, setDistanceText] = useState([]);
  const [totalDistance, setTotalDistance] = useState();
  const [isMeasuringArea, setIsMeasuringArea] = useState(false);
  const [measuredArea, setMeasuredArea] = useState();
  const [isMeasuringCircle, setIsMeasuringCircle] = useState(false)
  const [circleCoordinates, setCircleCoordinates] = useState([])
  const [circleValue, setCircleCoordinate] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);




  // useEffect(() => {
  //   setPolygonAdd(polygonArray)
  //   // setAddPolygon(false)
  // }, [
  //   circleCoordinates, circleValue, isMeasuringCircle, measuredArea, totalDistance, setPolygonAdd, setNewPolygon, setAddPolygon, setAddButton, setViewLevel, setRgithSideDrawer, setArrowRotate, setModalVisible, startMeasureDistance, setDistanceDots
  // ])

  useEffect(() => {
    // setPolygonAdd(polygonArray)
    // setAddPolygon(false)
  }, [
    newPolygon, 
    // polygonsState, 
    addButtonText, 
    rightSideDrawer, isRightDrawerOpen, arrowRotate, 
    modalVisible, 
    isMeasuringLength, totalDistance, 
    isMeasuringArea, measuredArea,  
    isMeasuringCircle, circleValue,   
  ])
  
  const dispatch = useDispatch();

  


  const areaList = useSelector(state => state.areaListRoot.areaList)
  const loadAreas = useCallback(async()=>{
    setError(null)
    try {
      await dispatch(areaActions.fetchArea())
    } catch (err) {
      setError(err)
    }
  }, [dispatch, setIsLoading])

  useEffect(()=>{
    setIsLoading(true);
    loadAreas().then(()=>{
      setIsLoading(false)
      console.log("areaListReducer", areaList)
    })
  }, [dispatch, loadAreas])

  //Area 2
  const area2List = useSelector(state => state.area2ListRoot.areaList)
  // const load2Areas = useCallback(async()=>{
  //   setError(null)
  //   try {
  //     await dispatch(area2Actions.fetchArea2())
  //   } catch (err) {
  //     setError(err)
  //   }
  // }, [dispatch, setIsLoading])

  // useEffect(()=>{
    // setIsLoading(true);
    // load2Areas().then(()=>{
    //   setIsLoading(false)
    //   // console.log("area2ListReducer", area2List)
    // })
  // }, [dispatch, area2List])

  const area3List = useSelector(state => state.area3ListRoot.areaList)
  const load3Areas = useCallback(async()=>{
    setError(null)
    try {
      await dispatch(area3Actions.fetchArea3())
    } catch (err) {
      setError(err)
    }
  }, [dispatch, setIsLoading])
  
  useEffect(()=>{
    setIsLoading(true);
    load3Areas().then(()=>{
      setIsLoading(false)
      console.log("area2ListReducer", area2List)
    })
  }, [dispatch, load3Areas])

  // const backtoLevel1 = useSelector(state => state.area2ListRoot.idForLevel1)
  // const backToLevel1Load = useCallback(async()=>{
  //   console.log("back t0 level 1")
  // }, [dispatch, backtoLevel1])

  const polygonNav = useSelector(state => state.focusedPolygonRoot.focusedPolygon)
  const loadPolyNav = useCallback(async()=>{
    try {
        await dispatch(polygonNavAction.fetchCoordinate())
    } catch (err) {
        setError(err)
    }
  }, [dispatch])

  useEffect(()=>{
    loadPolyNav().then(()=>{
      if (polygonNav.level == 1) {
        let region = {
          latitude: 34.7834049,
          longitude: 127.79654869999999,
          latitudeDelta: 0.5922,
          longitudeDelta: 0.5421
        }
        mapRef.current.animateToRegion(region, 3)
      } else if (polygonNav.level == 2) {
        console.log("poly nav changed")
        let coordinates = polygonNav.areaData.coordinates
        mapRef.current.fitToCoordinates(coordinates, {
          edgePadding: { 
            top: 10,
            right: 10,
            bottom: 10,
            left: 10
          },
          animated: true
        })
      }
    })
 
  }, [dispatch, polygonNav])

  // useEffect(()=>{
   
  //   let region = {
  //     latitude: 34.7834049,
  //     longitude: 127.79654869999999,
  //     latitudeDelta: 0.5922,
  //     longitudeDelta: 0.5421
  //   }
  //   mapRef.current.animateToRegion(region, 3)

  //   let newLevel = {
  //     currentViewLevel : 1,
  //     parentID : null
  //   }

  //   setViewLevel(newLevel)

  //   dispatch(focusePolygonData.updateCoordinate(1))
  // }, [dispatch, backtoLevel1])
  
  const onMapTap = e => {
    let newDots = e.nativeEvent.coordinate
    if (isAddingPolygon || isMeasuringArea) {
      setNewPolygon(newPolygon => [...newPolygon, newDots])
    }

    if (isMeasuringLength) {
      setDistanceDots(newPolygon => [...newPolygon, newDots])
    }

    if (isMeasuringCircle) {
      if (circleCoordinates.length == 2) {
        let newArray = [...circleCoordinates]
        newArray[1] = newDots
        setCircleCoordinates(newArray)
      } else {
        setCircleCoordinates(array => [...array, newDots])
      }
      
    }
  };

  const polygonTapp = (index, data) => {

    let currentLevel = polygonNav.level

    if (currentLevel < 4) {
      // currentLevel += 1
      let focusedPolygonView = {
        currentViewLevel : currentLevel,
        parentID : viewingList[index].id
      }
      // setViewLevel(focusedPolygonView)
      let coordinates = viewingList[index].coordinates
      if (currentLevel == 1) {
        dispatch(polygonNavAction.updateCoordinate(2, data))
      }

    }    
  };

  

  const loadAreaData = (data) => {
    let currentLevel = data.currentViewLevel
    if (currentLevel == 2) {
      // load2Areas()
      console.log("id for filter", data.parentID)
      dispatch(area2Actions.fetchFilteredList(data.parentID))
    }
    if (currentLevel == 3) {
      load3Areas()
    }

  }

 


  const addPolygon = () => {
    if (!isAddingPolygon) {
      setAddButton("완료")
      setAddPolygon(true)
    } else {
      if (newPolygon.length > 2) {
        toggleModal()
      } else {
        console.log("add more dots")
      }
    }
  };

  const saveNameAdded = (text) => {
    toggleModal()
    setAddButton("지역 추가")
    setAddPolygon(false)
    addPolygonToMap(text)
    setNewPolygon([])
  }

  const addPolygonToMap = (text) => {
    
    let coordinateForName = getCenterOfBounds(newPolygon)

    if (polygonNav.level == 1) {
      dispatch(
        areaActions.addArea(
          new Date().toString(),
          text,
          coordinateForName,
          newPolygon,
        )
      )
    } else if (polygonNav.level == 2) {
      // console.log("polygonNav", polygonNav)
      dispatch(
        area2Actions.addArea2(
          new Date().toString(),
          text,
          coordinateForName,
          newPolygon,
          polygonNav.areaData.id
        )
      )
    } else if (polygonNav.level == 3) {

      dispatch(
        area3Actions.addArea3(
          new Date().toString(),
          text,
          coordinateForName,
          newPolygon,
          polygonNav.areaData.id
        )
      )
      
    }
  }

  const deletePoint = () => {
    if (isAddingPolygon) {
      let deleteIndex = newPolygon.length - 1
      setNewPolygon(newPolygon.filter((item, index) => index != deleteIndex))
    } 
  }


  useEffect(()=>{
    createRadius()
    // console.log("circleValue", circleValue)
  }, [circleCoordinates])


  const createRadius = () => {
    // console.log("circleCoordinates", circleCoordinates)
    if (circleCoordinates.length > 1) {
      let radiusCalc = getDistance(circleCoordinates[0], circleCoordinates[1])

      let value = {
        coordinate: circleCoordinates[0],
        radius: radiusCalc
      }

      setCircleCoordinate(value)
    }
    
  }

  useEffect(()=>{
    if (distanceLines.length > 1) {
      let lastIndex = distanceLines.length - 1
      let onebeforeIndex = lastIndex - 1
      let firstCooridinate = distanceLines[onebeforeIndex]
      let lastCoordinate = distanceLines[lastIndex]

      let distanceObject = {
        distanceVal: getDistance(firstCooridinate, lastCoordinate),
        coordinate: lastCoordinate
      }
      setDistanceText(distanceText => [...distanceText, distanceObject])
    }
  }, [distanceLines])

  useEffect(()=>{
    calcTotalDistance()
  }, [distanceArray])

  const calcTotalDistance = () => {
    let total = 0
    distanceArray.forEach((i)=>{
      total += i.distanceVal
    })
    setTotalDistance(total)
    console.log("total distance", total)
  }

  useEffect(()=>{
    if (isMeasuringArea) {
      calcArea()
    } 
  },[newPolygon])

  const calcArea =() => {
    let array = []
    newPolygon.forEach((item, index) => {
      let element = [item.latitude, item.longitude]
      array.push(element)
    })
    let result = getAreaOfPolygon(array)
    setMeasuredArea(result)
  }

  const cancelAddPolygon = () => {
    setAddPolygon(false)
    setNewPolygon([])
    setAddButton("지역 추가")
  }

  
  const rightViewToggle = () => {
    setRightDrawer(!isRightDrawerOpen)
    Animated.timing(
      rightSideDrawer,
      {
        toValue: isRightDrawerOpen ? -270 : 0,
        duration: 200
      }
    ).start();

    Animated.timing(
      arrowRotate,
      {
        toValue: isRightDrawerOpen ? 1 : 0,
        duration: 200
      }
    ).start();
  }

  const spin = arrowRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  })

  const movePoint = (e, index) => {
    let array = [...newPolygon]
    var movingPoint = e.nativeEvent.coordinate
    array[index] = movingPoint
    setNewPolygon(array)
  }

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  const toggleDrawer = () => {
    // console.log("toggle drawer menu")
    props.toggleDrawer()
  }

  let addButtonRef = React.createRef()
  let mapRef = React.createRef()

  const startDistanceMeasurement = ()=>{
    if (isMeasuringLength) {
      startMeasureDistance(false)
      setDistanceDots([])
      setDistanceText([])
    } else {
      startMeasureDistance(true)      
    }
  }

  const startAreaMeasurement=()=>{
    if (isMeasuringArea) {
      setIsMeasuringArea(false)
      setNewPolygon([])
    } else {
      setIsMeasuringArea(true)
    }
  }

  const startRadiusMeasurement=()=>{
    if (isMeasuringCircle) {
      setIsMeasuringCircle(false)
      setCircleCoordinate()
      setCircleCoordinates([])
    } else {
      setIsMeasuringCircle(true)
    }
  }

  const captureScreen=()=>{

  }

  const backPressed=()=> {
    console.log("back pressed in right side view")
  }

  if (isLoading) {
    return <View style={styles.centered}>
        <ActivityIndicator size={'large'} color={"red"} />
    </View>
  }

  if (!isLoading && areaList === null) {
    return <View style={styles.centered}>
        <Text>No Products Found. Maybe Start Adding Some Shit</Text>
    </View>
  }

  let viewingList;
  if (polygonNav.level == 1) {
    viewingList = areaList
  } else if (polygonNav.level == 2) {
    viewingList = area2List
  } else if (polygonNav.level == 3) {
    viewingList = area3List
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 34.7834049,
          longitude: 127.79654869999999,
          latitudeDelta: 0.5922,
          longitudeDelta: 0.5421
        }}
        provider={"google"}
        mapType={"standard"}
        onPress={onMapTap}
      >
        {/* {
          viewLevel==1 && polygonsState && polygonsState.map((i, index) => {
            console.log("i.coordinateforname", i)
            return <React.Fragment>
              <Polygon
                  key={`${index}polygon`}
                  coordinates={i.coordinates}
                  strokeWidth={3}
                  strokeColor={"yellow"}
                  // fillColor={"#000, rgba(r,g,b,0.5)"}
                  lineCap={"round"}
                  tappable={true}
                  onPress={() => polygonTapp(index)}
                  geodesic={true}
              />
              <Marker
             
                key={`${index}marker`}
                coordinate={i.nameCoordinate}
                anchor={{ x: 0.5, y: 0.5 }}
                resizeMode={'contain'}
              >
                <Text style={{fontSize: 24, fontWeight: "bold"}}>{i.name}</Text>
              </Marker>

            </React.Fragment> 
          })
        } */}

        {
          !isLoading && viewingList && viewingList.map((i, index) => {
            // console.log("i.coordinateforname", i)
            return <React.Fragment>
              <Polygon
                  key={`${index}polygon`}
                  coordinates={i.coordinates}
                  strokeWidth={3}
                  strokeColor={"yellow"}
                  // fillColor={"#000, rgba(r,g,b,0.5)"}
                  lineCap={"round"}
                  tappable={true}
                  onPress={() => polygonTapp(index, i)}
                  geodesic={true}
              />
              <Marker
             
                key={`${index}marker`}
                coordinate={i.nameCoordinate}
                anchor={{ x: 0.5, y: 0.5 }}
                resizeMode={'contain'}
              >
                <Text style={{fontSize: 24, fontWeight: "bold"}}>{i.name}</Text>
              </Marker>
            </React.Fragment> 
          })
        }

        {
          (isAddingPolygon || isMeasuringArea) && newPolygon.length > 0 && newPolygon.map((i, index)=>{
            return <Marker
              draggable
              onDrag={(e) => movePoint(e, index)}
              onDragEnd={(e) => movePoint(e, index)}
              key={`${index}marker`}
              coordinate={i}
              anchor={{ x: 0.5, y: 0.5 }}
              resizeMode={'contain'}
            >
              <Image 
                source={require('../assets/yellowCircle.png')} 
                style={{width: 20, height: 20}}
                resizeMode="contain"
              />
            </Marker>
          })
        }
        {
          (isAddingPolygon || isMeasuringArea) && newPolygon.length > 2 && (
              <Polygon
                coordinates={newPolygon}
                strokeWidth={3}
                strokeColor={"yellow"}
                // fillColor={"#000, rgba(r,g,b,0.5)"}
                lineCap={"round"}
                tappable={true}
                geodesic={true}
              />
          )
        }
        {
           (isAddingPolygon || isMeasuringArea) && newPolygon.length > 1 && (
              <Polyline
                coordinates={newPolygon}
                strokeWidth={3}
                strokeColor={"yellow"}
              />
          )
        }
        
        {
          isMeasuringLength && distanceLines.length > 1 && (
              <Polyline
                coordinates={distanceLines}
                strokeWidth={3}
                strokeColor={"yellow"}
              />
          )
        }

        {
          isMeasuringLength && distanceLines.length > 0 && distanceLines.map((i, index)=>{
            return <Marker
              key={`${index}marker`}
              coordinate={i}
              anchor={{ x: 0.5, y: 0.5 }}
              resizeMode={'contain'}
            >
              <Image 
                source={require('../assets/yellowCircle.png')} 
                style={{width: 20, height: 20}}
                resizeMode="contain"
              />
            </Marker>
          })
        }
        {
          distanceArray.length > 0 && distanceArray.map((i, index) => {
            return <Marker
              key={`${index}marker`}
              coordinate={i.coordinate}
              anchor={{ x: 0.5, y: 1.7 }}
              resizeMode={'contain'}
            >
              <Text>{`${i.distanceVal.toLocaleString()}m`}</Text>
            </Marker>
          })
        }
        {
          distanceArray.length > 1 && (
              <Marker
                coordinate={distanceArray[distanceArray.length-1].coordinate}
                anchor={{ x: 0.4, y: 2.7 }}
                resizeMode={'contain'}
              >
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  {`합: ${totalDistance.toLocaleString()}m`}
                </Text>
              </Marker>
          )
        }
        {
          isMeasuringArea && newPolygon.length > 2 && (
            <Marker
                coordinate={newPolygon[newPolygon.length-1]}
                anchor={{ x: 0.4, y: 2.7 }}
                resizeMode={'contain'}
              >
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  {`면적: ${Math.round(measuredArea).toLocaleString()}m²`}
                </Text>
            </Marker>
          )
        }

        {
          isMeasuringCircle && circleValue && (
            <Circle 
              center={circleValue.coordinate} 
              radius={circleValue.radius} 
              fillColor={"rgba(255,69,57, 0.4)"}
              strokeWidth={3}
              strokeColor={"red"}
            />
          )
        }

        {
          isMeasuringCircle && circleCoordinates.length > 0 && (
            circleCoordinates.map((i, index)=>{
              return (
                <Marker
                  key={`${index}circleMarker`}
                  coordinate={i}
                  anchor={{ x: 0.5, y: 0.5 }}
                  resizeMode={'contain'}
                >
                  <Image 
                    source={require('../assets/yellowCircle.png')} 
                    style={{width: 20, height: 20}}
                    resizeMode="contain"
                  />
                </Marker>
            )
            })
          )
        }
        {
          isMeasuringCircle && circleCoordinates.length > 1 && (
            <Polyline
              coordinates={circleCoordinates}
              strokeWidth={3}
              strokeColor={"yellow"}
            />
        )
        }
        {
          isMeasuringCircle && circleValue && (
            <Marker
                coordinate={circleCoordinates[1]}
                anchor={{ x: 0.4, y: 2.7 }}
                resizeMode={'contain'}
              >
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  {`지름: ${Math.round(circleValue.radius).toLocaleString()}m²`}
                </Text>
            </Marker>
          )
        }

      </MapView>
      
      {/* <TouchableOpacity style={styles.leftButton} onPress={toggleDrawer}>
        <Image source={require('../assets/drawerNavIcon.png')} resizeMode={'contain'}/>
      </TouchableOpacity> */}
      <DrawerNavButton style={styles.leftButton} toggleDrawer={toggleDrawer}/>

      <View style={[{position: 'absolute', width: 100, top: 'auto', bottom: 'auto',left: 50}]}>
        <TouchableOpacity onPress={startDistanceMeasurement} style={[{backgroundColor: `${isMeasuringLength ? "lightblue" : "white"}`, width: 50, height: 50, marginBottom: 2}, styles.centerItem]}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{"거리\n재기"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={startAreaMeasurement} style={[{backgroundColor: `${isMeasuringArea ? "lightblue" : "white"}`, width: 50, height: 50, marginBottom: 2}, styles.centerItem]}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{"면적\n재기"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={startRadiusMeasurement} style={[{backgroundColor: `${isMeasuringCircle ? "lightblue" : "white"}`, width: 50, height: 50, marginBottom: 2}, styles.centerItem]}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{"반경\n재기"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={captureScreen} style={[{backgroundColor: 'white', width: 50, height: 50, marginBottom: 2}, styles.centerItem]}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{"화면\n캡쳐"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.addButton}>
        <TouchableOpacity style={styles.polygonAddButtons} onPress={addPolygon}>
          <Text ref={addButtonRef}>
            {addButtonText}
          </Text>
        </TouchableOpacity>
        {
          isAddingPolygon && <TouchableOpacity style={styles.polygonAddButtons} onPress={cancelAddPolygon}><Text>취소</Text></TouchableOpacity>
        }
        {
          isAddingPolygon ? 
            <TouchableOpacity style={styles.polygonAddButtons} onPress={deletePoint}><Text>뒤로</Text></TouchableOpacity> :
            null
        }
      </View>

      <Animated.View style={[styles.rightViewContainer, {right: rightSideDrawer}]}>
          <TouchableOpacity onPress={rightViewToggle} style={styles.rightViewButton}>
              <Animated.Image 
                source={require('../assets/triangle.png')}
                style={[styles.triangleButton, {transform: [{rotate: spin}]}]}
                resizeMode="contain"
              />
          </TouchableOpacity>
          <RightSideView list={areaList} backPressed={backPressed}/>
      </Animated.View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onPress={toggleModal}
      >
          <LocationNameModal toggle={toggleModal} addCompletion={(text)=>saveNameAdded(text)}/>
      </Modal>
    </View>
  );
};


export default OceanMapView;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: "100%",
    height: "100%"
  },
  leftButton: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 30,
    top: 30,
  },
  rightViewContainer: {
    width: 300,
    height: "100%",
    position: "absolute",
    top: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  rightViewButton: {
    width: 30,
    height: 80,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius : 15,
    alignItems: "center",
    justifyContent: 'center'
  },
  rightView: {
    backgroundColor: "white",
    flex: 1,
    alignSelf: "stretch"
  },
  addButton: {
    flexDirection: "row",
    position: "absolute",
    bottom: 50,    
  },
  polygonAddButtons: {
    marginRight: 10,
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    backgroundColor: "white"
  },
  triangleButton: {
    width:30, height: 30
  },

});
