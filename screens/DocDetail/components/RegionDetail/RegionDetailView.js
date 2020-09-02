import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Modal, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import DrawerButton from '../../../../components/DrawerNavButton';
import TitleInputView from '../DocDetail/TitleInput';
import AreaDoc from '../../../../Models/AreaDoc.js';
import area from '../../../../Redux/reducers/area';
import {RegionInfo} from '../../../../Models/RegionInfo.js';
import * as ImagePicker from 'expo-image-picker';
import Camera from '../../../Camera';
import { newRegionDoc } from '../../../../Redux/database/regionDoc'
import { insertDocID } from '../../../../Redux/database/area2DB';
import { getRegionDoc, updateRegionDoc } from '../../../../Redux/database/regionDoc';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CalendarPicker from '../../../../components/Calendar';
import { Video } from 'expo-av';

import ViewShot from 'react-native-view-shot' 
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Asset } from "expo-asset";
import * as ImageManipulator from 'expo-image-manipulator';

let dummyData = new RegionInfo(
    "",
    "",
    "",
    "",
    "",


    "",
    "",
    "",
    "",
    "",


    "",
    "",
    "",
    "",
    "",


    "",
    "",
    "",
    "",
    "",


    "",
    "",
    "",
    "",
    "",


    "",
    "",
    null
)

export default RegionDetailView = (props) => {

    const [data, setData] = useState(dummyData);
    const [isModalOn, setModal] = useState(false);
    const [isCalendarOn, setCalendarOn] = useState(false)
    const [key, setKey] = useState()

    useEffect(()=>{
        regionData.current = data
    }, [])

    useEffect(()=>{
        // regionData.current = data
    }, [data])

    const nav = useNavigation()
    useEffect(()=>{
        
        if (props.docID) {
            loadData(props.docID)
        }

        if (props.route != undefined) {
            setupNavbutton()
        }
        
    }, [])

    const setupNavbutton = () => {
        if (props.route.params.docID != undefined || props.route.params.docID != null) {
            loadData(props.route.params.docID)
        }

        nav.setOptions({
            headerRight: () => <TouchableOpacity 
                    style={{marginRight: 16}} 
                    onPress={saveDocFromNav}>
                    <Text style={{fontSize: 20}}>저장</Text>
                </TouchableOpacity>
        })
    }

    // const setupNavSave = () => {
    //     nav.setOptions({
    //         headerRight: () => <TouchableOpacity style={{marginRight: 16}} onPress={()=>saveDocFromNav()}><Text style={{fontSize: 20}}>저장</Text></TouchableOpacity>
    //     })
    // }

    let regionData = React.useRef(null)

    const loadData = async (id) => {
        await getRegionDoc(id).then((i)=>{
            let item = i.rows._array[0].data
            let parsed = JSON.parse(item) 
            regionData.current = parsed 
            setData(parsed)
        })
    }

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
            animationType: 'none'
        });
        
        
        if (!result.cancelled) {
            setData({
                ...data,
                imageLink: result.uri
            })
        }

    }

    const toggleCamera = async() => {
        // setModal(!isModalOn)
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

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
            // savePhoto(result.uri)
            setData({
                ...data,
                imageLink: result.uri
            })
        }
    }

    const savePhoto=(i)=> {
        setData({
            ...data,
            imageLink: i
        })
    }

    const saveDocFromNav = async ()=> {
        
        // console.log("saving data", regionData.current)
        let jsonData = JSON.stringify(regionData.current)
        
        // console.log("docID save", props.route.params.docID)
        if (props.route.params.docID != null) {
            let docIDPassed = props.route.params.docID
            // console.log("props.route.params.docID save", props.route.params.docID)
            await updateRegionDoc(jsonData, docIDPassed).then((i)=>{
                console.log("updated from nav back", i)
                props.navigation.goBack(null)
            })
        } else {
            let locationID = props.route.params.id
            await newRegionDoc(jsonData).then((i)=>{
                insertDocID(i.insertId, locationID).then(()=>{
                    props.navigation.goBack(null)
                })
            })
        }
    }

    const saveDoc = async()=> {

        let jsonData = JSON.stringify(data)

        if (props.docID != null) {
            await updateRegionDoc(jsonData, props.docID).then((i)=>{
                props.close()
            })
        } else {
            await newRegionDoc(jsonData).then((i)=>{
                insertDocID(i.insertId, props.id).then(()=>{
                    props.close()
                    props.reload()
                })
            })
        }
    }

    const updateData = (i) => {
        console.log("setting data form calendar", key, i)
        setData({
            ...data,
            [key]: i
        })
    }

    const cancel = () =>{
        props.close()
    }

    //날짜 선택
    const handleDatePicked =(i)=> {
        updateData(i)
    }

    const toggleCalendar = (i) =>{
        setKey(i)
    }

    useEffect(()=>{
        console.log("key ㄴㄷㅆㄷㅇ", key)
        if (key === "recordDataSun" || key === "recordDataMoon") {
            setCalendarOn(!isCalendarOn)
        }
    }, [key])
    

   const closeModal = () => {
        setCalendarOn(false)
   }

    let viewShotRef = React.useRef()

    const exportPDF = async() => {
        let uri = await viewShotRef.current.capture()
        let newUri = `file://${uri}`
        const img1 = await htmlContent(newUri)
        myAsyncPDFFunction([img1])
    }

    const htmlContent = async (i) => {
        try {
            let src = await copyFromAssets(i);
            if(Platform.OS === 'ios') {
                src = await processLocalImageIOS(src);
            }
            return src
        } catch (error) {
            console.log(error);
        }
    }

    const copyFromAssets = async (asset) => {
        try {
          await Asset.loadAsync(asset);
          const { localUri } = Asset.fromModule(asset);
          return localUri;
        } catch (error) {
          throw error;
        }
      };

      const processLocalImageIOS = async (imageUri) => {
        try {
          const uriParts = imageUri.split(".");
          const formatPart = uriParts[uriParts.length - 1];
          let format;
          if (formatPart.includes("png")) {
            format = "png";
          } else if (formatPart.includes("jpg") || formatPart.includes("jpeg")) {
            format = "jpeg";
          }
          const { base64 } = await ImageManipulator.manipulateAsync(
            imageUri,
            [],
            { format: format || "png", base64: true }
          );
          return `data:image/${format};base64,${base64}`;
        } catch (error) {
          throw error
        }
      };

      const myAsyncPDFFunction = async (i) => {

        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Pdf Content</title>
                <style>
                    body {
                        font-size: 16px;
                        color: rgb(255, 196, 0);
                        float: none !important;
                    }
                    h1 {
                        text-align: center;
                    }

                    div {
                        width: ${Dimensions.get('screen').width};
                        height: ${Dimensions.get('screen').height};
                    }

                    .print:last-child {
                        page-break-after: auto;
                   }

                    .fit {
                        display: block;
                        max-width: 100%;
                        max-height: 100%;
                        width: auto;
                        height: auto;
                    }
                </style>
            </head>
            <body>
                <div class="print"><img class=fit src=${i[0]}></div>
            </body>
            </html>
        `;

        
        try {
            const { uri } = await Print.printToFileAsync({ 
                html: htmlContent,
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height-50, 
            });
            await Sharing.shareAsync(uri);
            // openEmail([`file://${uri}`])
        } catch (err) {
            console.error(err);
        }

    }


    return <View style={styles.constainer}>
            <Modal visible={isCalendarOn} transparent={true} animationType="slide"> 
                <CalendarPicker close={()=>closeModal()} setDate={(i)=>handleDatePicked(i)}/>
            </Modal>

            {props.hasCloseButton && <View style={{width: '100%', height: 55, flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 'auto', marginTop: 24, marginLeft: 20}} onPress={()=>cancel()}>
                    <Text style={{fontSize: 20}}>취소</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop: 24, marginLeft: 'auto', marginRight: 20}} onPress={()=>exportPDF()}>
                    {props.docID && <Text style={{fontSize: 20}}>PDF 출력</Text>}
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop: 24, marginRight: 20}} onPress={()=>saveDoc()}>
                    {props.docID ? <Text style={{fontSize: 20}}>수정</Text> : <Text style={{fontSize: 20}}>저장</Text>}
                </TouchableOpacity>
            </View>}

            <Modal visible={isModalOn}>
                <Camera toggleCamera={()=>toggleCamera()} save={(i)=>savePhoto(i)}/>
            </Modal>

            <ViewShot ref={viewShotRef} style={{flex: 1, width: '100%'}} options={{format: 'jpg', quality: 1}}>
                <KeyboardAwareScrollView style={{width: '100%', height: '100%'}} contentContainerStyle={{flexGrow: 1}}>
            <View style={[styles.constainer, styles.flexRow, styles.borderAll]}>
        
        <View style={[styles.constainer, styles.borderRight, styles.flexRow, {height: '100%'}]}>
            {data.imageLink !== null ? 
            // <TouchableOpacity onPress={()=>openGallery()} style={[{flex:1, height: '100%'}, styles.borderRight]}>
            //     <Image source={{uri: data.imageLink}} style={[{flex:1}]}/> 
            // </TouchableOpacity>
                <View style={{flex: 1}}>
                    {data.imageLink.endsWith(('mp4', 'mov')) ? 
                        <View style={{flex: 1}}>
                            <Video 
                                rate={1.0}
                                volume={1.0}
                                isMuted={true}
                                resizeMode="cover"
                                shouldPlay={false}
                                isLooping
                                style={{flex: 1}} 
                                source={{uri: data.imageLink}}
                                useNativeControls={true}
                            />
                            <View style={{flexDirection: 'row', width: 100, height: 40, position: 'absolute', bottom: 30, right: 16}}>
                                <TouchableOpacity onPress={()=>toggleCamera()} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                    <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/cameraIcon.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>openGallery()} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                    <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/pictureIcon.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View> 
                        : 
                        <View style={{flex:1}}>
                            <Image 
                                style={{flex:1}} 
                                source={
                                    {
                                        uri: data.imageLink,
                                        cache: 'force-cache'
                                    }
                                }
                            />
                            <View style={{flexDirection: 'row', width: 100, height: 40, position: 'absolute', bottom: 30, right: 16}}>
                                <TouchableOpacity onPress={()=>toggleCamera()} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                    <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/cameraIcon.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>openGallery()} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                    <Image style={[{width: 40, height: 40}]} source={require('../../../../assets/pictureIcon.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                </View>
            :
            <React.Fragment>
                <TouchableOpacity onPress={()=>toggleCamera()} style={[styles.constainer, {flex: 1}]}>
                    <Image style={{width: 80, height: 80}} source={require('../../../../assets/cameraIcon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.constainer]} onPress={()=>openGallery()}>
                    <Image  style={{width: 80, height: 80}} source={require('../../../../assets/pictureIcon.png')}/>
                </TouchableOpacity>
            </React.Fragment>
            }
            
        </View>


        <View style={[styles.constainer]}>
            <View style={[{flex: 1, width: '100%'}, styles.center, styles.borderBottom, styles.headerBlue]}>
                <Text>지역 일반 정보</Text>
            </View>
            <View style={[{flex:1, flexDirection: 'row'}, styles.borderBottom]}>
                <View style={[styles.borderRight, styles.headerLightBlue, {flex: 1, justifyContent: 'center', paddingLeft: 20}]}><Text>▶행정구역</Text></View>
                <View style={[{flex:1}, styles.center]}><TextInput style={{flex:1, width: '100%', textAlign: "center"}} onChange={(i)=>setData({
                    ...data,
                    areaName: i.nativeEvent.text
                })} value={data.areaName}/></View>
            </View>
            <View style={[{flex: 1, width: '100%', justifyContent: 'center', paddingLeft: 20}, styles.borderBottom, styles.headerLightBlue2,]}><Text>▶일반현황</Text></View>
            <View style={[{flex: 3, width: '100%'}, styles.flexRow, styles.borderBottom]}>
                <View style={[{flex: 1}, styles.borderRight, styles.center]}>
                <View style={[{flex:2,  width: '100%'}, styles.center, styles.borderBottom, styles.headerYellowColor]}><Text style={{textAlign: 'center'}}>{"주민수\n(명)"}</Text></View>
                    <View style={[{flex:1,  width: '100%'}, styles.center,]}>
                        <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                            onChange={(i)=>setData({
                            ...data,
                            residentCount: i.nativeEvent.text
                            })} 
                            value={data.residentCount}
                        />
                    </View>
                </View>
                <View style={[{flex: 1}, styles.borderRight, styles.center]}>
                    <View style={[{height: '66%',  width: '100%'}, styles.center, styles.borderBottom, styles.headerYellowColor]}><Text style={{textAlign: 'center'}}>가구수</Text></View>
                    <View style={[{height: '34%',  width: '100%'}, styles.center]}>
                        <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                            onChange={(i)=>setData({
                            ...data,
                            houseCount: i.nativeEvent.text
                            })} 
                            value={data.houseCount}
                        />
                    </View>
                </View>
                <View style={[{flex: 1}, styles.borderRight, styles.center]}>
                    <View style={[{flex:2,  width: '100%'}, styles.center, styles.borderBottom, styles.headerYellowColor]}><Text style={{textAlign: 'center'}}>{"어촌계\n반수"}</Text></View>
                    <View style={[{flex:1,  width: '100%'}, styles.center,]}>
                        <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                            onChange={(i)=>setData({
                            ...data,
                            banCount: i.nativeEvent.text
                            })} 
                            value={data.banCount}
                        />
                    </View>
                </View>
                <View style={[{flex: 1}, styles.borderRight, styles.center]}>
                    <View style={[{flex:2,  width: '100%'}, styles.center, styles.borderBottom, styles.headerYellowColor]}>
                        <Text style={{textAlign: 'center'}}>{"어촌계\n인원수"}</Text>
                    </View>
                    <View style={[{flex:1,  width: '100%'}, styles.center,]}>
                        <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                            onChange={(i)=>setData({
                            ...data,
                            personcount: i.nativeEvent.text
                            })} 
                            value={data.personcount}
                        />
                    </View>
                </View>
                <View style={[{flex: 2}, styles.borderRight, styles.center]}>
                    <View style={[{height: '33%',  width: '100%'}, styles.center, styles.borderBottom, styles.headerYellowColor]}><Text>어선척수(척)</Text></View>
                    <View style={[{height:'32%',  width: '100%', flexDirection: 'row'}, styles.center, styles.borderBottom, styles.headerYellowColor]}>
                        <View style={[{flex:1 , height: '100%'}, styles.center, styles.borderRight]}>
                            <Text>일반</Text> 
                        </View>
                        <View style={[{flex: 1, height: '100%'}, styles.center]}>
                            <Text>선외기</Text> 
                        </View>
                    </View>                   
                    <View style={[{height:'35%',  width: '100%', flexDirection: 'row'}, styles.center]}>
                        <View style={[{flex:1 , height: '100%'}, styles.center, styles.borderRight]}>
                            <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                                onChange={(i)=>setData({
                                ...data,
                                shipCount: i.nativeEvent.text
                                })} 
                                value={data.shipCount}
                            /> 
                        </View>
                        <View style={[{flex: 1, height: '100%'}, styles.center]}>
                            <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                                onChange={(i)=>setData({
                                ...data,
                                otherShipCount: i.nativeEvent.text
                                })} 
                                value={data.otherShipCount}
                            /> 
                        </View>
                    </View>
                </View>
                <View style={[{flex: 1}, styles.borderRight, styles.center]}>
                    <View style={[{height:'65%',  width: '100%'}, styles.center, styles.borderBottom, styles.headerYellowColor]}>
                        <Text style={{textAlign: 'center'}}>{"숙박\n시설\n(개소)"}</Text>
                    </View>
                    <View style={[{height:'35%',  width: '100%'}, styles.center,]}>
                        <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                            onChange={(i)=>setData({
                            ...data,
                            motelCount: i.nativeEvent.text
                            })} 
                            value={data.motelCount}
                        /> 
                    </View>
                </View>
                <View style={[{flex: 1}, styles.borderRight, styles.center]}>
                    <View style={[{height:'65%',  width: '100%'}, styles.center, styles.borderBottom, styles.headerYellowColor]}>
                        <Text style={{textAlign: 'center'}}>{"접안\n시설\n(개소)"}</Text>
                    </View>
                    <View style={[{height:'35%',  width: '100%'}, styles.center,]}>
                        <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                            onChange={(i)=>setData({
                            ...data,
                            facilityCount: i.nativeEvent.text
                            })} 
                            value={data.facilityCount}
                        /> 
                    </View>
                </View>
                <View style={[{flex: 2}, styles.borderRight, styles.center]}>
                    <View style={[{height:'32%',  width: '100%'}, styles.center, styles.borderBottom, styles.headerYellowColor]}>
                        <Text>도서</Text>
                    </View>
                    <View style={[{height:'33%',  width: '100%', flexDirection: 'row'}, styles.center, styles.borderBottom, styles.headerYellowColor]}>
                        <View style={[{flex:1 , height: '100%'}, styles.center, styles.borderRight]}>
                            <Text>유인</Text> 
                        </View>
                        <View style={[{flex: 1, height: '100%'}, styles.center]}>
                            <Text>무인</Text> 
                        </View>
                    </View>                   
                    <View style={[{height:'35%',  width: '100%', flexDirection: 'row'}, styles.center]}>
                        <View style={[{flex:1 , height: '100%'}, styles.center, styles.borderRight]}>
                            <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                                onChange={(i)=>setData({
                                ...data,
                                mannedCount: i.nativeEvent.text
                                })} 
                                value={data.mannedCount}
                            /> 
                        </View>
                        <View style={[{flex: 1, height: '100%'}, styles.center]}>
                            <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                                onChange={(i)=>setData({
                                ...data,
                                unMannedCount: i.nativeEvent.text
                                })} 
                                value={data.unMannedCount}
                            />  
                        </View>
                    </View>
                </View>
            </View> 
            <View style={[{flex: 1, width: '100%', justifyContent: 'center', paddingLeft: 20}, styles.borderBottom, styles.headerYellowColor]}>
                <Text>▶해안방제 책임 행정기관 및 주민대표</Text>
            </View>
            <View style={[{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, styles.borderBottom, styles.headerLightBlue]}>
                <View style={[{flex: 1, height: '100%'}, styles.center, styles.borderRight]}><Text>구분</Text></View>
                <View style={[{flex: 1, height: '100%'}, styles.center, styles.borderRight]}><Text>성명</Text></View>
                <View style={[{flex: 1.5, height: '100%'}, styles.center, styles.borderRight]}><Text>핸드폰</Text></View>
                <View style={[{flex: 1.5, height: '100%'}, styles.center, styles.borderRight]}><Text>사무실 전화</Text></View>
            </View>
            <View style={[{flex: 1.3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, styles.borderBottom]}>
                <View style={[{flex: 1, height: '100%'}, styles.center, styles.borderRight]}>
                    <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                        onChange={(i)=>setData({
                        ...data,
                        contactType1: i.nativeEvent.text
                        })} 
                        value={data.contactType1}
                    />  
                </View>
                <View style={[{flex: 1, height: '100%'}, styles.center, styles.borderRight]}>
                    <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                        onChange={(i)=>setData({
                        ...data,
                        contactName1: i.nativeEvent.text
                        })} 
                        value={data.contactName1}
                    />  
                </View>
                <View style={[{flex: 1.5, height: '100%'}, styles.center, styles.borderRight]}>
                    <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                        onChange={(i)=>setData({
                        ...data,
                        mobilePhone1: i.nativeEvent.text
                        })} 
                        value={data.mobilePhone1}
                    /> 
                </View>
                <View style={[{flex: 1.5, height: '100%'}, styles.center, styles.borderRight]}>
                    <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                        onChange={(i)=>setData({
                        ...data,
                        officePhone1: i.nativeEvent.text
                        })} 
                        value={data.officePhone1}
                    />
                </View>
            </View>
            <View style={[{flex: 1.3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, styles.borderBottom]}>
                <View style={[{flex: 1, height: '100%'}, styles.center, styles.borderRight]}>
                    <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                        onChange={(i)=>setData({
                        ...data,
                        contactType2: i.nativeEvent.text
                        })} 
                        value={data.contactType2}
                    />
                </View>
                <View style={[{flex: 1, height: '100%'}, styles.center, styles.borderRight]}>
                    <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                        onChange={(i)=>setData({
                        ...data,
                        contactName2: i.nativeEvent.text
                        })} 
                        value={data.contactName2}
                    />
                </View>
                <View style={[{flex: 1.5, height: '100%'}, styles.center, styles.borderRight]}>
                    <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                        onChange={(i)=>setData({
                        ...data,
                        mobilePhone2: i.nativeEvent.text
                        })} 
                        value={data.mobilePhone2}
                    />
                </View>
                <View style={[{flex: 1.5, height: '100%'}, styles.center, styles.borderRight]}>
                    <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                        onChange={(i)=>setData({
                        ...data,
                        officePhone2: i.nativeEvent.text
                        })} 
                        value={data.officePhone2}
                    />
                </View>
            </View>
            <View style={[{flex: 1.3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, styles.borderBottom]}>
                <View style={[{flex: 1, height: '100%'}, styles.center, styles.borderRight]}>
                    <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                        onChange={(i)=>setData({
                        ...data,
                        contactType3: i.nativeEvent.text
                        })} 
                        value={data.contactType3}
                    />
                </View>
                <View style={[{flex: 1, height: '100%'}, styles.center, styles.borderRight]}>
                    <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                        onChange={(i)=>setData({
                        ...data,
                        contactName3: i.nativeEvent.text
                        })} 
                        value={data.contactName3}
                    />
                </View>
                <View style={[{flex: 1.5, height: '100%'}, styles.center, styles.borderRight]}>
                    <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                        onChange={(i)=>setData({
                        ...data,
                        mobilePhone3: i.nativeEvent.text
                        })} 
                        value={data.mobilePhone3}
                    />
                </View>
                <View style={[{flex: 1.5, height: '100%'}, styles.center, styles.borderRight]}>
                    <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                        onChange={(i)=>setData({
                        ...data,
                        officePhone3: i.nativeEvent.text
                        })} 
                        value={data.officePhone3}
                    />
                </View>
            </View>
            <View style={[{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, styles.borderBottom, styles.headerYellowColor]}>
                <View style={[{flex: 1, height: '100%'}, styles.center, styles.borderRight]}><Text>조사기간</Text></View>
                <View style={[{flex: 1, height: '100%'}, styles.center, styles.borderRight]}><Text>방제조치 우선순위</Text></View>
            </View>
            <View style={[{flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, styles.borderBottom]}>
                <View style={[{width: '50%', height: '100%'}, styles.center, styles.borderRight]}>
                    <View style={[{flex: 1, width: '100%', flexDirection: 'row'}, styles.center, styles.borderBottom]}>
                        <View style={[{width: '25%', height: '100%'}, styles.center, styles.borderRight]}>
                            <Text>시작</Text>
                        </View>
                        <TouchableOpacity style={{width: '75%', height: '100%',alignItems: "center", justifyContent: 'center'}} onPress={()=>toggleCalendar("recordDataSun")}>
                            <Text>{data.recordDataSun}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{flex: 1, width: '100%', flexDirection: 'row'}, styles.center]}>
                        <View style={[{width: '25%', height: '100%'}, styles.center, styles.borderRight]}>
                            <Text>종료</Text>
                        </View>
                        <TouchableOpacity style={{width: '75%', height: '100%', alignItems: "center", justifyContent: 'center'}} onPress={()=>toggleCalendar("recordDataMoon")}>
                            <Text>{data.recordDataMoon}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[{width: '50%', height: '100%', padding: 10}, styles.center, styles.borderRight]}>
                    <TextInput multiline={true} style={{flex:1, width: '100%', textAlignVertical: 'top', textAlign: "left"}} 
                        onChange={(i)=>setData({
                            ...data,
                            order: i.nativeEvent.text
                        })} 
                        value={data.order}
                    />
                </View>
            </View>
            <View style={[{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}, styles.borderBottom, styles.headerYellowColor]}>
                <Text>해양환경 민감 개소 및 특징</Text>
            </View>
            <View style={[{flex: 3, width: '100%', justifyContent: 'top', padding: 10}, styles.borderBottom]}>
                <TextInput multiline={true} style={{flex:1, width: '100%', textAlignVertical: 'top', textAlign: "left"}} 
                    onChange={(i)=>setData({
                        ...data,
                        note: i.nativeEvent.text
                    })} 
                    value={data.note}
                />
            </View>
        </View>
    </View>
        </KeyboardAwareScrollView>
            </ViewShot>
        </View>
        
        
}

const styles = StyleSheet.create({
    headerBlue: {
        backgroundColor: '#4F81BD'
    },
    headerLightBlue: {
        backgroundColor: '#CFD7E7'
    },
    headerLightBlue2: {
        backgroundColor: '#E9ECF3'
    },
    headerYellowColor: {
        backgroundColor: '#FFFFCC'
    },
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexRow: {
        flexDirection: 'row'
    },  
    borderAll: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black'
    },
    borderTop: {
        borderTopWidth: 1,
        borderTopColor: 'black',
        borderStyle : 'solid'
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    borderLeft: {
        borderLeftWidth: 1,
        borderLeftColor: 'black'
    },
    borderRight : {
        borderRightWidth: 1,
        borderRightColor: 'black'
    }

})


// let dummyData = new RegionInfo(
//     null,
//     null,
//     null,
//     null,
//     null,


//     null,
//     null,
//     null,
//     null,
//     null,


//     null,
//     null,
//     null,
//     null,
//     null,


//     null,
//     null,
//     null,
//     null,
//     null,


//     null,
//     null,
//     null,
//     null,
//     null,


//     null,
//     null,
//     null
// )