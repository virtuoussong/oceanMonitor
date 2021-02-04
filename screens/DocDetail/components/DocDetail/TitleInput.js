import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Modal} from 'react-native';
import { TitleModel } from '../../../../Models/TitleModel';
import PickerView from '../PickerView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {fetchUsers} from '../../../../Redux/database/db'
let titleData = new TitleModel(null, null, null,null, null)

export default TitleInput = (props) => {

    const [data, setData] = useState(titleData)
    const [targetKey, setTargetKey] = useState(null)
    const [isPickerOn, setPickerView] = useState(false)
    const [dataForSelect, setDataForSelect] = useState(null)

    useEffect(()=>{
        if (props.data) {
            console.log("name received", props.data)
            setData(props.data)
        }
    }, [props.data])

    useEffect(()=>{
        props.refData.current = data
    }, [data])

    const pickName = async(targetKey) => {
        console.log("pick name")
        setTargetKey(targetKey)
        await fetchUsers().then((i)=>{
            let data = i.rows._array
            let namesArray = []
            data.forEach(element => {
                namesArray.push(element.name)
            });
            setDataForSelect(namesArray)
            toggleModal()
        })
    }

    const selectedData =(i)=>{

        console.log("name", i)
        setData({
            ...data,
            [targetKey] : i
        })

        toggleModal()
    }

    const toggleModal =()=> {
        setPickerView(!isPickerOn)
    }

    return <KeyboardAvoidingView style={styles.keyboardContainer} behavior="position" enabled   keyboardVerticalOffset={100}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={isPickerOn}
        >
            <PickerView data={dataForSelect} onSelect={(i)=>selectedData(i)} hide={()=>toggleModal()}/>
        </Modal>
        <View style={styles.firstRow}>
            <View style={[{flex: 1}, styles.headerYellow]}>
                <Text style={styles.areaName}>구역명</Text>
            </View>
            <View style={{flex: 4}}>
                <TextInput 
                    placeholder={"text"} 
                    style={styles.nameInputField}
                    value={data.name}
                    onChange={(i)=>setData({
                        ...data,
                        name: i.nativeEvent.text
                    })}
                />
            </View>
            <View style={[{flex: 1}, , styles.headerYellow]}>
                <Text style={styles.inspectors}>조사자</Text>
            </View>
            
            
            <View style={[{flex: 4}, styles.inspectorBox]}>
                <View style={[styles.agentBoxRow , {borderBottomWidth: 1, borderBottomColor: 'black'}]}>
                    <TouchableOpacity onPress={()=>pickName('agent1')} style={[styles.agentTextBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
                        <Text style={styles.agentNames}>{data.agent1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>pickName('agent2')} style={styles.agentTextBox}>
                        <Text style={styles.agentNames}>{data.agent2}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.agentBoxRow}>
                    <TouchableOpacity onPress={()=>pickName('agent3')} style={[styles.agentTextBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
                        <Text style={styles.agentNames}>{data.agent3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>pickName('agent4')} style={styles.agentTextBox}>
                        <Text style={styles.agentNames}>{data.agent4}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View> 
    </KeyboardAvoidingView>

}

const styles = StyleSheet.create({
    headerYellow: {
        backgroundColor: '#FFFFCC'
    },
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
        borderLeftWidth: 0,
        backgroundColor: 'white'
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
        borderBottomWidth: 0,
        borderBottomColor: 'black',
        
        borderLeftWidth: 1,
        borderLeftColor: 'black',
        
        borderRightWidth: 1,
        borderRightColor: 'black',

        width: "100%",
        backgroundColor: 'white',
        height: '100%',
        padding: 20,
        fontSize: 14,
        textAlign: 'center'
    },
    inspectors: {
        padding: 20,
        fontSize: 20,
    },
    inspectorBox: {
        borderLeftWidth: 1,
        borderLeftColor: 'black',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'white'
        
    },
    agentBoxRow: {
        flex:1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    agentTextBox: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: 200,
        height: 30
    },
    agentNames: {
        // flex: 1,
        // height: '100%',
        // padding: 8,
        // width: '100%',
        // width: '100%',
        // height: '100%',
        fontSize: 16,
        lineHeight: 32,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})