import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DrawerButton from '../../components/DrawerNavButton';
import { useNavigation } from '@react-navigation/native'
import BasicInfoDoc from '../DocDetail/components/DocDetail/BasicInfoDoc';
import FirstDoc from '../DocDetail/components/DocDetail/firstDoc';
import SecondtDoc from '../DocDetail/components/DocDetail/secondDoc';
import ThirdDoc from '../DocDetail/components/DocDetail/thirdDoc';
import FourthDoc from '../DocDetail/components/DocDetail/fourthDoc';

import { insertDocID4 } from '../../Redux/database/area4DB';
import { insertDocID } from '../../Redux/database/area3DB';
import { getLocationDoc, newLocationDoc, updateLocationDoc } from '../../Redux/database/locationDoc';

import { useDispatch } from "react-redux";
import * as areaAction3 from '../../Redux/actions/area3';
import * as areaAction4 from '../../Redux/actions/area4';

import {DocDetailModel} from '../../Models/DocDetailModel'
import TitleInputView from '../DocDetail/components/DocDetail/TitleInput';

import ViewShot, {captureRef} from 'react-native-view-shot' 
import * as MailComposer from 'expo-mail-composer';
import RNImageToPdf from 'react-native-image-to-pdf';

import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Asset } from "expo-asset";
import * as ImageManipulator from 'expo-image-manipulator';

let emptyDetailData = new DocDetailModel(null, null, null, null, null, null)
export default DocumentDetailView = (props) => {
    
    const [data, setData] = useState(emptyDetailData)

    const nav = useNavigation()
    useEffect(()=>{
        
        if (props.docID != null) {
            loadData(props.docID)
            return
        }

        if (props.route != undefined) {
            console.log("id", props.route.params.docID)
            if (props.route.params.docID != undefined || props.route.params.docID != null) {
                loadData(props.route.params.docID)
            }
            
            nav.setOptions({
                headerRight: () => <TouchableOpacity 
                        style={{marginRight: 16}} 
                        onPress={()=>saveDocFromNav()}>
                        <Text style={{fontSize: 20}}>저장</Text>
                    </TouchableOpacity>
            })
        }
       
        
    }, [])

    useEffect(()=>{
       
    }, [data])

    let dispatch = useDispatch();

    const loadData = async(id)=>{
        await getLocationDoc(id).then((i)=>{
            let fetchedData = i.rows._array[0]
            let parsedData = JSON.parse(fetchedData.data)
            setData(parsedData)
        })
    }

    const saveDocFromNav = async() => {
        let newData = new DocDetailModel(
            titleRef.current,
            firstDocRef.current,
            secondDocRef.current,
            thirdDocRef.current,
            fourthDocRef.current,
            fifthDocRef.current,
            sixthDocRef.current
        )

        let parsedData = JSON.stringify(newData)


        if (props.route.params.docID != null) {
            //update
            
            let docID = props.route.params.docID
            await updateLocationDoc(parsedData, docID).then(()=>{
                props.navigation.goBack(null)
            })
        } else {
            //insert
            
            await newLocationDoc(parsedData).then((i)=>{
                if (props.route.params.area == 3) {
                    insertDocID(i.insertId, props.route.params.id).then(()=>{
                        props.navigation.goBack(null)
                    })
                } else {
                    insertDocID4(i.insertId, props.route.params.id).then(()=>{
                        props.navigation.goBack(null)
                    })
                }
            })
        }
    }

    const saveDoc = async() => {
        let newData = new DocDetailModel(
            titleRef.current,
            firstDocRef.current,
            secondDocRef.current,
            thirdDocRef.current,
            fourthDocRef.current,
            fifthDocRef.current,
            sixthDocRef.current
        )

        let parsedData = JSON.stringify(newData)

        // console.log("pased detail", parsedData)

        if (props.docID != null) {
            //update
           
            await updateLocationDoc(parsedData, props.docID).then(()=>{
                props.close()
            })
        } else {
            //insert
            
            await newLocationDoc(parsedData).then((i)=>{
                if (props.area == 3) {
                    insertDocID(i.insertId, props.id).then(()=>{
                        props.close()
                        props.reload()
                    })
                } else {
                    insertDocID4(i.insertId, props.id).then(()=>{
                        props.close()
                        props.reload()
                    })
                }
                
            })
        }
    }


    let titleRef = React.useRef(null)
    let firstDocRef = React.useRef(null)
    let secondDocRef = React.useRef(null)
    let thirdDocRef = React.useRef(null)
    let fourthDocRef = React.useRef(null)
    let fifthDocRef = React.useRef(null)
    let sixthDocRef = React.useRef(null)

    const exportPDF = async() => {
        console.log("pdf")
        let uri = await viewShotRef.current.capture()
        let uri2 = await viewShotRef2.current.capture()
        let uri3 = await viewShotRef3.current.capture()
        let uri4 = await viewShotRef4.current.capture()
        let uri5 = await viewShotRef5.current.capture()
        let uri6 = await viewShotRef6.current.capture()

        // let uri2 = await captureRef(secondDocRef.current, {
        //     format: "jpg",
        //     quality: 1
        //   })

        console.log(uri2)
        let newUri = `file://${uri}`
        let newUri2 = `file://${uri2}`
        let newUri3 = `file://${uri3}`
        let newUri4 = `file://${uri4}`
        let newUri5 = `file://${uri5}`
        let newUri6 = `file://${uri6}`
        // myAsyncPDFFunction([newUri, newUri2, newUri3, newUri4, newUri5, newUri6])
        // myAsyncPDFFunction([uri, uri2, uri3, uri4, uri5, uri6])
       
        // console.log("html image path", i[0])
        const img1 = await htmlContent(newUri)
        const img2 = await htmlContent(newUri2)
        const img3 = await htmlContent(newUri3)
        const img4 = await htmlContent(newUri4)
        const img5 = await htmlContent(newUri5)
        const img6 = await htmlContent(newUri6)

        myAsyncPDFFunction([img1, img2, img3, img4, img5, img6])

        // myAsyncPDFFunction(html)

        // openEmail([newUri, newUri2, newUri3, newUri4, newUri5, newUri6])
    }

    const copyFromAssets = async (asset) => {
        try {
          await Asset.loadAsync(asset);
          const { localUri } = Asset.fromModule(asset);
          return localUri;
        } catch (error) {
          console.log(error);
          throw error;
        }
      };

      const processLocalImageIOS = async (imageUri) => {
        try {
          const uriParts = imageUri.split(".");
          const formatPart = uriParts[uriParts.length - 1];
          let format;
          if (formatPart.includes("png")) {
            format = "png";
          } else if (formatPart.includes("jpg") || formatPart.includes("jpeg")) {
            format = "jpeg";
          }
          const { base64 } = await ImageManipulator.manipulateAsync(
            imageUri,
            [],
            { format: format || "png", base64: true }
          );
          return `data:image/${format};base64,${base64}`;
        } catch (error) {
          console.log(error);
          throw error
        }
      };

      const htmlContent = async (i) => {
        try {
            let src = await copyFromAssets(i);
            if(Platform.OS === 'ios') {
                src = await processLocalImageIOS(src);
            }
            return src
        } catch (error) {
            console.log(error);
        }
    }

    const myAsyncPDFFunction = async (i) => {

        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Pdf Content</title>
                <style>
                    body {
                        font-size: 16px;
                        color: rgb(255, 196, 0);
                        float: none !important;
                    }
                    h1 {
                        text-align: center;
                    }

                    div {
                        width: ${Dimensions.get('screen').width};
                        height: ${Dimensions.get('screen').height};
                        
                       
                    }

                    .print:last-child {
                        page-break-after: auto;
                   }

                    .fit {
                        display: block;
                        max-width: 100%;
                        max-height: 100%;
                        width: auto;
                        height: auto;
                    }
                </style>
            </head>
            <body>
                <div class="print"><img class=fit src=${i[0]}></div>
                <p style="page-break-after: always;">&nbsp;</p>

                <div class="print"><img class="fit" src=${i[1]}></div>
                <p style="page-break-after: always;">&nbsp;</p>
                
                <p style="page-break-before: always;">&nbsp;</p>
                <div class="print"><img class="fit" src=${i[2]}></div>
                <p style="page-break-after: always;">&nbsp;</p>
                
                <p style="page-break-before: always;">&nbsp;</p>
                <div class="print"><img class="fit" src=${i[3]}></div>
                <p style="page-break-after: always;">&nbsp;</p>

                <p style="page-break-before: always;">&nbsp;</p>
                <div class="print"><img class="fit" src=${i[4]}></div>
                <p style="page-break-after: always;">&nbsp;</p>

                <p style="page-break-before: always;">&nbsp;</p>
                <div class="print"><img class="fit" src=${i[5]}></div>
                

                <div class="print"><img class="fit" src=${i[6]}></div>
            </body>
            </html>
        `;

        
        try {
            const { uri } = await Print.printToFileAsync({ 
                html: htmlContent,
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height-50, 
            });
            await Sharing.shareAsync(uri);
            // openEmail([`file://${uri}`])
        } catch (err) {
            console.error(err);
        }

    }

    const openEmail = (i) => {
        MailComposer.composeAsync({
            attachments: i
        })
    }

    let viewShotRef = React.useRef()
    let viewShotRef2 = React.useRef()
    let viewShotRef3 = React.useRef()
    let viewShotRef4 = React.useRef()
    let viewShotRef5 = React.useRef()
    let viewShotRef6 = React.useRef()

    return <View style={styles.container}>

            {props.isBarShown && <View style={{width: '100%', height: 55, flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 'auto', marginTop: 24, marginLeft: 20}} onPress={()=>props.close()}>
                    <Text style={{fontSize: 20}}>취소</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft: 'auto', marginTop: 24, marginLeft: 'auto', marginRight: 20}} onPress={()=>exportPDF()}>
                    {props.docID && <Text style={{fontSize: 20}}>PDF 출력</Text>}
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft: 20, marginTop: 24, marginRight: 20}} onPress={()=>saveDoc()}>
                    {props.docID ? <Text style={{fontSize: 20}}>수정</Text> : <Text style={{fontSize: 20}}>저장</Text>}
                </TouchableOpacity>
            </View>}

            <ViewShot ref={viewShotRef} style={{flex: 1}} options={{format: 'jpg', quality: 1}}>

                <TitleInputView refData={titleRef} data={data.title}/>

                <KeyboardAwareScrollView 
                    style={{ flex: 1}} 
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
                    extraScrollHeight={70}
                    keyboardShouldPersistTaps={'always'} 
                    // style={styles.keyboardAwareView}
                    // behavior={'padding'} keyboardVerticalOffset={40} 
                    // style={[styles.scrollView]}
                >
                    <ScrollView 
                        style={[styles.scrollView, {backgroundColor: 'white'}]}
                        contentContainerStyle={{
                            width:Dimensions.get('window').width * 6,
                        }}
                        horizontal={true}
                        snapToAlignment={"center"}
                        pagingEnabled={true}
                    >
                        <BasicInfoDoc  refData={firstDocRef} data={data.first} isBarShown={props.isBarShown}/>

                        <ViewShot ref={viewShotRef2} style={{flex:1}}>
                            <FirstDoc refData={secondDocRef} data={data.second} />
                        </ViewShot>

                        <ViewShot ref={viewShotRef3} style={{flex:1}}>
                            <SecondtDoc refData={thirdDocRef} data={data.third} />
                        </ViewShot>

                        <ViewShot ref={viewShotRef4} style={{flex:1}}>
                            <SecondtDoc refData={fourthDocRef} data={data.forth} isLower={true}/>
                        </ViewShot>

                        <ViewShot ref={viewShotRef5} style={{flex:1}}>
                            <ThirdDoc refData={fifthDocRef} data={data.fifth} />
                        </ViewShot>

                        <ViewShot ref={viewShotRef6} style={{flex:1}}>
                            <FourthDoc refData={sixthDocRef} data={data.sixth} />
                        </ViewShot>
                        
                    </ScrollView>
                </KeyboardAwareScrollView>

            </ViewShot>

            
            
    </View>
}

// DocumentDetailView.navigationOptions = (navData, props) => {
//     const areaTitle = navData.route.params.parentName;
//     const dispatch = useDispatch();

//     const save = () => {
        
//     }

//     return {
//         headerTitle: areaTitle,
//         headerRight: () => (<Button title={"저장"} onPress={()=>save()}/>),
//         headerBackTitle: "hi",
//         headerBackTitleVisible: false
//     }
// }

const styles = StyleSheet.create({
    // keyboardAwareView: {
    //     flex: 1,
    //     width: Dimensions.get('window').width + 40,
    //     height: Dimensions.get('window').height
    // },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: 'white',
    },
    scrollView : {
        // flex: 1,
        width:Dimensions.get('window').width,
        // height:Dimensions.get('window').height - 120,
        backgroundColor: 'white',
        marginHorizontal: 0,
        // width: 2000,
        // height: 2000
    },
    
})