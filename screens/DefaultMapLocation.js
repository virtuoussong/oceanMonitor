import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, AsyncStorage} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polygon, Marker, Polyline, Circle, fitToCoordinates } from "react-native-maps";
import DrawerNavButton from '../components/DrawerNavButton';
import InitialRegion from '../Models/InitialRegion';
const DefaultLocationMap = (props) => {

    const [initialLocation, setInitial] = useState({
        latitude: 35.82991503548142,
        longitude: 127.66985032707453,
        latitudeDelta: 6.158240791210218,
        longitudeDelta: 10.137516260147095
    })

    useEffect(()=>{
        getInitialLocation()
    }, [])

    useEffect(()=>{
        console.log("new coordinate", initialLocation)
    }, [initialLocation])

    const getInitialLocation = async() => {
        try {
            await AsyncStorage.getItem('initialLocation', (err, result)=>{
                console.log("default place", result)
                if (result !== null) {
                    let parsed = JSON.parse(result)
                    let region = new InitialRegion(
                        parsed.latitude,
                        parsed.longitude,
                        parsed.latitudeDelta,
                        parsed.longitudeDelta
                    )
                    setInitial(region)
                }
            })
        } catch (error) {

        }
    }

    const toggleDrawer = () => {
        props.toggleDrawer()
      }

    let mapRef = React.createRef()

    const handleLocationSave = async() => {
        let jsonData = JSON.stringify(initialLocation)
        console.log(jsonData)
        try {
            await AsyncStorage.setItem(
                'initialLocation',
                jsonData
            )
        } catch (error) {

        }
    }

    const regionChanged = (i) => {
        console.log(i)
        setInitial(i)
    }

    return <View style={styles.container}>
        <MapView style={{width: '100%', height: '100%'}} 
            ref={mapRef}
            initialRegion={{
                latitude: initialLocation.latitude,
                longitude: initialLocation.longitude,
                latitudeDelta: initialLocation.latitudeDelta,
                longitudeDelta: initialLocation.longitudeDelta
            }}
            provider={"google"}
            mapType={'standard'}
            onRegionChange={regionChanged}
        >

        </MapView>
        <TouchableOpacity 
            style={{position: 'absolute', bottom: 30, backgroundColor: 'dodgerblue', borderRadius: 10}}
            onPress={()=>handleLocationSave()}
        >
            <Text style={styles.saveButton}>저장</Text>
        </TouchableOpacity>
        <DrawerNavButton style={styles.leftButton} toggleDrawer={()=>toggleDrawer()}/>
    </View>
};

export default DefaultLocationMap;

const styles = StyleSheet.create({
    saveButton:{
        paddingVertical: 10, 
        paddingHorizontal: 30, 
        color: 'white', 
        fontSize: 24,
        
    },
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftButton: {
        width: 50,
        height: 50,
        position: "absolute",
        left: 30,
        top: 30,
    }
})

