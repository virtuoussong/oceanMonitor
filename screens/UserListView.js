import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, ScrollView, Modal} from 'react-native';
import DrawerButton from '../components/DrawerNavButton';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import User from '../Models/User';
import UserInput from './ModalView/UserAddInput';
import AsyncStorage from '@react-native-community/async-storage';

import { insertNewUser, fetchUsers, deleteUser, updateUser } from '../Redux/database/db.js';

let dataArraySample = [
    new User("송치만", '차장', '여수', "010-1111-3455", 'chi@gmail.com'),
]

const UserListView = (props) => {
    const [data, setData] = useState()
    const [dataArray, setDataArray] = useState(dataArraySample)
    const [isModalOn, setModal] = useState(false)

    useEffect(()=>{
        loadData()
    }, [])

    const toggleDrawer = () => {
        props.toggleDrawer()
    }

    const addTapped=()=>{
        setModal(!isModalOn)
    }

    const loadData = async()=> {
        try {
            const dbResult = await fetchUsers();
            if (dbResult._array !== null) {
                setDataArray(dbResult.rows._array)
            }           
        } catch (error) {
            throw error;
        }
    }

    const save = async(i) => {
        try {
            if (data == null) {
                const dbRequest = await insertNewUser(i.name, i.title, i.department, i.email, i.phoneNumber).then(()=>{
                    loadData()
                });
            } else {
                console.log("update", i)
                await updateUser(data.id, i).then(()=>{
                    loadData()
                    setData(null)
                })
            }
           
        } catch (error) {
            throw Error(error)
        }
    }

    const deleteTapped = async(id)=> {
        try {
            const dbRequest = await deleteUser(id).then(()=>{
                uploadData()
            });
        } catch (error) {
            throw Error(error)
        }
    }

    const updateUserAction = async (id) => {
        let item = dataArray.find(i => i.id === id)
        setData(item)
    }
    useEffect(()=>{
        if (data) {
            setModal(true)
        }
    }, [data])

    return <View style={[styles.container]}>
        <Modal 
            visible={isModalOn}
            animationType={'slide'}
            transparent={true}
            style={{backgroundColor: 'black'}}
        >
            <UserInput  data={data} close={()=>addTapped()} save={(i)=>save(i)} />
        </Modal>
        <View style={{width: '100%', height: 20, backgroundColor: 'white'}}/>
        <View style={{width: '100%', flexDirection: 'row', height: 60, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{marginLeft: 'auto', paddingLeft: 80}}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>작성자 명부</Text>
            </View>
            <View style={{marginLeft: 'auto', marginRight: 30}}>
                <TouchableOpacity style={styles.addButton} onPress={()=>addTapped()}>
                        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>추가</Text>
                </TouchableOpacity>
            </View>
        </View>
        <ScrollView>
            <View style={styles.useListContainer}>
                {dataArray && dataArray.map((i)=>{
                    let item = <View style={styles.userListWrapper}>
                            <View style={styles.userListView}><Text style={styles.userListText}>{i.name}</Text></View>
                            <View style={styles.userListView}><Text style={styles.userListText}>{i.title}</Text></View>
                            <View style={styles.userListView}><Text style={styles.userListText}>{i.department}</Text></View>
                            <View style={styles.userListView}><Text style={styles.userListText}>{i.phoneNumber}</Text></View>
                            <View style={styles.userListView}><Text style={styles.userListText}>{i.email}</Text></View>
                            <View style={[styles.userListView, {marginLeft: 'auto'}]}>
                                <TouchableOpacity onPress={()=>updateUserAction(i.id)}>
                                    <Text style={styles.userListText}>수정</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.userListView}>
                                <TouchableOpacity onPress={()=>deleteTapped(i.id)}>
                                    <Text style={styles.userListText}>삭제</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    return item
                })}
            </View>
        </ScrollView>
        
        <DrawerButton 
            style={styles.draweButton}
            toggleDrawer={()=>toggleDrawer()}
        />
    </View>
}

export default UserListView;

const styles = StyleSheet.create({
    addButton: {
        backgroundColor:'dodgerblue', paddingHorizontal: 24, paddingVertical: 10,
        borderRadius: 15
    },
    useListContainer: {
        marginHorizontal: 30,
        marginTop: 30,
    },
    userListWrapper:{
        width: '100%', padding: 14, flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 30
    },
    userListText: {
        fontSize: 24
    },
    userListView: {
        padding: 16
    },
    draweButton: {
        position: 'absolute',
        top: 24,
        left: 10
    },
    topBar:{
        width: '100%', height: 60, justifyContent: 'center', alignItems:'center',
        backgroundColor: 'white'
    },
    container: {
        flex: 1
    }
})