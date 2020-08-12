import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  Picker
} from "react-native";
import TitleInputView from "./TitleInput";
import PageTitle from "../PageTitle";
import PickerView from "../PickerView";
import * as ImagePicker from 'expo-image-picker';
import {
  FirstPage,
  BeachType,
  SectionType,
  GroudType,
} from "../../../../Models/FirstPage";
import Camera from '../../../Camera';
import { Video } from 'expo-av';

import ViewShot from 'react-native-view-shot' 


let dataSet = new FirstPage(
  new BeachType(
    SectionType.TOP,

    GroudType.ARTIFICIAL,
    GroudType.NATURAL,
    "0",
    "0",

    null,
    null,
    null,

    null,
    null,
    null,
    null
  ),
  new BeachType(
    SectionType.MIDDLE_BOTTOM,

    GroudType.MICRO_SOIL,
    GroudType.TETRA,
    "0",
    "0",

    null,
    null,
    null,

    null,
    null,
    null,
    null
  ),
  new BeachType(
    SectionType.BOTTOM,

    GroudType.SAND,
    GroudType.BIG_SAND,
    "0",
    "0",

    null,
    null,
    null,

    null,
    null,
    null,
    null
  )
);



export default FirstDoc = (props) => {
    const [data, setData] = useState(dataSet);
    const [isPickerOn, setPickerView] = useState(false);
    const [dataForSelect, setDataForSelect] = useState([]);
    const [targetData, setTargetDate] = useState({
        section: null,
        field: null
    });
    const [isCameraOn, setCamera] = useState(false)

    useEffect(()=>{
      if (props.data) {
        setData(props.data)
        console.log(props.data)
      }
    }, [props.data])

    useEffect(()=>{
      props.refData.current = data
    },[data, isPickerOn])

    const selectInput = (section, field) => {
        setTargetDate({
            section: section,
            field: field
        })

        if (field == 'location') {
            setDataForSelect(Object.values(SectionType))
        } else if (field == 'groundType1' || field == 'groundType2') {
            setDataForSelect(Object.values(GroudType))
        } else if (field == 'groundType1Perct' || field == 'groundType2Perct') {
            setDataForSelect(["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%", "-"])
        } else if (field == "sphericity") {
          setDataForSelect(["0.0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9"])
        } else if (field == "roundNess") {
          setDataForSelect(["0.0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9"])
        }


        togglePicker()
    }

    const togglePicker=()=>{
        setPickerView(!isPickerOn)
    }

    const selectedData =(i)=>{
        setData({
            ...data,
            [targetData.section]: {
                ...data[targetData.section],
                [targetData.field]: i
            }
        })
    }

    useEffect(()=>{
        if (targetData.field == "imageLink") {
          if (!isCameraOn) {
            openGallery()
          }  else {

          }
        } 
    }, [targetData, isCameraOn])


    const pickPhoto = async (section, field) => {
        setTargetDate({
            section: section,
            field: field
        })
    };

    const openGallery = async () => {
      let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }

      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
      });
      
      
      if (!result.cancelled) {
          selectedData(result.uri)
      }

    }

    const takePhoto = async(section, field) => {
      // setTargetDate({
      //   section: section,
      //   field: field
      // })

      let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }

      let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
      });
      
      if (!result.cancelled) {
          // selectedData(result.uri)
          // setData({
          //   ...data,
          //   [targetData.section]: {
          //       ...data[targetData.section],
          //       [targetData.field]: result.uri
          //   }
          // })
          setData({
            ...data,
            [section]: {
                ...data[section],
                [field]: result.uri
            }
          })
      }
      // setCamera(!isCameraOn)
      // setTargetDate({ 
      //   section: section,
      //   field: field
      // }) 
    }

  // const toggleCamera = () => {
  //   setCamera(!isCameraOn)
  // }

  // const savePhoto=(i)=> {
  //   setData({
  //     ...data,
  //     [targetData.section]: {
  //         ...data[targetData.section],
  //         [targetData.field]: i
  //     }
  //   })
  // }
    
  return (
    <View style={styles.container}>

      {/* <Modal visible={isCameraOn}>
            <Camera toggleCamera={()=>toggleCamera()} save={(i)=>savePhoto(i)}/>
      </Modal> */}

      <Modal
          animationType="slide"
          transparent={true}
          visible={isPickerOn}
      >
          <PickerView data={dataForSelect} onSelect={(i)=>selectedData(i)} hide={()=>togglePicker()}/>
      </Modal>

      {/* <TitleInputView /> */}
      <PageTitle title={"구간별 해안 형태"} />
      <View style={styles.divisionWrapper}>
        {/* 섹션 1 */}
        <View style={[styles.divisionSection, styles.rightBorderLine]}>
          {/* 상부 정보 입력 */}
          <View style={[styles.sectionTop, styles.borderBottom]}>
            <TouchableOpacity onPress={()=>selectInput('firstSection','location')} style={[styles.midSizeCell, styles.rightBorderLine, styles.firstSectionColor,]}>
              <Text style={styles.cellText}>{data.firstSection.location}</Text>
            </TouchableOpacity>
            <View style={[styles.midSizeCell, styles.rightBorderLine]}>
              <TouchableOpacity
                style={[styles.inputCell, styles.borderBottom]}
                onPress={() => selectInput('firstSection', 'groundType1')}
              >
                <Text>{data.firstSection.groundType1}</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.inputCell}
                onPress={() => selectInput('firstSection', 'groundType2')}
                >
                <Text>{data.firstSection.groundType2}</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.midSizeCell]}>
              <TouchableOpacity style={[styles.inputCell, styles.borderBottom]}
                onPress={() => selectInput('firstSection', 'groundType1Perct')}
              >
                <Text>{`${data.firstSection.groundType1Perct}`}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputCell}
                onPress={() => selectInput('firstSection', 'groundType2Perct')}
              >
                <Text>{`${data.firstSection.groundType2Perct}`}</Text>
              </TouchableOpacity>
            </View>
          </View>

            {/* 이미지 입력 */}
            <View style={[styles.imageInput, styles.borderBottom]}>
              {data.firstSection.imageLink !== null ? 
                <View style={{flex: 1}}>
                  {data.firstSection.imageLink.endsWith(('mp4', 'mov')) ? 
                    <View style={{flex: 1}}>
                      <Video 
                          rate={1.0}
                          volume={1.0}
                          isMuted={true}
                          resizeMode="cover"
                          shouldPlay={false}
                          isLooping
                          style={{flex: 1}} 
                          source={{uri: data.firstSection.imageLink}}
                          useNativeControls={true}
                      />
                      <View style={{flexDirection: 'row', width: 100, height: 40, position: 'absolute', bottom: 30, right: 16}}>
                        <TouchableOpacity onPress={()=>takePhoto('firstSection', "imageLink")} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                          <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/cameraIcon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>pickPhoto('firstSection', 'imageLink')} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/pictureIcon.png')}/>
                        </TouchableOpacity>
                      </View>
                    </View> 
                    : 
                    <View style={{flex:1}}>
                      <Image style={{flex:1}} source={{uri: data.firstSection.imageLink}}/>
                      <View style={{flexDirection: 'row', width: 100, height: 40, position: 'absolute', bottom: 30, right: 16}}>
                        <TouchableOpacity onPress={()=>takePhoto('firstSection', "imageLink")} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                          <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/cameraIcon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>pickPhoto('firstSection', 'imageLink')} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/pictureIcon.png')}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                  }
                </View>
                :
                <View style={[{flex:1, flexDirection: 'row', justifyContent:'center', alignItems:'center'}]}>
                  <TouchableOpacity onPress={()=>takePhoto('firstSection', "imageLink")} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                      <Image source={require('../../../../assets/cameraIcon.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>pickPhoto('firstSection', 'imageLink')} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                      <Image source={require('../../../../assets/pictureIcon.png')}/>
                  </TouchableOpacity>
                </View>
              }         
            </View>

            <View style={[styles.sectionTop, styles.borderBottom]}>
                <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.firstSectionColor]}>
                    <Text>길이(m)</Text>
                </TouchableOpacity>
                <View style={styles.inputCell}>
                    <TextInput 
                        style={[styles.textfield]}
                        keyboardType="number-pad"
                        value={data.firstSection.length} 
                        onChange={(i)=>setData({
                            ...data,
                            firstSection: {
                                ...data.firstSection,
                                length: i.nativeEvent.text
                            }
                        })}/>
                </View>
                </View>

                <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.firstSectionColor]}>
                    <Text>폭(m)</Text>
                </TouchableOpacity>
                <View style={styles.inputCell}>
                    <TextInput
                        style={[styles.textfield]}
                        keyboardType="number-pad"
                        value={data.firstSection.width}
                        onChange={(i)=>setData({
                            ...data,
                            firstSection: {
                                ...data.firstSection,
                                width: i.nativeEvent.text
                            }
                        })}
                    />
                </View>
                </View>

                <View style={[styles.midSizeCell]}>
                <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.firstSectionColor]}>
                    <Text>경사도</Text>
                </TouchableOpacity>
                <View style={styles.inputCell}>
                    <TextInput
                        style={[styles.textfield]}
                        keyboardType="number-pad"
                        value={data.firstSection.angle}
                        onChange={(i)=>setData({
                            ...data,
                            firstSection: {
                                ...data.firstSection,
                                angle: i.nativeEvent.text
                            }
                        })}
                    />
                </View>
                </View>
            </View>

            <View style={[styles.sectionTop, styles.borderBottom]}>
                <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                <TouchableOpacity
                    style={[
                    styles.inputCell,
                    styles.borderBottom,
                    styles.firstSectionColor,
                    ]}
                >
                    <Text>입도(mm)</Text>
                </TouchableOpacity>
                <View style={styles.inputCell}>
                    <TextInput 
                        style={[styles.textfield]}
                        value={data.firstSection.granularity} 
                        onChange={(i)=>setData({
                            ...data,
                            firstSection: {
                                ...data.firstSection,
                                granularity : i.nativeEvent.text
                            }
                        })}
                    />
                </View>
                </View>
                <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                    <TouchableOpacity
                        style={[
                        styles.inputCell,
                        styles.borderBottom,
                        styles.firstSectionColor,
                        ]}
                        onPress={()=>selectInput('firstSection','sphericity')}
                    >
                        <Text>구형도 ▼</Text>
                    </TouchableOpacity>

                    <View style={styles.inputCell}>
                        <Text>{data.firstSection.sphericity}</Text>
                    </View>
                </View>
                <View style={[styles.midSizeCell]}>
                <TouchableOpacity 
                  style={[styles.inputCell, styles.borderBottom, styles.firstSectionColor]}
                  onPress={()=>selectInput('firstSection','roundNess')}
                >
                    <Text>원마도 ▼</Text>
                </TouchableOpacity>
                
                <View style={styles.inputCell}>
                    <Text>{data.firstSection.roundNess}</Text>
                </View>
              </View>
            </View>
        </View>

        {/* 섹션 2 */}
        <View style={[styles.divisionSection, styles.rightBorderLine]}>
          <View style={[styles.sectionTop, styles.borderBottom]}>
            <TouchableOpacity
              style={[
                styles.midSizeCell,
                styles.rightBorderLine,
                styles.secondSectionColor,
              ]}
              onPress={()=>selectInput('secondSection','location')}
            >
              <Text style={styles.cellText}>{data.secondSection.location}</Text>
            </TouchableOpacity>
            <View style={[styles.midSizeCell, styles.rightBorderLine]}>
              <TouchableOpacity style={[styles.inputCell, styles.borderBottom]}
                onPress={() => selectInput('secondSection', 'groundType1')}
              >
                <Text>{data.secondSection.groundType1}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputCell}
                onPress={() => selectInput('secondSection', 'groundType2')}
              >
                <Text>{data.secondSection.groundType2}</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.midSizeCell]}>
              <TouchableOpacity style={[styles.inputCell, styles.borderBottom]}
                onPress={() => selectInput('secondSection', 'groundType1Perct')}
              >
                <Text>{`${data.secondSection.groundType1Perct}`}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputCell}
                onPress={() => selectInput('secondSection', 'groundType2Perct')}
              >
                <Text>{`${data.secondSection.groundType2Perct}`}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* 이미지 입력 */}
          <View style={[styles.imageInput, styles.borderBottom]}>
              {data.secondSection.imageLink !== null ? 
                <View style={{flex: 1}}>
                  {data.secondSection.imageLink.endsWith(('mp4', 'mov')) ? 
                    <View style={{flex: 1}}>
                      <Video 
                          rate={1.0}
                          volume={1.0}
                          isMuted={true}
                          resizeMode="cover"
                          shouldPlay={false}
                          isLooping
                          style={{flex: 1}} 
                          source={{uri: data.secondSection.imageLink}}
                          useNativeControls={true}
                      />
                      <View style={{flexDirection: 'row', width: 100, height: 40, position: 'absolute', bottom: 30, right: 16}}>
                        <TouchableOpacity onPress={()=>takePhoto('secondSection', "imageLink")} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                          <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/cameraIcon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>pickPhoto('secondSection', 'imageLink')} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/pictureIcon.png')}/>
                        </TouchableOpacity>
                      </View>
                    </View> 
                    : 
                    <View style={{flex:1}}>
                      <Image style={{flex:1}} source={{uri: data.secondSection.imageLink}}/>
                      <View style={{flexDirection: 'row', width: 100, height: 40, position: 'absolute', bottom: 30, right: 16}}>
                        <TouchableOpacity onPress={()=>takePhoto('secondSection', "imageLink")} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                          <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/cameraIcon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>pickPhoto('secondSection', 'imageLink')} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/pictureIcon.png')}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                  }
                </View>
                :
                <View style={[{flex:1, flexDirection: 'row', justifyContent:'center', alignItems:'center'}]}>
                  <TouchableOpacity onPress={()=>takePhoto('secondSection', "imageLink")} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                      <Image source={require('../../../../assets/cameraIcon.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>pickPhoto('secondSection', 'imageLink')} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                      <Image source={require('../../../../assets/pictureIcon.png')}/>
                  </TouchableOpacity>
                </View>
              }         
            </View>

        <View style={[styles.sectionTop, styles.borderBottom]}>
            <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                <TouchableOpacity
                    style={[
                    styles.inputCell,
                    styles.borderBottom,
                    styles.secondSectionColor,
                    ]}
                >
                    <Text>길이(m)</Text>
                </TouchableOpacity>
                <View style={styles.inputCell}>
                    <TextInput 
                        style={[styles.textfield]}
                        value={data.secondSection.length} 
                        onChange={(i)=>setData({
                            ...data,
                            secondSection: {
                                ...data.secondSection,
                                length : i.nativeEvent.text
                            }
                        })}
                    />
                </View>
            </View>
            <View style={[styles.midSizeCell, styles.rightBorderLine]}>
              <TouchableOpacity
                style={[
                  styles.inputCell,
                  styles.borderBottom,
                  styles.secondSectionColor,
                ]}
              >
                <Text>폭(m)</Text>
              </TouchableOpacity>
                <View style={styles.inputCell}>
                    <TextInput 
                        style={[styles.textfield]}
                        value={data.secondSection.width} 
                        onChange={(i)=>setData({
                            ...data,
                            secondSection: {
                                ...data.secondSection,
                                width : i.nativeEvent.text
                            }
                        })}
                    />
                </View>
            </View>
            <View style={[styles.midSizeCell]}>
              <TouchableOpacity
                style={[
                  styles.inputCell,
                  styles.borderBottom,
                  styles.secondSectionColor,
                ]}
              >
                <Text>경사도</Text>
              </TouchableOpacity>

                <View style={styles.inputCell}>
                    <TextInput 
                        style={[styles.textfield]}
                        value={data.secondSection.angle} 
                        onChange={(i)=>setData({
                            ...data,
                            secondSection: {
                                ...data.secondSection,
                                angle : i.nativeEvent.text
                            }
                        })}
                    />
                </View>
            </View>
          </View>

          <View style={[styles.sectionTop, styles.borderBottom]}>
            <View style={[styles.midSizeCell, styles.rightBorderLine]}>
              <TouchableOpacity
                style={[
                  styles.inputCell,
                  styles.borderBottom,
                  styles.secondSectionColor,
                ]}
              >
                <Text>입도(mm)</Text>
              </TouchableOpacity>
             
                <View style={styles.inputCell}>
                    <TextInput 
                        style={[styles.textfield]}
                        value={data.secondSection.granularity} 
                        onChange={(i)=>setData({
                            ...data,
                            secondSection: {
                                ...data.secondSection,
                                granularity : i.nativeEvent.text
                            }
                        })}
                    />
                </View>
            </View>
            <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                <TouchableOpacity
                    style={[
                    styles.inputCell,
                    styles.borderBottom,
                    styles.secondSectionColor,
                    ]}
                    onPress={()=>selectInput('secondSection','sphericity')}
                >
                  <Text>구형도 ▼</Text>
                </TouchableOpacity>

                <View style={styles.inputCell}>
                  <Text> {data.secondSection.sphericity} </Text>
                </View>
            </View>
            <View style={[styles.midSizeCell]}>
              <TouchableOpacity
                style={[
                  styles.inputCell,
                  styles.borderBottom,
                  styles.secondSectionColor,
                ]}
                onPress={()=>selectInput('secondSection','roundNess')}
              >
                <Text>원마도 ▼</Text>
              </TouchableOpacity>
              
              <View style={styles.inputCell}>
                <Text> {data.secondSection.roundNess} </Text>
                
              </View>
            </View>
          </View>
        </View>

        {/* 섹션 3 */}
        <View style={styles.divisionSection}>
          <View style={[styles.sectionTop, styles.borderBottom]}>
            <TouchableOpacity
              style={[
                styles.midSizeCell,
                styles.rightBorderLine,
                styles.thirdSectionColor,
              ]}
              onPress={()=>selectInput('thirdSection','location')}
            >
              <Text style={styles.cellText}>{data.thirdSection.location}</Text>
            </TouchableOpacity>
            <View style={[styles.midSizeCell, styles.rightBorderLine]}>
              <TouchableOpacity style={[styles.inputCell, styles.borderBottom]}
                onPress={() => selectInput('thirdSection', 'groundType1')}
              >
                <Text>{data.thirdSection.groundType1}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputCell}
                onPress={() => selectInput('thirdSection', 'groundType2')}
              >
                <Text>{data.thirdSection.groundType2}</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.midSizeCell]}>
              <TouchableOpacity style={[styles.inputCell, styles.borderBottom]}
                onPress={() => selectInput('thirdSection', 'groundType1Perct')}
              >
                <Text>{`${data.thirdSection.groundType1Perct}`}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputCell}
                onPress={() => selectInput('thirdSection', 'groundType2Perct')}
              >
                <Text>{`${data.thirdSection.groundType2Perct}`}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.imageInput, styles.borderBottom]}>
              {data.thirdSection.imageLink !== null ? 
                <View style={{flex: 1}}>
                  {data.thirdSection.imageLink.endsWith(('mp4', 'mov')) ? 
                    <View style={{flex: 1}}>
                      <Video 
                          rate={1.0}
                          volume={1.0}
                          isMuted={true}
                          resizeMode="cover"
                          shouldPlay={false}
                          isLooping
                          style={{flex: 1}} 
                          source={{uri: data.thirdSection.imageLink}}
                          useNativeControls={true}
                      />
                      <View style={{flexDirection: 'row', width: 100, height: 40, position: 'absolute', bottom: 30, right: 16}}>
                        <TouchableOpacity onPress={()=>takePhoto('thirdSection', "imageLink")} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                          <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/cameraIcon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>pickPhoto('thirdSection', 'imageLink')} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/pictureIcon.png')}/>
                        </TouchableOpacity>
                      </View>
                    </View> 
                    : 
                    <View style={{flex:1}}>
                      <Image style={{flex:1}} source={{uri: data.thirdSection.imageLink}}/>
                      <View style={{flexDirection: 'row', width: 100, height: 40, position: 'absolute', bottom: 30, right: 16}}>
                        <TouchableOpacity onPress={()=>takePhoto('thirdSection', "imageLink")} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                          <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/cameraIcon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>pickPhoto('thirdSection', 'imageLink')} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/pictureIcon.png')}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                  }
                </View>
                :
                <View style={[{flex:1, flexDirection: 'row', justifyContent:'center', alignItems:'center'}]}>
                  <TouchableOpacity onPress={()=>takePhoto('thirdSection', "imageLink")} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                      <Image source={require('../../../../assets/cameraIcon.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>pickPhoto('thirdSection', 'imageLink')} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                      <Image source={require('../../../../assets/pictureIcon.png')}/>
                  </TouchableOpacity>
                </View>
              }         
            </View>

          <View style={[styles.sectionTop, styles.borderBottom]}>
            <View style={[styles.midSizeCell, styles.rightBorderLine]}>
              <TouchableOpacity
                style={[
                  styles.inputCell,
                  styles.borderBottom,
                  styles.thirdSectionColor,
                ]}
              >
                <Text>길이(m)</Text>
              </TouchableOpacity>

                <View style={styles.inputCell}>
                    <TextInput 
                        style={[styles.textfield]}
                        value={data.thirdSection.length} 
                        onChange={(i)=>setData({
                            ...data,
                            thirdSection: {
                                ...data.thirdSection,
                                length : i.nativeEvent.text
                            }
                        })}
                    />
                </View>
            </View>
            <View style={[styles.midSizeCell, styles.rightBorderLine]}>
              <TouchableOpacity
                style={[
                  styles.inputCell,
                  styles.borderBottom,
                  styles.thirdSectionColor,
                ]}
              >
                <Text>폭(m)</Text>
              </TouchableOpacity>

                <View style={styles.inputCell}>
                    <TextInput 
                        style={[styles.textfield]}
                        value={data.thirdSection.width} 
                        onChange={(i)=>setData({
                            ...data,
                            thirdSection: {
                                ...data.thirdSection,
                                width : i.nativeEvent.text
                            }
                        })}
                    />
                </View>

            </View>
            <View style={[styles.midSizeCell]}>
              <TouchableOpacity
                style={[
                  styles.inputCell,
                  styles.borderBottom,
                  styles.thirdSectionColor,
                ]}
              >
                <Text>경사도</Text>
              </TouchableOpacity>
             
                <View style={styles.inputCell}>
                    <TextInput 
                        style={[styles.textfield]}
                        value={data.thirdSection.angle} 
                        onChange={(i)=>setData({
                            ...data,
                            thirdSection: {
                                ...data.thirdSection,
                                angle : i.nativeEvent.text
                            }
                        })}
                    />
                </View>
              
            </View>
          </View>

          <View style={[styles.sectionTop, styles.borderBottom]}>
            <View style={[styles.midSizeCell, styles.rightBorderLine]}>
              <TouchableOpacity
                style={[
                  styles.inputCell,
                  styles.borderBottom,
                  styles.thirdSectionColor,
                ]}
              >
                <Text>입도(mm)</Text>
              </TouchableOpacity>
             

                <View style={styles.inputCell}>
                    <TextInput 
                        style={[styles.textfield]}
                        value={data.thirdSection.granularity} 
                        onChange={(i)=>setData({
                            ...data,
                            thirdSection: {
                                ...data.thirdSection,
                                granularity : i.nativeEvent.text
                            }
                        })}
                    />
                </View>
              
            </View>
            <View style={[styles.midSizeCell, styles.rightBorderLine]}>
              <TouchableOpacity
                style={[
                  styles.inputCell,
                  styles.borderBottom,
                  styles.thirdSectionColor,
                ]}
                onPress={()=>selectInput('thirdSection','sphericity')}
              >
                <Text>구형도 ▼</Text>
              </TouchableOpacity>

              <View style={styles.inputCell}>
                <Text> {data.thirdSection.sphericity} </Text>
              </View>

            </View>
            <View style={[styles.midSizeCell]}>
              <TouchableOpacity
                style={[
                  styles.inputCell,
                  styles.borderBottom,
                  styles.thirdSectionColor,
                ]}
                onPress={()=>selectInput('thirdSection','roundNess')}
              >
                <Text>원마도 ▼</Text>
              </TouchableOpacity>

              <View style={styles.inputCell}>
                <Text> {data.thirdSection.roundNess} </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textfield: {
    width: '100%',
    height: '100%',
    paddingVertical: 4,
    textAlign: 'center'
  },  
  thirdSectionColor: {
    backgroundColor: "#E6E0EC",
  },
  secondSectionColor: {
    backgroundColor: "#DBEEF4",
  },
  firstSectionColor: {
    backgroundColor: "#FDEADA",
  },
  imageInput: {
    flex: 1,
    backgroundColor: "white",
  },
  inputCell: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    fontSize: 18,
  },
  midSizeCell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTop: {
    flexDirection: "row",
    width: "100%",
    height: 80,
  },
  borderBottom: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  rightBorderLine: {
    borderRightWidth: 1,
    borderRightColor: "black",
  },
  divisionSection: {
    flex: 1,
  },
  divisionWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  container: {
    flex: 1,

    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "white",

    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRightWidth: 0,
    backgroundColor: "white",
  },
});
