import React from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import DrawerButton from '../../components/DrawerNavButton';

import FirstDoc from '../DocDetail/components/DocDetail/firstDoc';
import SecondtDoc from '../DocDetail/components/DocDetail/secondDoc';
import ThirdDoc from '../DocDetail/components/DocDetail/thirdDoc';
import FourthDoc from '../DocDetail/components/DocDetail/fourthDoc';


export default DocumentDetailView = (props) => {
    const toggleDrawer = () => {
        props.toggleDrawer()
    }

    return <View style={styles.container}>
            <ScrollView style={styles.scrollView}
                contentContainerStyle={{
                    width:Dimensions.get('window').width * 4,
                }}
                horizontal={true}
                snapToAlignment={"center"}
                pagingEnabled={true}
                
            >
                <FirstDoc/>
                <SecondtDoc/>
                <ThirdDoc/>
                <FourthDoc/>
                {/* <FifthDoc/>
                <SixthDoc/> */}
            </ScrollView>

        {/* <DrawerButton toggleDrawer={toggleDrawer}/> */}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    scrollView : {
        // flex: 1,
        width:Dimensions.get('window').width,
        // height:Dimensions.get('window').height,
        backgroundColor: 'white',
        marginHorizontal: 20,
        // width: 2000,
        // height: 2000
    },
    
})