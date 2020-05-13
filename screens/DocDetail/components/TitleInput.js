import React from 'react';
import {StyleSheet, View, Text, TextInput, KeyboardAvoidingView} from 'react-native';


export default TitleInput = (props) => {

    return <KeyboardAvoidingView style={styles.keyboardContainer} behavior="position" enabled   keyboardVerticalOffset={100}>
        <View style={styles.firstRow}>
            <Text style={styles.areaName}>구역명</Text>
            <View style={styles.areaNameImage}></View>
            <TextInput placeholder={"text"} style={styles.nameInputField}/>
            <View style={styles.nameDocImage}></View>
            <Text style={styles.inspectors}>조사자</Text>
            <View style={styles.inspectorBox}>
                <View style={[styles.agenBoxRow , {borderBottomWidth: 1, borderBottomColor: 'black'}]}>
                    <View style={[styles.agentTextBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
                        <Text style={styles.agentNames}>김수영</Text>
                    </View>
                    <View style={styles.agentTextBox}>
                        <Text style={styles.agentNames}>박상현</Text>
                    </View>
                </View>
                <View style={styles.agenBoxRow}>
                    <View style={[styles.agentTextBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
                        <Text style={styles.agentNames}>문학</Text>
                    </View>
                    <View style={styles.agentTextBox}>
                        <Text style={styles.agentNames}>배상수</Text>
                    </View>
                </View>
            </View>
        </View> 
    </KeyboardAvoidingView>

}

const styles = StyleSheet.create({
    keyboardContainer: {
        width: "100%",
        height: "10%"
    },
    firstRow: {
        width: '100%',
        height: "100%",
        flexDirection: "row",
        
        justifyContent: "flex-start",
        alignItems: 'center',
        // height: '10%',

        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRightWidth: 0,
        borderLeftWidth: 0
    },
    areaName: {
        padding: 20,
        borderRightWidth: 1,
        borderRightColor: 'black',
        borderStyle: 'solid',
        fontSize: 20
    },
    areaNameImage: {
        height: '100%',
        width: '7%',
        backgroundColor: 'lightgray',
        borderLeftWidth: 1,
        borderLeftColor: 'black'
    },
    nameDocImage: {
        height: '100%',
        width: '9%',
        backgroundColor: 'lightgray',
        borderRightWidth: 1,
        borderRightColor: 'black'
    },
    nameInputField: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        
        borderLeftWidth: 1,
        borderLeftColor: 'black',
        
        borderRightWidth: 1,
        borderRightColor: 'black',

        width: "40%",
        backgroundColor: 'white',
        height: '100%',
        padding: 20,
        fontSize: 14
    },
    inspectors: {
        padding: 20,
        fontSize: 20,
    },
    inspectorBox: {
        borderLeftWidth: 1,
        borderLeftColor: 'black',
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center'
    },
    agenBoxRow: {
        flex:1, 
        // width: '100%',

        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    agentTextBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    agentNames: {
        // flex: 1,
        // height: '100%',
        // padding: 8,
        // width: '100%',
        fontSize: 16,
        lineHeight: 32,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})