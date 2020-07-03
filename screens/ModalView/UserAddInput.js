import React, {useState, useEffect } from 'react';
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native';
import User from '../../Models/User'
import AsyncStorage from '@react-native-community/async-storage';

let dataFake = new User("", '', '', "", '')


const UserInputView = (props) => {

    const [data, setData] = useState(dataFake)

    useEffect(()=>{
        
    }, [data])

    useEffect(()=>{
        loadData()
    }, [])

    const loadData = () => {
        console.log("load data input", props.data)
        if (props.data) {
            setData(props.data)
        } else {

        }
    }

    const save = async() => {
        props.save(data)
        props.close()
    }




    return <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "rgba(0, 0, 1, 0.5)"}} onPress={props.close}>
        <View style={styles.modalBox}>
            <View style={{paddingHorizontal: 30, paddingVertical: 30}}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>신규 유저 입력</Text>
            </View>
            <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={[styles.inputView, {width: '50%'}]}>
                    <TextInput 
                        value={data.name}
                        placeholder={"이름"}
                        style={styles.inputField}
                        onChange={(i)=>setData({
                            ...data,
                            name: i.nativeEvent.text
                        })}
                    />
                </View>
                <View style={[styles.inputView, {width: '30%'}]}>
                    <TextInput
                        value={data.title}
                        placeholder={"직책"}
                        style={styles.inputField}
                        onChange={(i)=>setData({
                            ...data,
                            title: i.nativeEvent.text
                        })}
                    />
                </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginTop: 32}}>
                <View style={[styles.inputView, {width: '50%'}]}>
                    <TextInput 
                        value={data.phoneNumber}
                        placeholder={"전화번호"}
                        style={styles.inputField}
                        onChange={(i)=>setData({
                            ...data,
                            phoneNumber: i.nativeEvent.text
                        })}
                    />
                </View>
                <View style={[styles.inputView, {width: '30%'}]}>
                    <TextInput
                        value={data.department}
                        placeholder={"부서"}
                        style={styles.inputField}
                        onChange={(i)=>setData({
                            ...data,
                            department: i.nativeEvent.text
                        })}
                    />
                </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginTop: 32}}>
                <View style={[styles.inputView, {width: '50%'}]}>
                    <TextInput 
                        value={data.email}
                        placeholder={"이메일"}
                        style={styles.inputField}
                        onChange={(i)=>setData({
                            ...data,
                            email: i.nativeEvent.text
                        })}
                    />
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity 
                    style={[styles.saveButton, {marginRight: 60, backgroundColor: '#95989A'}]}
                    onPress={props.close}
                >
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>취소</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={()=>save()}
                    style={styles.saveButton}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>저장</Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
        
};

export default UserInputView;

const styles = StyleSheet.create({
    saveButton: {
        padding: 15, backgroundColor: 'dodgerblue', 
        width: 100, marginLeft: 'auto', 
        marginRight: 'auto', marginTop: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },

    
   
    inputView: {
        marginLeft: 24,
        backgroundColor: 'white', height: 50, justifyContent: 'center', padding: 8,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    inputField : {
        fontSize: 22
    },

    modalBox: {
        backgroundColor: 'white',
        width: '70%', 
        alignItems: 'center',
        paddingBottom: 30,
        paddingHorizontal: 30,
        borderRadius: 24
    }
})

