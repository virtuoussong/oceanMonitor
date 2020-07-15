import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Modal} from 'react-native';
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

let dummyData = new RegionInfo(
    null,
    null,
    null,
    null,
    null,


    null,
    null,
    null,
    null,
    null,


    null,
    null,
    null,
    null,
    null,


    null,
    null,
    null,
    null,
    null,


    null,
    null,
    null,
    null,
    null,


    null,
    null,
    null
)

export default RegionDetailView = (props) => {

    const [data, setData] = useState(dummyData);
    const [isModalOn, setModal] = useState(false);

    useEffect(()=>{
        regionData.current = data
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
            setData(parsed)
        })
    }

    const openGallery = async () => {
        console.log("saving data", data)
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        
        
        if (!result.cancelled) {
            setData({
                ...data,
                imageLink: result.uri
            })
        }

    }

    const toggleCamera = () => {
        setModal(!isModalOn)
    }

    const savePhoto=(i)=> {
        setData({
            ...data,
            imageLink: i
        })
    }

    const saveDocFromNav = async ()=> {
        
        console.log("saving data", regionData.current)
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

    const cancel = () =>{
        props.close()
    }

    return <View style={styles.constainer}>
            {props.hasCloseButton && <View style={{width: '100%', height: 55, flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 'auto', marginTop: 24, marginLeft: 20}} onPress={()=>cancel()}>
                    <Text style={{fontSize: 20}}>취소</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft: 'auto', marginTop: 24, marginRight: 20}} onPress={()=>saveDoc()}>
                    {props.docID ? <Text style={{fontSize: 20}}>수정</Text> : <Text style={{fontSize: 20}}>저장</Text>}
                </TouchableOpacity>
            </View>}
            <Modal visible={isModalOn}>
                <Camera toggleCamera={()=>toggleCamera()} save={(i)=>savePhoto(i)}/>
            </Modal>
        <KeyboardAwareScrollView style={{width: '100%', height: '100%'}} contentContainerStyle={{flexGrow: 1}}>
            <View style={[styles.constainer, styles.flexRow, styles.borderAll]}>
        
        <View style={[styles.constainer, styles.borderRight, styles.flexRow, {height: '100%'}]}>
            {data.imageLink ? <TouchableOpacity onPress={()=>openGallery()} style={[{flex:1, height: '100%'}, styles.borderRight]}>
                    <Image source={{uri: data.imageLink}} style={[{flex:1}]}/> 
                </TouchableOpacity>
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
                    <View style={[{flex:2,  width: '100%'}, styles.center, styles.borderBottom, styles.headerYellowColor]}><Text style={{textAlign: 'center'}}>주민수</Text></View>
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
                    <View style={[{flex:2,  width: '100%'}, styles.center, styles.borderBottom, styles.headerYellowColor]}><Text style={{textAlign: 'center'}}>가구수</Text></View>
                    <View style={[{flex:1,  width: '100%'}, styles.center,]}>
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
                        <Text style={{textAlign: 'center'}}>{"어촌계\n인원"}</Text>
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
                    <View style={[{flex:1,  width: '100%'}, styles.center, styles.borderBottom, styles.headerYellowColor]}><Text>어선척수</Text></View>
                    <View style={[{flex:1,  width: '100%', flexDirection: 'row'}, styles.center, styles.borderBottom, styles.headerYellowColor]}>
                        <View style={[{flex:1 , height: '100%'}, styles.center, styles.borderRight]}>
                            <Text>일반</Text> 
                        </View>
                        <View style={[{flex: 1, height: '100%'}, styles.center]}>
                            <Text>선외기</Text> 
                        </View>
                    </View>                   
                    <View style={[{flex:1,  width: '100%', flexDirection: 'row'}, styles.center]}>
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
                    <View style={[{flex:2,  width: '100%'}, styles.center, styles.borderBottom, styles.headerYellowColor]}>
                        <Text>{"숙박\n시설"}</Text>
                    </View>
                    <View style={[{flex:1,  width: '100%'}, styles.center,]}>
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
                    <View style={[{flex:2,  width: '100%'}, styles.center, styles.borderBottom, styles.headerYellowColor]}>
                        <Text>{"접안\n시설"}</Text>
                    </View>
                    <View style={[{flex:1,  width: '100%'}, styles.center,]}>
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
                    <View style={[{flex:1,  width: '100%'}, styles.center, styles.borderBottom, styles.headerYellowColor]}>
                        <Text>도서</Text>
                    </View>
                    <View style={[{flex:1,  width: '100%', flexDirection: 'row'}, styles.center, styles.borderBottom, styles.headerYellowColor]}>
                        <View style={[{flex:1 , height: '100%'}, styles.center, styles.borderRight]}>
                            <Text>유인</Text> 
                        </View>
                        <View style={[{flex: 1, height: '100%'}, styles.center]}>
                            <Text>무인</Text> 
                        </View>
                    </View>                   
                    <View style={[{flex:1,  width: '100%', flexDirection: 'row'}, styles.center]}>
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
                <View style={[{flex: 1, height: '100%'}, styles.center, styles.borderRight]}>
                    <View style={[{flex: 1, width: '100%', flexDirection: 'row'}, styles.center, styles.borderBottom]}>
                        <View style={[{flex:1, height: '100%'}, styles.center, styles.borderRight]}>
                            <Text>양력</Text>
                        </View>
                        <View style={{flex:3}}>
                            <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                                onChange={(i)=>setData({
                                ...data,
                                recordDataSun: i.nativeEvent.text
                                })} 
                                value={data.recordDataSun}
                            />
                        </View>
                    </View>
                    <View style={[{flex: 1, width: '100%', flexDirection: 'row'}, styles.center]}>
                        <View style={[{flex:1, height: '100%'}, styles.center, styles.borderRight]}>
                            <Text>음력</Text>
                        </View>
                        <View style={{flex:3}}>
                            <TextInput style={{flex:1, width: '100%', textAlign: "center"}} 
                                onChange={(i)=>setData({
                                ...data,
                                recordDataMoon: i.nativeEvent.text
                                })} 
                                value={data.recordDataMoon}
                            />
                        </View>
                    </View>
                </View>
                <View style={[{flex: 1, height: '100%', padding: 10}, styles.center, styles.borderRight]}>
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