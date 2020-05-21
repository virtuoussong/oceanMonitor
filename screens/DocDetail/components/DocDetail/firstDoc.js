import React from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import TitleInputView from '../TitleInput';
import PageTitle from '../PageTitle';
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

export default FirstDoc = (props) => {
    return <View style={styles.container}>
        <TitleInputView/>
        <PageTitle title={"구간별 해안 형태"}/>
        <View style={styles.divisionWrapper}>
            {/* 섹션 1 */}
            <View style={[styles.divisionSection, styles.rightBorderLine]}>
                {/* 상부 정보 입력 */}
                <View style={[styles.sectionTop, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine, styles.firstSectionColor]}>
                        <Text style={styles.cellText}>상부</Text>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom]}><Text>인공석축</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>수직안벽</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom]}><Text>인공석축</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>수직안벽</Text></TouchableOpacity>
                    </View>
                </View>

                {/* 이미지 입력 */}
                <View style={[styles.imageInput, styles.borderBottom]}>

                </View>

                <View style={[styles.sectionTop, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.firstSectionColor]}><Text>길이(m)</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>630</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.firstSectionColor]}><Text>폭(m)</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>3</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.firstSectionColor]}><Text>경사도</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>80</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.sectionTop, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.firstSectionColor]}><Text>입도(mm)</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>-</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.firstSectionColor]}><Text>구형도</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>0.2</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.firstSectionColor]}><Text>원마도</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>0.5</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* 섹션 2 */}
            <View style={[styles.divisionSection, styles.rightBorderLine]}>
                <View style={[styles.sectionTop, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine, styles.secondSectionColor]}>
                        <Text style={styles.cellText}>중부</Text>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom]}><Text>인공석축</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>수직안벽</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom]}><Text>인공석축</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>수직안벽</Text></TouchableOpacity>
                    </View>
                </View>

                 {/* 이미지 입력 */}
                <View style={[styles.imageInput, styles.borderBottom]}>

                </View>

                <View style={[styles.sectionTop, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.secondSectionColor]}><Text>길이(m)</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>630</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.secondSectionColor]}><Text>폭(m)</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>3</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.secondSectionColor]}><Text>경사도</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>80</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.sectionTop, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.secondSectionColor]}><Text>입도(mm)</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>-</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom,  styles.secondSectionColor]}><Text>구형도</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>0.2</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.secondSectionColor]}><Text>원마도</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>0.5</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* 섹션 3 */}
            <View style={styles.divisionSection}>
                <View style={[styles.sectionTop, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine, styles.thirdSectionColor]}>
                        <Text style={styles.cellText}>하부</Text>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom]}><Text>인공석축</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>수직안벽</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom]}><Text>인공석축</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>수직안벽</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.imageInput, styles.borderBottom]}>

                </View>

                <View style={[styles.sectionTop, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.thirdSectionColor]}><Text>길이(m)</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>630</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.thirdSectionColor]}><Text>폭(m)</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>3</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.thirdSectionColor]}><Text>경사도</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>80</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.sectionTop, styles.borderBottom]}>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.thirdSectionColor]}><Text>입도(mm)</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>-</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell, styles.rightBorderLine]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.thirdSectionColor]}><Text>구형도</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>0.2</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.midSizeCell]}>
                        <TouchableOpacity style={[styles.inputCell, styles.borderBottom, styles.thirdSectionColor]}><Text>원마도</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inputCell}><Text>0.5</Text></TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
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