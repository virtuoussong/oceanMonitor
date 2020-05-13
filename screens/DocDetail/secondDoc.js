import React from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity, ScrollView, Image} from 'react-native';
import TitleInputView from '../DocDetail/components/TitleInput';
import PageTitle from '../DocDetail/components//PageTitle';

let dataSet = [
    {id: 1, name: "구역 1"},
    {id: 2, name: "구역 2"},
    {id: 3, name: "구역 3"},
    {id: 4, name: "구역 4"},
    {id: 5, name: "구역 5"},
    {id: 6, name: "구역 6"},
    {id: 7, name: "구역 7"},
    {id: 8, name: "구역 8"},
    {id: 9, name: "구역 1"},
    {id: 10, name: "구역 2"},
    {id: 11, name: "구역 3"},
    {id: 12, name: "구역 4"},
    {id: 13, name: "구역 5"},
    {id: 14, name: "구역 6"},
    {id: 15, name: "구역 7"},
    {id: 16, name: "구역 8"},
]

export default SecondDoc = (props) => {
    return <View style={styles.container}>
        <TitleInputView/>
        <PageTitle title={"표면상 오염상태"}/>
        <View style={styles.divisionWrapper}>
            {/* first section*/}
            <View style={[styles.divisionSection, styles.rightBorderLine]}>
                <View style={[styles.sectionTop, styles.borderBottom, styles.firstSectionColor]}>
                    <Text style={styles.topSelectButton}>구간선택</Text>
                    <Image style={styles.triangle} source={require('../../assets/whiteTriangle.png')}/>
                </View>
                <View style={[styles.secondColumn, styles.borderBottom, styles.firstSectionColor]}>
                    <Text style={styles.regularFont}>기름범위(m,%)</Text>
                </View>
                <View style={[styles.flexRowColumn, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.firstSectionColor, styles.borderBottom]}><Text style={styles.regularFont}>길이</Text></View>
                        <View style={[styles.smallCell]}></View>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.firstSectionColor, styles.borderBottom]}><Text style={styles.regularFont}>폭</Text></View>
                        <View style={[styles.smallCell]}></View>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <View style={[styles.smallCell, styles.firstSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>분포</Text>
                            <Image style={styles.triangleInSmallCell} source={require('../../assets/whiteTriangle.png')}/>
                        </View>
                        <View style={[styles.smallCell]}></View>
                    </View>
                </View>
                <View style={[styles.flexRowColumn, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.firstSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>기름 두께</Text>
                            <Image style={styles.triangleInSmallCell} source={require('../../assets/whiteTriangle.png')}/>
                        </View>
                        <View style={[styles.smallCell]}></View>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.firstSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>기름 상태</Text>
                            <Image style={styles.triangleInSmallCell} source={require('../../assets/whiteTriangle.png')}/>
                        </View>
                        <View style={[styles.smallCell]}></View>
                    </View>
                </View>
                <View style={[styles.imageSection]}>
                    <View style={styles.imageSection}>
                        <Image source={require('../../assets/cameraIcon.png')}/>
                    </View>
                    <View style={styles.imageSection}>
                        <Image source={require('../../assets/pictureIcon.png')}/>
                    </View>
                </View>
            </View>
            {/* second section*/}
            <View style={[styles.divisionSection, styles.rightBorderLine]}>
                <View style={[styles.sectionTop, styles.borderBottom, styles.secondSectionColor]}>
                    <Text style={styles.topSelectButton}>구간선택</Text>
                    <Image style={styles.triangle} source={require('../../assets/whiteTriangle.png')}/>
                </View>
                <View style={[styles.secondColumn, styles.borderBottom, styles.secondSectionColor]}>
                    <Text style={styles.regularFont}>기름범위(m,%)</Text>
                </View>
                <View style={[styles.flexRowColumn, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.secondSectionColor, styles.borderBottom]}><Text style={styles.regularFont}>길이</Text></View>
                        <View style={[styles.smallCell]}></View>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.secondSectionColor, styles.borderBottom]}><Text style={styles.regularFont}>폭</Text></View>
                        <View style={[styles.smallCell]}></View>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <View style={[styles.smallCell, styles.secondSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>분포</Text>
                            <Image style={styles.triangleInSmallCell} source={require('../../assets/whiteTriangle.png')}/>
                        </View>
                        <View style={[styles.smallCell]}></View>
                    </View>
                </View>
                <View style={[styles.flexRowColumn, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.secondSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>기름 두께</Text>
                            <Image style={styles.triangleInSmallCell} source={require('../../assets/whiteTriangle.png')}/>
                        </View>
                        <View style={[styles.smallCell]}></View>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <View style={[styles.smallCell, styles.secondSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>기름 상태</Text>
                            <Image style={styles.triangleInSmallCell} source={require('../../assets/whiteTriangle.png')}/>
                        </View>
                        <View style={[styles.smallCell]}>

                        </View>
                    </View>
                </View>
                <View style={[styles.imageSection]}>
                    <View style={styles.imageSection}>
                        <Image source={require('../../assets/cameraIcon.png')}/>
                    </View>
                    <View style={styles.imageSection}>
                        <Image source={require('../../assets/pictureIcon.png')}/>
                    </View>
                </View>
            </View>
            {/* third section*/}
            <View style={styles.divisionSection}>
            <View style={[styles.sectionTop, styles.borderBottom, styles.thirdSectionColor]}>
                    <Text style={styles.topSelectButton}>구간선택</Text>
                    <Image style={styles.triangle} source={require('../../assets/whiteTriangle.png')}/>
                </View>
                <View style={[styles.secondColumn, styles.borderBottom, styles.thirdSectionColor]}>
                    <Text style={styles.regularFont}>기름범위(m,%)</Text>
                </View>
                <View style={[styles.flexRowColumn, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.thirdSectionColor, styles.borderBottom]}><Text style={styles.regularFont}>길이</Text></View>
                        <View style={[styles.smallCell]}></View>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.thirdSectionColor, styles.borderBottom]}><Text style={styles.regularFont}>폭</Text></View>
                        <View style={[styles.smallCell]}></View>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <View style={[styles.smallCell, styles.thirdSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>분포</Text>
                            <Image style={styles.triangleInSmallCell} source={require('../../assets/whiteTriangle.png')}/>
                        </View>
                        <View style={[styles.smallCell]}></View>
                    </View>
                </View>
                <View style={[styles.flexRowColumn, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.thirdSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>기름 두께</Text>
                            <Image style={styles.triangleInSmallCell} source={require('../../assets/whiteTriangle.png')}/>
                        </View>
                        <View style={[styles.smallCell]}></View>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <View style={[styles.smallCell, styles.thirdSectionColor, styles.borderBottom]}>
                            <Text style={[styles.regularFont, styles.smallCellWithImage]}>기름 상태</Text>
                            <Image style={styles.triangleInSmallCell} source={require('../../assets/whiteTriangle.png')}/>
                        </View>
                        <View style={[styles.smallCell]}></View>
                    </View>
                </View>
                <View style={[styles.imageSection]}>
                    <View style={styles.imageSection}>
                        <Image source={require('../../assets/cameraIcon.png')}/>
                    </View>
                    <View style={styles.imageSection}>
                        <Image source={require('../../assets/pictureIcon.png')}/>
                    </View>
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