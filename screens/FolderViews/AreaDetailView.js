import React, { useState } from 'react';
import {StyleSheet, View, FlatList, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native';
import DrawerButton from '../../components/DrawerNavButton';
import TitleInputView from '../DocDetail/components/DocDetail/TitleInput';
import AreaDoc from '../../Models/AreaDoc.js';
import area from '../../Redux/reducers/area';

let areaDocData = new AreaDoc(
    1234, 
    "여수 2-1 구역", 
    ["김수영, 송치만, 송치만2, 송치만3"], 
    "2020-3-4", 
    "12:30", 
    "12/23", 
    "맑음", 
    "1m", 
     "100m/h", 
    23, 
    20, 
    "200m", 
    "1km"
)

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
    "1km"
)

export default AreaDetailView = (props) => {

    const [areaData, editAreaData] = useState(areaDataDoc2)

    const pictureTapped = () => {
        console.log("picture tapped")
        
    }

    const cameraTapped = () => {
        console.log("camera tapped")
    }

    return <View style={styles.container}>
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
                <View style={[{flex: 1}, styles.centerView]}>
                    <TouchableOpacity onPress={()=>cameraTapped()}>
                        <Image style={[, {width: 100, height: 100}]} source={require("../../assets/cameraIcon.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={[{flex:1}, styles.centerView]}>
                    <TouchableOpacity onPress={()=>pictureTapped()}>
                        <Image style={[{width: 100, height: 100}]} source={require("../../assets/pictureIcon.png")}/>
                    </TouchableOpacity>
                </View>
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
