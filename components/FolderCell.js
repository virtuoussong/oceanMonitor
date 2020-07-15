import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity, Animated, Image, Easing } from "react-native";

const FolderCell = (props) => {
    console.log("isDocShown", props.isDocShown)
    // useEffect(()=>{

    // }, [props])

    if (props.showIcon) {
        return (
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity 
                    style={styles.folderCell}
                    onPress={props.onPress}
                >
                    <Image 
                        style={styles.imageStyle}
                        source={require('../assets/folder.png')} resizeMode={'contain'}/>
                    <Text style={styles.titleTextStyle}>{props.folderName}</Text>
                </TouchableOpacity>

                {props.isDocShown ? <TouchableOpacity style={styles.folderCell} onPress={props.onDocTap}>
                    <Image style={styles.imageStyle} source={require('../assets/doc.png')} resizeMode={'contain'}/> 
                        <Text>{props.isDocShown}</Text>
                    </TouchableOpacity> 
                    : 
                    <TouchableOpacity style={styles.folderCell} onPress={props.onDocTap}>
                        <Image style={{width: 44, height: 44}} source={require('../assets/plusIcon.png')} resizeMode={'contain'}/> 
                        <Text>{props.isDocShown}</Text>
                    </TouchableOpacity> 
                }
            </View>
        )
    } else { return (
             <View style={{flexDirection:'row'}}>
                <TouchableOpacity 
                    style={styles.folderCell}
                    onPress={props.onPress}
                >
                    <Image 
                        style={styles.imageStyle}
                        source={require('../assets/folder.png')} resizeMode={'contain'}/>
                    <Text style={styles.titleTextStyle}>{props.folderName}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    

    
    
}

export default FolderCell;

const styles = StyleSheet.create({
    folderCell: {
        // flex: 1,
        width: (Dimensions.get('window').width/3)-0,
        height: (Dimensions.get('window').width/3)-40, 
        justifyContent: 'center',
        alignItems:'center'
    },
    imageStyle : {
        width: 130,
        height: 130
    },
    titleTextStyle: {
        textAlign: 'center'
    }
})
