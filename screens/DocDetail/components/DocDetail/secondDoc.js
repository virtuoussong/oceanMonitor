import React, { useState, useEffect } from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity, ScrollView, Image, Modal, TextInput} from 'react-native';
import TitleInputView from './TitleInput';
import PageTitle from '../../components/PageTitle';
import PickerView from '../PickerView';
import WhiteTriangle from '../../../../assets/whiteTriangle.png';
import {SectionType} from "../../../../Models/FirstPage";
// import ImagePicker from 'react-native-image-picker';
// import {Permissions, ImagePicker} from 'expo';
import * as ImagePicker from 'expo-image-picker';
import Camera from '../../../Camera';
import { Video } from 'expo-av';

import {
    SecondPage,
    BeachStatus,
    ThicknessType,
    OilStatus,
  } from "../../../../Models/SecondPage";
// import { TextInput } from 'react-native-gesture-handler';

let dataSetForPage2 = new SecondPage (
    new BeachStatus(
        SectionType.TOP,
        null,
        null,
        "0",
        ThicknessType.PO,
        OilStatus.FR,
        null
    ),
    new BeachStatus(
        SectionType.MIDDLE,
        null,
        null,
        "0",
        ThicknessType.PO,
        OilStatus.FR,
        null
    ),
    new BeachStatus(
        SectionType.MIDDLE_BOTTOM,
        null,
        null,
        "0",
        ThicknessType.PO,
        OilStatus.FR,
        null
    )
);

export default SecondDoc = (props) => {
    const [data, setData] = useState(dataSetForPage2);
    const [isPickerOn, setPickerView] = useState(false);
    const [dataForSelect, setDataForSelect] = useState([]);
    const [targetData, setTargetDate] = useState({
        section: null,
        field: null
    });
    const [isCameraOn, setCamera] = useState(false)

    useEffect(()=>{
        if (props.data) {
            console.log("dara 2", props.data)
            setData(props.data)
        }
    }, [props.data])

    useEffect(()=>{
        // props.refData.current = data
    },[isPickerOn])

    useEffect(()=>{
        props.refData.current = data
    },[data])

    const selectInput = (section, field) => {
        setTargetDate({
            section: section,
            field: field
        })

        if (field == 'thickness') {
            setDataForSelect(Object.values(ThicknessType))
        } else if (field == 'oilType') {
            setDataForSelect(Object.values(OilStatus))
        } else if (field == 'spread') {
            setDataForSelect(["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"])
        } else if (field == 'location') {
            setDataForSelect(Object.values(SectionType))
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
            } else {

            }
        }
    }, [targetData])

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


    const takePhoto = async (section, field) => {
        // setCamera(!isCameraOn)
        // setTargetDate({
        //     section: section,
        //     field: field
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
            // savePhoto(result.uri)
            setData({
                ...data,
                [section]: {
                    ...data[section],
                    [field]: result.uri
                }
            })
        }
    }

    const savePhoto=(i)=> {
        setData({
            ...data,
            [targetData.section]: {
                ...data[targetData.section],
                [targetData.field]: i
            }
        })
    }

    const toggleCamera = () => {
    setCamera(!isCameraOn)
    }
    
    return <View style={styles.container}>
        <Modal visible={isCameraOn}>
            <Camera toggleCamera={()=>toggleCamera()} save={(i)=>savePhoto(i)}/>
        </Modal>

        <Modal
            animationType="slide"
            transparent={true}
            visible={isPickerOn}
        >
            <PickerView data={dataForSelect} onSelect={(i)=>selectedData(i)} hide={()=>togglePicker()}/>
        </Modal>

        {/* <TitleInputView/> */}
        <PageTitle title={`${props.isLower ? "표면상 오염상태 하" :"표면상 오염상태 상"}`}/>
        <View style={styles.divisionWrapper}>
            {/* first section*/}
            <View style={[styles.divisionSection, styles.rightBorderLine]}>
                <TouchableOpacity onPress={()=>selectInput('firstSection', 'location')} style={[styles.sectionTop, styles.borderBottom, styles.firstSectionColor]}>
                    <Text style={styles.topSelectButton}>{data.firstSection.location}</Text>
                    <Image style={styles.triangle} source={WhiteTriangle}/>
                </TouchableOpacity>
                <View style={[styles.secondColumn, styles.borderBottom, styles.firstSectionColor]}>
                    <Text style={styles.regularFont}>기름범위(m,%)</Text>
                </View>
                <View style={[styles.flexRowColumn, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.firstSectionColor, styles.borderBottom]}><Text style={styles.regularFont}>길이</Text></View>
                        <View style={[styles.smallCell]}>
                            <TextInput 
                                keyboardType="number-pad"
                                style={{flex: 1, textAlign: 'center'}} 
                                value={data.firstSection.length}
                                onChange={(i)=>setData({
                                    ...data,
                                    firstSection: {
                                        ...data.firstSection,
                                        length: i.target.value
                                    }
                                })}
                            />
                        </View>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.firstSectionColor, styles.borderBottom]}><Text style={styles.regularFont}>폭</Text></View>
                        <View style={[styles.smallCell]}>
                            <TextInput 
                                keyboardType="number-pad"
                                style={{flex: 1, textAlign: 'center'}} 
                                value={data.firstSection.width}
                                onChange={(i)=>setData({
                                    ...data,
                                    firstSection: {
                                        ...data.firstSection,
                                        length: i.target.value
                                    }
                                })}
                            />
                        </View>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <TouchableOpacity onPress={()=>selectInput('firstSection', 'spread')} style={[styles.smallCell, styles.firstSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>분포</Text>
                            <Image style={styles.triangleInSmallCell} source={WhiteTriangle}/>
                        </TouchableOpacity>
                            <View style={[styles.smallCell]}>
                                <Text>{`${data.firstSection.spread}%`}</Text>
                            </View>
                    </View>
                </View>
                <View style={[styles.flexRowColumn, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity onPress={()=>selectInput('firstSection', 'thickness')} style={[styles.smallCell, styles.firstSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>기름 두께</Text>
                            <Image style={styles.triangleInSmallCell} source={WhiteTriangle}/>
                        </TouchableOpacity>
                        <View style={[styles.smallCell]}>
                            <Text style={{textAlign:'center'}}>{data.firstSection.thickness}</Text>
                        </View>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <TouchableOpacity onPress={()=>selectInput('firstSection', 'oilType')} style={[styles.smallCell, styles.firstSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>기름 상태</Text>
                            <Image style={styles.triangleInSmallCell} source={WhiteTriangle}/>
                        </TouchableOpacity>
                            <View style={[styles.smallCell]}>
                                <Text style={{textAlign:'center'}}>{data.firstSection.oilType}</Text>
                            </View>
                    </View>
                </View>
                <View style={[styles.imageSection]}>
                    {data.firstSection.imageLink ? 
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
            </View>
            {/* second section*/}
            <View style={[styles.divisionSection, styles.rightBorderLine]}>
                <TouchableOpacity onPress={()=>selectInput('secondSection', 'location')} style={[styles.sectionTop, styles.borderBottom, styles.secondSectionColor]}>
                    <Text style={styles.topSelectButton}>{data.secondSection.location}</Text>
                    <Image style={styles.triangle} source={WhiteTriangle}/>
                </TouchableOpacity>
                <View style={[styles.secondColumn, styles.borderBottom, styles.secondSectionColor]}>
                    <Text style={styles.regularFont}>기름범위(m,%)</Text>
                </View>
                <View style={[styles.flexRowColumn, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.secondSectionColor, styles.borderBottom]}><Text style={styles.regularFont}>길이</Text></View>
                        <View style={[styles.smallCell]}>
                            <TextInput 
                                keyboardType="number-pad"
                                style={{flex: 1, textAlign: 'center'}} 
                                value={data.secondSection.length} 
                                onChange={(i)=>setData({
                                    ...data,
                                    secondSection: {
                                        ...data.secondSection,
                                        length: i.target.value
                                    }
                                })}
                            />
                        </View>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.secondSectionColor, styles.borderBottom]}><Text style={styles.regularFont}>폭</Text></View>
                        <View style={[styles.smallCell]}>
                            <TextInput 
                                keyboardType="number-pad"
                                style={{flex: 1, textAlign: 'center'}} 
                                value={data.secondSection.width} 
                                onChange={(i)=>setData({
                                    ...data,
                                    secondSection: {
                                        ...data.secondSection,
                                        width: i.target.value
                                    }
                                })}
                            />
                        </View>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <TouchableOpacity  onPress={()=>selectInput('secondSection', 'spread')} style={[styles.smallCell, styles.secondSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>분포</Text>
                            <Image style={styles.triangleInSmallCell} source={WhiteTriangle}/>
                        </TouchableOpacity>
                            <View style={[styles.smallCell]}>
                                <Text>{`${data.secondSection.spread}%`}</Text>
                            </View>
                    </View>
                </View>
                <View style={[styles.flexRowColumn, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity  onPress={()=>selectInput('secondSection', 'thickness')} style={[styles.smallCell, styles.secondSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>기름 두께</Text>
                            <Image style={styles.triangleInSmallCell} source={WhiteTriangle}/>
                        </TouchableOpacity>
                        <View style={[styles.smallCell]}>
                            <Text style={{textAlign:'center'}}>{data.secondSection.thickness}</Text>
                        </View>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <TouchableOpacity  onPress={()=>selectInput('secondSection', 'oilType')}  style={[styles.smallCell, styles.secondSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>기름 상태</Text>
                            <Image style={styles.triangleInSmallCell} source={WhiteTriangle}/>
                        </TouchableOpacity>
                        <View style={[styles.smallCell]}>
                            <Text style={{textAlign:'center'}}>{data.secondSection.oilType}</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.imageSection]}>
                    {data.secondSection.imageLink ? 
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
            </View>
            {/* third section*/}
            <View style={styles.divisionSection}>
                <TouchableOpacity  onPress={()=>selectInput('thirdSection', 'location')} style={[styles.sectionTop, styles.borderBottom, styles.thirdSectionColor]}>
                    <Text style={styles.topSelectButton}>{data.thirdSection.location}</Text>
                    <Image style={styles.triangle} source={WhiteTriangle}/>
                </TouchableOpacity>
                <View style={[styles.secondColumn, styles.borderBottom, styles.thirdSectionColor]}>
                    <Text style={styles.regularFont}>기름범위(m,%)</Text>
                </View>
                <View style={[styles.flexRowColumn, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.thirdSectionColor, styles.borderBottom]}><Text style={styles.regularFont}>길이</Text></View>
                        <View style={[styles.smallCell]}>
                            <TextInput 
                                keyboardType="number-pad"
                                style={{flex: 1, textAlign: 'center'}} 
                                value={data.thirdSection.length} 
                                onChange={(i)=>setData({
                                    ...data,
                                    thirdSection: {
                                        ...data.thirdSection,
                                        length: i.target.value
                                    }
                                })}
                            />
                        </View>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.thirdSectionColor, styles.borderBottom]}><Text style={styles.regularFont}>폭</Text></View>
                        <View style={[styles.smallCell]}>
                            <TextInput 
                                keyboardType="number-pad"
                                style={{flex: 1, textAlign: 'center'}} 
                                value={data.thirdSection.width} 
                                onChange={(i)=>setData({
                                    ...data,
                                    thirdSection: {
                                        ...data.thirdSection,
                                        width: i.target.value
                                    }
                                })}
                            />
                        </View>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <TouchableOpacity onPress={()=>selectInput('thirdSection', 'spread')}  style={[styles.smallCell, styles.thirdSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>분포</Text>
                            <Image style={styles.triangleInSmallCell} source={WhiteTriangle}/>
                        </TouchableOpacity>
                            <View style={[styles.smallCell]}><Text>{`${data.thirdSection.spread}%`}</Text></View>
                    </View>
                </View>
                <View style={[styles.flexRowColumn, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity onPress={()=>selectInput('thirdSection', 'thickness')} style={[styles.smallCell, styles.thirdSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>기름 두께</Text>
                            <Image style={styles.triangleInSmallCell} source={WhiteTriangle}/>
                        </TouchableOpacity>
                        <View style={[styles.smallCell]}>
                            <Text style={{textAlign:'center'}}>{data.thirdSection.thickness}</Text>
                        </View>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity onPress={()=>selectInput('thirdSection', 'oilType')} style={[styles.smallCell, styles.thirdSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>기름 상태</Text>
                            <Image style={styles.triangleInSmallCell} source={WhiteTriangle}/>
                        </TouchableOpacity>
                        <View style={[styles.smallCell]}>
                            <Text style={{textAlign:'center'}}>{data.thirdSection.oilType}</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.imageSection]}>
                    {data.thirdSection.imageLink ? 
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
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    imageSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallCellWithImage: {
        flex: 1,
        textAlign: 'center',
        marginLeft: 8
    },
    triangleInSmallCell: {
        width: 17,
        height: 17,
        marginRight: 8
    },
    smallCell: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    flexRowColumn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100
    },
    secondColumn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    regularFont: {
        fontSize: 20
    },
    midSizeCell: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    triangle: {
        width: 24,
        height: 20,
        marginRight: 16
    },
    topSelectButton: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 24
    },
    sectionTop: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 60,
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
    borderBottom: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    rightBorderLine: {
        borderRightWidth: 1,
        borderRightColor: 'black'
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
        borderRightWidth: 0
    }
})