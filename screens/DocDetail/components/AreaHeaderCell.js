import React from 'react';
import {StyleSheet, View, Image,Text, TouchableOpacity, TextInput} from 'react-native';

const HeaderCell = (props) => {
    return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.folderCell}
            onPress={props.onPress}
        >
            <Image 
                style={styles.imageStyle}
                source={require('../../../assets/doc.png')} resizeMode={'contain'}/>
            <Text style={styles.titleTextStyle}>지역 상세 문서</Text>
        </TouchableOpacity>   
    </View>
    )
} 

export default HeaderCell;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 180,
        justifyContent: 'center',
        alignItems:'center',
    },
    folderCell: {
        width: 140,
    },
    imageStyle : {
        marginTop: 48,
        width: 130,
        height: 100
    },
    titleTextStyle: {
        marginTop: 16,
        textAlign: 'center',
        fontSize: 16
    }
})
