import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, ScrollView, Modal} from 'react-native';
import DrawerButton from '../components/DrawerNavButton';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import User from '../Models/User';
import UserInput from './ModalView/UserAddInput';

let dataFake = new User("송치만", '부장', '여수', "010-1111-3455", 'chi@gmail.com')
let dataArraySample = [
    new User("송치만", '부장', '여수', "010-1111-3455", 'chi@gmail.com'),
    new User("송치만", '부장', '여수', "010-1111-3455", 'chi@gmail.com'),
    new User("송치만", '부장', '여수', "010-1111-3455", 'chi@gmail.com'),
    new User("송치만", '부장', '여수', "010-1111-3455", 'chi@gmail.com'),
    new User("송치만", '부장', '여수', "010-1111-3455", 'chi@gmail.com'),
    new User("송치만", '부장', '여수', "010-1111-3455", 'chi@gmail.com'),
    new User("송치만", '부장', '여수', "010-1111-3455", 'chi@gmail.com'),
    new User("송치만", '부장', '여수', "010-1111-3455", 'chi@gmail.com'),
    new User("송치만", '부장', '여수', "010-1111-3455", 'chi@gmail.com'),
    new User("송치만", '부장', '여수', "010-1111-3455", 'chi@gmail.com'),
    new User("송치만", '부장', '여수', "010-1111-3455", 'chi@gmail.com'),
    new User("송치만", '부장', '여수', "010-1111-3455", 'chi@gmail.com')
]

const UserListView = (props) => {
    const [data, setData] = useState(dataFake)
    const [dataArray, setDataArray] = useState(dataArraySample)
    const [isModalOn, setModal] = useState(false)
    const toggleDrawer = () => {
        props.toggleDrawer()
    }

    const addTapped=()=>{
        setModal(!isModalOn)
    }

    return <View style={[styles.container]}>
        <Modal 
            visible={isModalOn}
            animationType={'slide'}
            transparent={true}
            style={{backgroundColor: 'black'}}
        >
            <UserInput  close={()=>addTapped()}/>
        </Modal>
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
                {dataArray.map((i)=>{
                    let item = <View style={styles.userListWrapper}>
                            <View style={styles.userListView}><Text style={styles.userListText}>{i.name}</Text></View>
                            <View style={styles.userListView}><Text style={styles.userListText}>{i.title}</Text></View>
                            <View style={styles.userListView}><Text style={styles.userListText}>{i.department}</Text></View>
                            <View style={styles.userListView}><Text style={styles.userListText}>{i.phoneNumber}</Text></View>
                            <View style={styles.userListView}><Text style={styles.userListText}>{i.email}</Text></View>
                            <View style={[styles.userListView, {marginLeft: 'auto'}]}>
                                <TouchableOpacity>
                                    <Text style={styles.userListText}>수정</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.userListView}>
                                <TouchableOpacity>
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
        top: 6,
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