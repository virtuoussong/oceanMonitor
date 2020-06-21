import React from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import TitleInputView from './TitleInput';

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

export default FourthdDoc = (props) => {
    return <View style={[styles.container, styles.borderRight]}>
                <TitleInputView/>
                <View style={[styles.secondSection, styles.borderBottom, styles.firstSectionColor]}>
                    <Text style={styles.secondTitle}>방제작업 설계</Text>
                </View>
                <View style={[styles.thirdSection]}>
                    <View style={[styles.largeCell, styles.borderRight]}>
                        <View style={[styles.celltitle, styles.borderBottom, styles.firstSectionColor]}>
                            <Text style={styles.cellTitleText}>주요 시방서</Text>
                        </View>
                        <View style={{flex: 1}}></View>
                    </View>
                    <View style={styles.smallCell}>
                        <View style={[styles.celltitle, styles.borderBottom, styles.firstSectionColor]}>
                            <Text style={styles.cellTitleText}>고려 변수</Text>
                        </View>
                        <View style={{flex: 1}}></View>
                    </View>
                </View>
    </View>
}

const styles = StyleSheet.create({
    cellTitleText: {
        fontSize: 16
    },
    celltitle: {
        // flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    borderRight: {
        borderRightColor: 'black',
        borderRightWidth: 1,
    },
    largeCell: {
        flex: 3,
        height: '100%'
    },
    smallCell: {
        flex: 1.3,
        height: '100%'
    },
    thirdSection: {
        flexDirection: 'row',
        flex: 1
    },
    secondTitle: {
        fontSize: 18
    },
    secondSection: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstSectionColor: {
        backgroundColor: "#FFFFCC"
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderStyle: 'solid'
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
    },

})