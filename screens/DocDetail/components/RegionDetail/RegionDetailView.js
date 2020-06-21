import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Modal} from 'react-native';
import DrawerButton from '../../../../components/DrawerNavButton';
import TitleInputView from '../DocDetail/TitleInput';
import AreaDoc from '../../../../Models/AreaDoc.js';
import area from '../../../../Redux/reducers/area';
import {RegionInfo} from '../../../../Models/RegionInfo.js';
import * as ImagePicker from 'expo-image-picker';
import Camera from '../../../Camera';
let dummyData = new RegionInfo(
    "어촌계 1",
    "20",
    "10",
    "11",
    "2",
    "3",
    "4",
    "5",
    "15",
    "5",
    "3",
    "이장",
    "송치만",
    "010-3445-1234",
    "032-456-0987",
    "소장",
    "송치만",
    "010-3212-1234",
    "",
    "부녀회장",
    "감양례",
    "010-2345-1234",
    "",
    "2020-3-12",
    "2012-3-31",
    "바지락 양식장 묘도 주탑",
    "양식장: 바지락, 자동차 일부 통행 가능, 횟집 및 식당",
    ""
)

export default RegionDetailView = (props) => {

    const [data, setData] = useState(dummyData);
    const [isModalOn, setModal] = useState(false);

    useEffect(()=>{

    }, [data])

    const openGallery = async () => {

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

    return <View style={[styles.constainer, styles.flexRow, styles.borderAll]}>
        {isModalOn && <Modal>
            <Camera toggleCamera={()=>toggleCamera()} save={(i)=>savePhoto(i)}/>
        </Modal>}
        
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
            <View style={[{flex: 1, width: '100%'}, styles.center,styles.borderBottom]}>
                <Text>지역 일반 정보</Text>
            </View>
            <View style={[{flex:1, flexDirection: 'row'}, styles.borderBottom]}>
                <View style={[styles.borderRight, {flex: 1, justifyContent: 'center', paddingLeft: 20}]}><Text>▶행정구역</Text></View>
                <View style={[{flex:1}, styles.center]}><TextInput style={{flex:1, width: '100%', textAlign: "center"}} onChange={(i)=>setData({
                    ...data,
                    areaName: i.nativeEvent.text
                })} value={data.areaName}/></View>
            </View>
            <View style={[{flex: 1, width: '100%', justifyContent: 'center', paddingLeft: 20}, styles.borderBottom]}><Text>▶일반현황</Text></View>
            <View style={[{flex: 3, width: '100%'}, styles.flexRow, styles.borderBottom]}>
                <View style={[{flex: 1}, styles.borderRight, styles.center]}>
                    <View style={[{flex:2,  width: '100%'}, styles.center, styles.borderBottom]}><Text style={{textAlign: 'center'}}>주민수</Text></View>
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
                    <View style={[{flex:2,  width: '100%'}, styles.center, styles.borderBottom]}><Text style={{textAlign: 'center'}}>가구수</Text></View>
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
                    <View style={[{flex:2,  width: '100%'}, styles.center, styles.borderBottom]}><Text style={{textAlign: 'center'}}>{"어촌계\n반수"}</Text></View>
                    <View style={[{flex:1,  width: '100%'}, styles.center,]}>
                        <Text>77호</Text>
                    </View>
                </View>
                <View style={[{flex: 1}, styles.borderRight, styles.center]}>
                    <View style={[{flex:2,  width: '100%'}, styles.center, styles.borderBottom]}>
                        <Text style={{textAlign: 'center'}}>{"어촌계\n인원"}</Text>
                    </View>
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
                <View style={[{flex: 2}, styles.borderRight, styles.center]}>
                    <View style={[{flex:1,  width: '100%'}, styles.center, styles.borderBottom]}><Text>어선척수</Text></View>
                    <View style={[{flex:1,  width: '100%', flexDirection: 'row'}, styles.center, styles.borderBottom]}>
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
                            <View style={[{flex:2,  width: '100%'}, styles.center, styles.borderBottom]}>
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
                    <View style={[{flex:2,  width: '100%'}, styles.center, styles.borderBottom]}>
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
                    <View style={[{flex:1,  width: '100%'}, styles.center, styles.borderBottom]}>
                        <Text>도서</Text>
                    </View>
                    <View style={[{flex:1,  width: '100%', flexDirection: 'row'}, styles.center, styles.borderBottom]}>
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
            <View style={[{flex: 1, width: '100%', justifyContent: 'center', paddingLeft: 20}, styles.borderBottom]}>
                <Text>▶해안방제 책임 행정기관 및 주민대표</Text>
            </View>
            <View style={[{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, styles.borderBottom]}>
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
            <View style={[{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, styles.borderBottom]}>
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
            <View style={[{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}, styles.borderBottom]}>
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
}

const styles = StyleSheet.create({

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