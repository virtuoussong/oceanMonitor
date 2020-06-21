import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function Camaera(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const toggleCamera=()=>{
    props.toggleCamera()
  }
  const snap = async () => {
    if (cameraRef) {
        let photo = await cameraRef.takePictureAsync({
            exif: true,
            onPictureSaved: savePhoto
        });
   
        // toggleCamera()
    }
  };

  const savePhoto = (i) => {
    console.log(i)
    props.save(i.uri)
    toggleCamera()
  }


  return (
    <View style={{ flex: 1 }}>
        <Camera 
            exif={true}
            style={{ flex: 1 }} 
            type={type} 
            ref={ref => {setCameraRef(ref)}}
            focusable={true}
        >
        <View style={{flex: 1, backgroundColor: 'transparent',flexDirection: 'row' }}>
            <TouchableOpacity
                style={{flex: 0.1, alignSelf: 'flex-end', alignItems: 'center' }}
                onPress={() => {
                setType(
                    type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
                }}
            >
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> 회전 </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{flex: 0.1, position: 'absolute', top: 30, right: 30 }}
                onPress={()=>toggleCamera()}
            >
                <Text style={{fontWeight: 'bold' ,fontSize: 30, marginTop: 10, color: 'white' }}> X </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    flex: 0.1, 
                    width: 70, height:70, 
                    paddingRight: 60, 
                    alignSelf: 'flex-end', 
                    alignItems: 'center', 
                    marginBottom: 10, marginLeft: 'auto', marginRight: 'auto',
                    
                }}
                onPress={()=>snap()}
            >
                <View style={{borderRadius: 35, width: 70, height:70, backgroundColor: 'gray'}}/>
            </TouchableOpacity>

        </View>
      </Camera>
    </View>
  );
}
