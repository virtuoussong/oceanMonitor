import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Animated, Image, Easing, Modal } from "react-native";
import MapView, {PROVIDER_GOOGLE, Polygon, Marker, Polyline, fitToCoordinates } from "react-native-maps";
import LocationNameModal from '../screens/LocationNameModel';
import RightSideView from '../screens/RightSideView';
import DrawerNavButton from '../components/DrawerNavButton';
import { getDistance } from 'geolib'
const polygonArray = [
  {
    id: 0,
    coordinates: [
      { latitude: 34.897496004554114, longitude: 127.66647946089506 },
      { latitude: 34.88281733008958, longitude: 127.79087428003548 },
      { latitude: 34.712926735580794, longitude: 127.70314324647188 }
    ]
  }
];

const OceanMapView = (props) => {
  const [newPolygon, setNewPolygon] = useState([]);
  const [polygonsState, setPolygonAdd] = useState([]);
  const [isAddingPolygon, setAddPolygon] = useState(false);
  const [addButtonText, setAddButton] = useState("지역 추가");
  const [viewLevel, setViewLevel] = useState(1);
  const [rightSideDrawer, setRgithSideDrawer] = useState(new Animated.Value(-270))
  const [isRightDrawerOpen, setRightDrawer] = useState(false)
  const [arrowRotate, setArrowRotate] = useState(new Animated.Value(0))
  const [modalVisible, setModalVisible] = useState(false);
  const [isMeasuringLength, startMeasureDistance] = useState(false);
  const [distanceLines, setDistanceDots] = useState([]);

  useEffect(() => {
    setPolygonAdd(polygonArray)
    setAddPolygon(false)
  }, [
    setPolygonAdd, setNewPolygon, setAddPolygon, setAddButton, setViewLevel, setRgithSideDrawer, setArrowRotate, setModalVisible, startMeasureDistance, setDistanceDots
  ])

  const onMapTap = e => {
    let newDots = e.nativeEvent.coordinate
    if (isAddingPolygon) {
      setNewPolygon(newPolygon => [...newPolygon, newDots])
    }

    if (isMeasuringLength) {
      console.log("new dots",newDots)
      setDistanceDots(newPolygon => [...newPolygon, newDots])
      let distance = getDistance(distanceLines)
      console.log("distance", distance)
      // console.log("distance", getDistance([{
      //   "latitude": 34.68865088845089,
      //   "longitude": 127.5228703022003,
      // }, {
      //   "latitude": 34.65892416171042,
      //   "longitude": 127.71298997104167,
      // }]))
      
    }
  };



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


  const cancelAddPolygon = () => {
    setAddPolygon(false)
    setAddButton("지역 추가")
  }

  const polygonTapp = (id) => {
    let coordinates = polygonsState[id].coordinates

    mapRef.current.fitToCoordinates(coordinates, {
        edgePadding: { 
          top: 10,
          right: 10,
          bottom: 10,
          left: 10
        },
        animated: true
      })
    setViewLevel(2)
  };

  const deletePoint = () => {
    if (isAddingPolygon) {
      let deleteIndex = newPolygon.length - 1
      setNewPolygon(newPolygon.filter((item, index) => index != deleteIndex))
    } 
  }


  const addPolygonToMap = () => {
    let newPolygonObject = {
      id: polygonsState.length + 1,
      coordinates: newPolygon
    }
    console.log("add value", newPolygonObject)
    setPolygonAdd(oldArray => [...oldArray, newPolygonObject])
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
    console.log("moving point", e.nativeEvent.coordinate)
    let array = [...newPolygon]
    var movingPoint = e.nativeEvent.coordinate
    array[index] = movingPoint
    setNewPolygon(array)
  }

  const saveNameAdded = () => {
    toggleModal()
    setAddButton("지역 추가")
    setAddPolygon(false)
    addPolygonToMap()
    setNewPolygon([])
  }

  const toggleModal = () => {
    console.log("toggle")
    setModalVisible(!modalVisible)
  }

  const toggleDrawer = () => {
    console.log("toggle drawer menu")
    props.toggleDrawer()
  }

  let addButtonRef = React.createRef()
  let mapRef = React.createRef()

  const startDistanceMeasurement=()=>{
    if (isMeasuringLength) {
      startMeasureDistance(false)
      setDistanceDots([])
    } else {
      startMeasureDistance(true)
    }
    
    console.log("start new distancemeasure", isMeasuringLength)
  }

  const startAreaMeasurement=()=>{

  }

  const startRadiusMeasurement=()=>{

  }

  const captureScreen=()=>{

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
        {
          viewLevel==1 && polygonsState && polygonsState.map((i, index) => {
            return <Polygon
            key={`${index}polygon`}
            coordinates={i.coordinates}
            strokeWidth={3}
            strokeColor={"yellow"}
            fillColor={"#000, rgba(r,g,b,0.5)"}
            lineCap={"round"}
            tappable={true}
            onPress={() => polygonTapp(index)}
            geodesic={true}
          />
          })
        }
        {
          isAddingPolygon && newPolygon.length > 0 && newPolygon.map((i, index)=>{
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
          isAddingPolygon && newPolygon.length > 2 && (
              <Polygon
                coordinates={newPolygon}
                strokeWidth={3}
                strokeColor={"yellow"}
                fillColor={"#000, rgba(r,g,b,0.5)"}
                lineCap={"round"}
                tappable={true}
                onPress={polygonTapp}
                geodesic={true}
              />
          )
        }
        {
          isAddingPolygon && newPolygon.length > 1 && (
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
      </MapView>
      
      {/* <TouchableOpacity style={styles.leftButton} onPress={toggleDrawer}>
        <Image source={require('../assets/drawerNavIcon.png')} resizeMode={'contain'}/>
      </TouchableOpacity> */}
      <DrawerNavButton style={styles.leftButton} toggleDrawer={toggleDrawer}/>

      <View style={[{position: 'absolute', width: 100, top: 'auto', bottom: 'auto',left: 50}]}>
        <TouchableOpacity onPress={startDistanceMeasurement} style={[{backgroundColor: `${isMeasuringLength ? "lightblue" : "white"}`, width: 50, height: 50, marginBottom: 2}, styles.centerItem]}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{"거리\n재기"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={startAreaMeasurement} style={[{backgroundColor: 'white', width: 50, height: 50, marginBottom: 2}, styles.centerItem]}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{"면적\n재기"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={startRadiusMeasurement} style={[{backgroundColor: 'white', width: 50, height: 50, marginBottom: 2}, styles.centerItem]}>
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
          <RightSideView/>
      </Animated.View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onPress={toggleModal}
      >
          <LocationNameModal toggle={toggleModal} addCompletion={saveNameAdded}/>
      </Modal>
    </View>
  );
};


export default OceanMapView;

const styles = StyleSheet.create({
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
