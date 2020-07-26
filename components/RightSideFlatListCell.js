import React, { useState, useEffect } from "react";
import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    FlatList,
    View, 
    TextInput, TouchableOpacity, Animated, Image, Easing 
} from "react-native";

export default RightSideCell = (props) => {
    const docTapped = () => {
        console.log("show doc")
        props.docTapped()
    }

    if (props.showIcon) {

        return (
            <View style={{width: '100%', height: 50, flexDirection: 'row', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={props.onPress} >
                    <Text style={styles.title}>{props.name}</Text>
                </TouchableOpacity>
                
                {props.isDocShown ? <TouchableOpacity onPress={()=>docTapped()} style={{marginLeft: 'auto', marginTop: 10, marginRight: 8,width: 24, height: 24}}>
                    <Image  resizeMode={'contain'} style={{width: 24, height: 24}} source={require("../assets/doc.png")}/>
                </TouchableOpacity> 
                : 
                <TouchableOpacity onPress={()=>docTapped()} style={{marginLeft: 'auto', marginTop: 10, marginRight: 8,width: 24, height: 24}}>
                    <Image  resizeMode={'contain'} style={{width: 24, height: 24}} source={require("../assets/plusIcon.png")}/>
                </TouchableOpacity>}
            </View>
        )
    } else {
        return <View style={{width: '100%', height: 50, flexDirection: 'row', backgroundColor: 'white'}}>
            <TouchableOpacity onPress={props.onPress} >
                <Text style={styles.title}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    }

    
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },

    title: {
        fontSize: 24,
        color: 'black',
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8 
    }
});