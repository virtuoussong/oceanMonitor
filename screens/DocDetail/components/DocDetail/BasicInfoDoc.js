import React, { useState, useEffect } from 'react';
import {StyleSheet, View, FlatList, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Modal} from 'react-native';
// import DrawerButton from '../../components/DrawerNavButton';
import TitleInputView from '../DocDetail/TitleInput';
import AreaDoc from '../../../../Models/AreaDoc';
// import area from '../../Redux/reducers/area';
import Camera from '../../../Camera';
import * as ImagePicker from 'expo-image-picker';


let areaDataDoc2 = new AreaDoc(
    1234, 
    "여수 2-1 구역", 
    ['송치만'], 
    "2020-6-1", 
    "12:30", 
    "12m/12m", 
    "맑음", 
    "1m", 
    "1m/h", 
    "20c", 
    "15c", 
    "12m", 
    "1km",
    ""
)

export default BasicInfoDoc = (props) => {

    const [areaData, editAreaData] = useState(areaDataDoc2)
    const [isModalOn, setModal] = useState(false);
    useEffect(()=>{

    }, [areaData])

    const pictureTapped = async () => {
        console.log("picture tapped")
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        
        
        if (!result.cancelled) {
            editAreaData({
                ...areaData,
                imageLink: result.uri
            })
        }
    }

    const cameraTapped = () => {
        console.log("camera tapped")
        setModal(!isModalOn)
    }

    const toggleCamera = () => {
        setModal(!isModalOn)
    }

    const savePhoto=(i)=> {
        editAreaData({
            ...areaData,
            imageLink: i
        })
    }

    return <View style={styles.container}>
        <Modal visible={isModalOn}>
            <Camera toggleCamera={()=>toggleCamera()} save={(i)=>savePhoto(i)}/>
        </Modal>
        <TitleInputView/>
        <View style={styles.divisionWrapper}>
            {/* 섹션 1 */}
            <View style={[{flex: 1}, styles.rightBorderLine]}>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"조사\n일시"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.date} name={"date"} onChange={(i)=>editAreaData({...areaData, date: i.target.value})}/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"조사\n시간"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.hour} onChange={(i)=>editAreaData({...areaData, hour: i.target.value})}/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"고조\n저조"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.tide} onChange={(i)=>editAreaData({...areaData, tide: i.target.value})}/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"천기"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.sky} onChange={(i)=>editAreaData({...areaData, sky: i.target.value})}/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"파고\n(m)"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.wave} onChange={(i)=>editAreaData({...areaData, wave: i.target.value})}/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"풍속\n(m/s)"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.wind} onChange={(i)=>editAreaData({...areaData, wind: i.target.value})}/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"기온\n(℃)"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.temp} onChange={(i)=>editAreaData({...areaData, temp: i.target.value})}/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"수온\n(℃)"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.waterTemp} onChange={(i)=>editAreaData({...areaData, waterTemp: i.target.value})}/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 2}]}>
                    <View style={[styles.borderRight, {flex: 1}, styles.centerView]}><Text>{"해\n안\n선"}</Text></View>
                    <View style={[{flex: 5}]}>
                        <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                            <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                                <Text>{"길\n이\n(m)"}</Text>
                            </View>
                            <View style={[{flex: 4}, styles.centerView]}>
                                <TextInput value={areaData.beachLength} onChange={(i)=>editAreaData({...areaData, beachLength: i.target.value})}/>
                            </View>
                        </View>

                        <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                            <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                                <Text>{"폭\n(m)"}</Text>
                            </View>
                            <View style={[{flex: 4}, styles.centerView]}>
                                <TextInput value={areaData.beachWidth} onChange={(i)=>editAreaData({...areaData, beachWidth: i.target.value})}/>
                            </View>
                        </View>
                    </View>
                </View>
                
                
            </View>

            {/* 섹션 2 */}
            <View style={[{flex: 5.2}, styles.flexRow, styles.centerView]}>
                {areaData.imageLink ? 
                    <TouchableOpacity style={{flex: 1}} onPress={()=>pictureTapped()}>
                        <Image style={{flex: 1}} source={{uri: areaData.imageLink}}/>  
                    </TouchableOpacity> :
                    <React.Fragment>
                        <View style={[{flex: 1}, styles.centerView]}>
                            <TouchableOpacity onPress={()=>cameraTapped()}>
                                <Image style={[, {width: 100, height: 100}]} source={require("../../../../assets/cameraIcon.png")}/>
                            </TouchableOpacity>
                        </View>
                        <View style={[{flex:1}, styles.centerView]}>
                            <TouchableOpacity onPress={()=>pictureTapped()}>
                                <Image style={[{width: 100, height: 100}]} source={require("../../../../assets/pictureIcon.png")}/>
                            </TouchableOpacity>
                        </View>
                    </React.Fragment>
                }
                
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({

    centerView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    borderRight: {
        borderRightWidth: 1,
        borderRightColor: 'black'
    },
    flexRow: {
        flexDirection: 'row',
    },
    thirdSectionColor: {
        backgroundColor: "#E6E0EC"
    },
    secondSectionColor: {
        backgroundColor: "#DBEEF4"
    },
    firstSectionColor: {
        backgroundColor: "#FDEADA"
    },
    imageInput: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputCell: {
        flex: 1,
        width: '100%',
        justifyContent:'center',
        alignItems: 'center'
    },
    cellText: {
        fontSize: 18
    },
    midSizeCell: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    sectionTop: {
        flexDirection: 'row',
        width: '100%',
        height: 80
    },
    borderBottom: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    rightBorderLine: {
        borderRightWidth: 1,
        borderRightColor: 'black',
    },
    divisionSection: {
        flex: 1,
    },
    divisionWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    container: {
        flex:1,
    
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',

        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRightWidth: 0,
        backgroundColor: 'white'
    }, 
    
})
