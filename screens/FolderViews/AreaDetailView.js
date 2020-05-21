import React from 'react';
import {StyleSheet, View, FlatList, Text, TextInput, KeyboardAvoidingView, Image} from 'react-native';
import DrawerButton from '../../components/DrawerNavButton';
import TitleInputView from '../DocDetail/components/TitleInput';

export default AreaDetailView = (props) => {
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
                        <TextInput/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"조사\n시간"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"고조\n저조"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"천기"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"파고\n(m)"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"풍속\n(m/s)"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"기온\n(℃)"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                        <Text>{"수온\n(℃)"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput/>
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
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                            <View style={[{flex: 1}, styles.borderRight, styles.centerView]}>
                                <Text>{"폭\n(m)"}</Text>
                            </View>
                            <View style={[{flex: 4}, styles.centerView]}>
                                <TextInput/>
                            </View>
                        </View>
                    </View>
                </View>
                
                
            </View>

            {/* 섹션 2 */}
            <View style={[{flex: 5.2}, styles.flexRow, styles.centerView]}>
                <View style={[{flex: 1}, styles.centerView]}>
                    <Image style={[, {width: 100, height: 100}]} source={require("../../assets/cameraIcon.png")}/>
                </View>
                <View style={[{flex:1}, styles.centerView]}>
                    <Image style={[{width: 100, height: 100}]} source={require("../../assets/pictureIcon.png")}/>
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
