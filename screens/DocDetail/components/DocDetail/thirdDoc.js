import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import TitleInputView from './TitleInput';
import CheckBox from 'react-native-check-box';
// import CheckBox from '../../../../components/CheckBox';
import {FourthPage, Access, Storage, Environment, Agent, Tool, Trash} from '../../../../Models/FourthPage';

let fourthDummyData = new FourthPage(
    new Access(
        true,
        true, 
        true,
        true,
        false,
        true,
        "추가 테스트2",
        false,
        "추가 테스트2",
        true,
        "추가 테스트3",
        false,
        "추가테스트4",
        true
    ),
    new Storage(
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        "2추가테스트",
        true,
        "2추가테스트2",
        true
    ),
    new Trash(
        true,
        true,
        true,
        true,
        true,
        true,
        "3테스트1",
        true,
        "3테스트2",
        false,
        "3테스트3",
        true,
        "3테스트4",
        false
    ),
    new Environment(
        true,
        true,
        true,
        true,
        true,
        "test",
        true,
        "test",
        false,
        "test3",
        true,
        "test4",
        false,
        "test5",
        true
    ),
    new Agent(
        "2020-6-1",
        "10",
        "1",
        "2",
        "3",
        "4",
        "5",
        '6',
        '7',
        '8',
        "a",
        "1",
        "b",
        "3",
        "t",
        "3",
        "v",
        "3",
        "4",
        "5",
        "5",
        "5"
    ),
    new Tool(
        "1",
        "3",
        "4",
        "5",
        '6',
        '5',
        '8',
        '8',
        '5',
        '6',
        '5',
        '9',
        '5',
        '6',
        '3',
        '10',
        '22',
        '43',
        '21',
        '32',
        '321',
        '564',
        '345',
        '34',
        '바구니',
        "21",
        "삽",
        "200"
    )
)

export default ThirdDoc = (props) => {
    const [data, setData] = useState(fourthDummyData)

    useEffect(()=>{

    }, [data])

    const updateData = (section, field, i) => {
        console.log(section, field, i)
        setData({
            ...data,
            [section]: {
                ...data[section],
                [field]: i
            }
        })
    }
 
    return (
    <View style={s.container}>
        <TitleInputView/>

        <View style={[s.secondSection, s.borderBottom]}>
            {/* 접근 여건 */}
            <View style={[s.secondSectionColumns, s.borderRight]}>
                <View style={[s.seconSectionTitle, s.borderBottom]}><Text style={s.sectionTitleText}>접근여건</Text></View>
                <View style={[s.borderBottom, {flex:3.065, flexDirection: 'row'}]}>
                    <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                        <Text>{"육\n상"}</Text>
                    </View>
                    <View style={[{flex: 8}]}>
                        <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                            <Text style={s.yesnoTextBox}>소형차진입가능</Text>
                            <CheckBox 
                                style={[s.checkBox, s.yesBox]}
                                leftText={"yes"} 
                                leftTextStyle={s.checkBoxText}
                                isChecked={data.access.smallCar} 
                                onClick={()=>updateData("access", "smallCar", true)}
                            />
                            <CheckBox 
                                style={[s.checkBox, s.noBox]} 
                                leftText={"no"} 
                                leftTextStyle={s.checkBoxText}
                                isChecked={!data.access.smallCar}
                                onClick={()=>updateData("access", "smallCar", false)}
                            />
                        </View>

                        <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                            <Text style={s.yesnoTextBox}>중대형차진입가능</Text>
                            <CheckBox 
                                 style={[s.checkBox, s.yesBox]}
                                 leftText={"yes"} 
                                 leftTextStyle={s.checkBoxText}
                                isChecked={data.access.middleCar}
                                onClick={()=>updateData("access", "middleCar", true)}
                            />
                            <CheckBox 
                                 style={[s.checkBox, s.noBox]} 
                                 leftText={"no"} 
                                 leftTextStyle={s.checkBoxText}
                                isChecked={!data.access.middleCar}
                                onClick={()=>updateData("access", "middleCar", false)}
                            />
                        </View>
                        <View style={[s.textWithCheckBoxContainer]}>
                            <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>중장비차진입가능</Text>
                            <CheckBox 
                                style={[s.checkBox, s.yesBox]}
                                leftTextStyle={s.checkBoxText}
                                leftText={"yes"} 
                                isChecked={data.access.bigCar}
                                onClick={()=>updateData("access", "bigCar", true)}
                            />
                            <CheckBox 
                                 style={[s.checkBox, s.noBox]} 
                                 leftTextStyle={s.checkBoxText}
                                 leftText={"no"} 
                                isChecked={!data.access.bigCar}
                                onClick={()=>updateData("access", "bigCar", false)}
                            />
                        </View>
                    </View>
                </View>

                <View style={[s.borderBottom, {flex:3.065, flexDirection: 'row'}]}>
                    <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                        <Text>{"해\n상"}</Text>
                    </View> 
                    <View style={[{flex: 8}]}>
                        <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                            <Text style={s.yesnoTextBox}>간조시육상진입가능</Text>
                            <CheckBox 
                                style={[s.checkBox, s.yesBox]}
                                leftTextStyle={s.checkBoxText}
                                leftText={"yes"} 
                                isChecked={data.access.smallShip}
                                onClick={()=>updateData("access", "smallShip", true)}
                            />
                            <CheckBox 
                                style={[s.checkBox, s.noBox]} 
                                leftTextStyle={s.checkBoxText}
                                leftText={"no"} 
                               isChecked={!data.access.smallShip}
                               onClick={()=>updateData("access", "smallShip", false)}
                            />
                        </View>
                        <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                            <Text style={s.yesnoTextBox}>작업선접근가능</Text>
                            <CheckBox 
                                style={[s.checkBox, s.yesBox]}
                                leftTextStyle={s.checkBoxText}
                                leftText={"yes"} 
                                isChecked={data.access.middleShip}
                                onClick={()=>updateData("access", "middleShip", true)}
                            />
                            <CheckBox 
                                style={[s.checkBox, s.noBox]} 
                                leftTextStyle={s.checkBoxText}
                                leftText={"no"} 
                                isChecked={!data.access.middleShip}
                                onClick={()=>updateData("access", "middleShip", false)}
                            />
                        </View>
                        <View style={[s.textWithCheckBoxContainer]}>
                            <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>방제접근가능</Text>
                            <CheckBox 
                                style={[s.checkBox, s.yesBox]}
                                leftTextStyle={s.checkBoxText}
                                leftText={"yes"} 
                                isChecked={data.access.bigShip}
                                onClick={()=>updateData("access", "bigShip", true)}
                            />
                            <CheckBox 
                                style={[s.checkBox, s.noBox]} 
                                leftTextStyle={s.checkBoxText}
                                leftText={"no"} 
                                isChecked={!data.access.bigShip}
                                onClick={()=>updateData("access", "bigShip", false)}
                            />
                        </View>
                    </View>
                </View>
                <View style={[s.borderBottom, {flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.access.field1} 
                        onChange={(i)=>updateData("access", "field1", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.access.field1Val}
                        onClick={()=>updateData("access", "field1Val", !data.access.field1Val)}
                    />
                </View>
                <View style={[s.borderBottom, {flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.access.field2} 
                        onChange={(i)=>updateData("access", "field2", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.access.field2Val}
                        onClick={()=>updateData("access", "field2Val", !data.access.field2Val)}
                    />
                </View>
                <View style={[s.borderBottom, {flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.access.field3} 
                        onChange={(i)=>updateData("access", "field3", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.access.field3Val}
                        onClick={()=>updateData("access", "field3Val", !data.access.field3Val)}
                    />
                </View>
                <View style={[{flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.access.field4} 
                        onChange={(i)=>updateData("access", "field4", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.access.field4Val}
                        onClick={()=>updateData("access", "field4Val", !data.access.field4Val)}
                    />
                </View>
            </View>
            {/* 방제기자제 수령 및 고봔 여건 */}
            <View style={[s.secondSectionColumns, s.borderRight]}>
                <View style={[s.seconSectionTitle, s.borderBottom]}><Text >방제기자재 수령 및 보관 여건</Text></View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>공터 활용 가능</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.storage.openSpace} 
                        onClick={()=>updateData("storage", "openSpace", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.storage.openSpace}
                        onClick={()=>updateData("storage", "openSpace", false)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>공터 100m 이내</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.storage.openHundredMeter} 
                        onClick={()=>updateData("storage", "openHundredMeter", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.storage.openHundredMeter}
                        onClick={()=>updateData("storage", "openHundredMeter", false)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>방제기자재 보관시설 존재</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.storage.storageAvailable} 
                        onClick={()=>updateData("storage", "storageAvailable", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.storage.storageAvailable}
                        onClick={()=>updateData("storage", "storageAvailable", false)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>보관시설 100m 이내</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.storage.storageHundredMeter} 
                        onClick={()=>updateData("storage", "storageHundredMeter", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.storage.storageHundredMeter}
                        onClick={()=>updateData("storage", "storageHundredMeter", false)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>선회기 활용 방제기자제 수령하나 보관을 불가</Text>
                    <CheckBox 
                        style={{width: 24}}
                        isChecked={data.storage.outBoardRecieve}
                        onClick={()=>updateData("storage", "outBoardRecieve", !data.storage.outBoardRecieve)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>선착장 근처 방제기자재 보관 가능</Text>
                    <CheckBox 
                        style={{width: 24}}
                        isChecked={data.storage.marinaReceive}
                        onClick={()=>updateData("storage", "marinaReceive", !data.storage.marinaReceive)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>마을회관내 창고 활용 가능</Text>
                    <CheckBox 
                        style={{width: 24}}
                        isChecked={data.storage.townHouseStorage}
                        onClick={()=>updateData("storage", "townHouseStorage", !data.storage.townHouseStorage)}
                    />
                </View>
                <View style={[s.borderBottom, {flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.storage.field1} 
                        onChange={(i)=>updateData("storage", "field1", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.storage.field1Val}
                        onClick={()=>updateData("storage", "field1Val", !data.storage.field1Val)}
                    />
                </View>
                <View style={[s.borderBottom, {flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.storage.field2} 
                        onChange={(i)=>updateData("storage", "field2", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.storage.field2Val}
                        onClick={()=>updateData("storage", "field2Val", !data.storage.field2Val)}
                    />
                </View>
                <View style={[{flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.storage.field3} 
                        onChange={(i)=>updateData("storage", "field3", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.storage.field3Val}
                        onClick={()=>updateData("storage", "field3Val", !data.storage.field3Val)}
                    />
                </View>
            </View>
            {/* 페기물 보관 및 반출 여건 */}
            <View style={[s.secondSectionColumns, s.borderRight]}>
                <View style={[s.seconSectionTitle, s.borderBottom]}><Text >페기물 보관 및 반출 여건</Text></View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>활용가능공터존재</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.trash.openSpace} 
                        onClick={()=>updateData("trash", "openSpace", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.trash.openSpace}
                        onClick={()=>updateData("trash", "openSpace", false)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>공터 100m 이내</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.trash.openHundredMeter} 
                        onClick={()=>updateData("trash", "openHundredMeter", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.trash.openHundredMeter}
                        onClick={()=>updateData("trash", "openHundredMeter", false)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>폐기물보관시설존재</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.trash.storageAvailable} 
                        onClick={()=>updateData("trash", "storageAvailable", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.trash.storageAvailable}
                        onClick={()=>updateData("trash", "storageAvailable", false)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>보관시설(100m 이내)존재</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.trash.storageHundredMeter} 
                        onClick={()=>updateData("trash", "storageHundredMeter", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.trash.storageHundredMeter}
                        onClick={()=>updateData("trash", "storageHundredMeter", false)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>선회기활용기자재반출가능</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.trash.outBoardRecieve} 
                        onClick={()=>updateData("trash", "outBoardRecieve", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.trash.outBoardRecieve}
                        onClick={()=>updateData("trash", "outBoardRecieve", false)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>차량활용폐기물반출기능</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.trash.carReceive} 
                        onClick={()=>updateData("trash", "carReceive", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.trash.carReceive}
                        onClick={()=>updateData("trash", "carReceive", false)}
                    />
                </View>
                <View style={[s.borderBottom, {flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.trash.field1} 
                        onChange={(i)=>updateData("trash", "field1", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.trash.field1Val}
                        onClick={()=>updateData("trash", "field1Val", !data.trash.field1Val)}
                    />
                </View>
                <View style={[s.borderBottom, {flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.trash.field2} 
                        onChange={(i)=>updateData("trash", "field2", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.trash.field2Val}
                        onClick={()=>updateData("trash", "field2Val", !data.trash.field2Val)}
                    />
                </View>
                <View style={[s.borderBottom, {flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.trash.field3} 
                        onChange={(i)=>updateData("trash", "field3", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.trash.field3Val}
                        onClick={()=>updateData("trash", "field3Val", !data.trash.field3Val)}
                    />
                </View>
                <View style={[{flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.trash.field4} 
                        onChange={(i)=>updateData("trash", "field4", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.trash.field4Val}
                        onClick={()=>updateData("trash", "field4Val", !data.trash.field4Val)}
                    />
                </View>
            </View>
            {/* 해양 환경 민간 개소 */}
            <View style={[s.secondSectionColumns]}>
                <View style={[s.seconSectionTitle, s.borderBottom]}><Text >해양 환경 민감개소</Text></View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>농수로인접</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.environment.nearFarm} 
                        onClick={()=>updateData("environment", "nearFarm", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.environment.nearFarm}
                        onClick={()=>updateData("environment", "nearFarm", false)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>양식장산재</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.environment.nearFishFarm} 
                        onClick={()=>updateData("environment", "nearFishFarm", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.environment.nearFishFarm}
                        onClick={()=>updateData("environment", "nearFishFarm", false)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>민가매우인접</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.environment.nearHouse} 
                        onClick={()=>updateData("environment", "nearHouse", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.environment.nearHouse}
                        onClick={()=>updateData("environment", "nearHouse", false)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>취수구인접</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.environment.nearIntake} 
                        onClick={()=>updateData("environment", "nearIntake", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.environment.nearIntake}
                        onClick={()=>updateData("environment", "nearIntake", false)}
                    />
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>해양보호구역인접</Text>
                    <CheckBox 
                        style={[s.checkBox, s.yesBox]}
                        leftText={"yes"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={data.environment.nearProtective} 
                        onClick={()=>updateData("environment", "nearProtective", true)}
                    />
                    <CheckBox 
                        style={[s.checkBox, s.noBox]} 
                        leftText={"no"} 
                        leftTextStyle={s.checkBoxText}
                        isChecked={!data.environment.nearProtective}
                        onClick={()=>updateData("environment", "nearProtective", false)}
                    />
                </View>
                <View style={[s.borderBottom, {flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.environment.field1} 
                        onChange={(i)=>updateData("environment", "field1", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.environment.field1Val}
                        onClick={()=>updateData("environment", "field1Val", !data.environment.field1Val)}
                    />
                </View>
                <View style={[s.borderBottom, {flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.environment.field2} 
                        onChange={(i)=>updateData("environment", "field2", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.environment.field2Val}
                        onClick={()=>updateData("environment", "field2Val", !data.environment.field2Val)}
                    />
                </View>
                <View style={[s.borderBottom, {flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.environment.field3} 
                        onChange={(i)=>updateData("environment", "field3", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.environment.field3Val}
                        onClick={()=>updateData("environment", "field3Val", !data.environment.field3Val)}
                    />
                </View>
                <View style={[s.borderBottom, {flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.environment.field4} 
                        onChange={(i)=>updateData("environment", "field4", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.environment.field4Val}
                        onClick={()=>updateData("environment", "field4Val", !data.environment.field4Val)}
                    />
                </View>
                <View style={[{flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}]}>
                    <TextInput 
                        style={{flex: 1, padding: 4}}
                        value={data.environment.field5} 
                        onChange={(i)=>updateData("environment", "field5", i.nativeEvent.text)}
                    />
                    <CheckBox 
                        style={{width: 24}} 
                        isChecked={data.environment.field5Val}
                        onClick={()=>updateData("environment", "field5Val", !data.environment.field5Val)}
                    />
                </View>
            </View>

        </View>

        <View style={[s.thirdSection]}>
            <View style={[s.bottomSection, s.borderBottom]}>
                <View style={[s.s3s1, s.borderRight]}>
                    <View 
                        style={[{flex: 2, 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            width: '100%'}, 
                            s.borderBottom, ]}>
                                <Text>작업 일자</Text>
                    </View>
                    <TextInput 
                        style={{flex:1, width: '100%', textAlign: 'center'}} 
                        placeholder={"날짜"} 
                        value={data.agent.date} 
                        onChange={(i)=>updateData("agent", "date", i.nativeEvent.text)}
                    />
                </View>
                <View style={[s.s3s1, s.borderRight]}>
                    <View 
                        style={[{flex: 2, 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            width: '100%'}, 
                            s.borderBottom, ]}>
                                <Text>작업 누계</Text>
                    </View>
                    <TextInput 
                        style={{flex:1, width: '100%', textAlign: 'center'}} 
                        placeholder={""}
                        value={data.agent.total} 
                        onChange={(i)=>updateData("agent", "total", i.nativeEvent.text)}
                    />
                </View>
                <View style={[s.s3s1, s.borderRight]}>
                    <View 
                        style={[{flex: 2, 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            width: '100%'}, 
                            s.borderBottom, ]}>
                                <Text>작업 시간</Text>
                    </View>
                    <TextInput 
                        style={{flex:1, width: '100%', textAlign: 'center'}} 
                        placeholder={""}
                        value={data.agent.hour} 
                        onChange={(i)=>updateData("agent", "hour", i.nativeEvent.text)}
                    />
                </View>
                <View style={[s.s3s1, s.borderRight]}>
                    <View 
                        style={[{flex: 2, 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            width: '100%'}, 
                            s.borderBottom, ]}>
                                <Text>감독자</Text>
                    </View>
                    <TextInput 
                        style={{flex:1, width: '100%', textAlign: 'center'}} 
                        placeholder={""}
                        value={data.agent.superVisor} 
                        onChange={(i)=>updateData("agent", "superVisor", i.nativeEvent.text)}
                    />
                </View>
                <View style={[s.s3s1, s.borderRight]}>
                    <View 
                        style={[{flex: 2, 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            width: '100%'}, 
                            s.borderBottom, ]}>
                                <Text>진도율</Text>
                    </View>
                    <TextInput 
                        style={{flex:1, width: '100%', textAlign: 'center'}} 
                        placeholder={""}
                        value={data.agent.progress} 
                        onChange={(i)=>updateData("agent", "progress", i.nativeEvent.text)}
                    />
                </View>
                <View style={[{flex: 6}, s.borderRight]}>
                    <View style={[{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}, s.borderBottom]}>
                        <Text>동원 인력</Text>
                    </View>
                    <View style={[{flex: 2, flexDirection: 'row'}]}>
                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>계</Text>
                            </View>
                            
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}} 
                                placeholder={""}
                                value={data.agent.totalAgent} 
                                onChange={(i)=>updateData("agent", "totalAgent", i.nativeEvent.text)}
                            />
                            
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>공단</Text>
                            </View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}} 
                                placeholder={""}
                                value={data.agent.satin} 
                                onChange={(i)=>updateData("agent", "satin", i.nativeEvent.text)}
                            />
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>{"해경"}</Text>
                            </View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}} 
                                placeholder={""}
                                value={data.agent.coast} 
                                onChange={(i)=>updateData("agent", "coast", i.nativeEvent.text)}
                            />
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>주민</Text>
                            </View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}} 
                                placeholder={""}
                                value={data.agent.civil} 
                                onChange={(i)=>updateData("agent", "civil", i.nativeEvent.text)}
                            />
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                            <Text style={{textAlign:"center"}}>{"자원\n봉사자"}</Text>
                            </View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}} 
                                placeholder={""}
                                value={data.agent.volunteer} 
                                onChange={(i)=>updateData("agent", "volunteer", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput 
                                    placeholder={"직접\n입력"}
                                    style={{flex:1, width: '100%', textAlign: 'center'}}
                                    value={data.agent.field1} 
                                    onChange={(i)=>updateData("agent", "field1", i.nativeEvent.text)}
                                />
                            </View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.agent.field1Val} 
                                onChange={(i)=>updateData("agent", "field1Val", i.nativeEvent.text)}
                            />
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput 
                                    placeholder={"직접입력"}
                                    style={{flex:1, width: '100%', textAlign: 'center'}}
                                    value={data.agent.field2} 
                                    onChange={(i)=>updateData("agent", "field2", i.nativeEvent.text)}
                                />
                            </View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.agent.field2Val} 
                                onChange={(i)=>updateData("agent", "field2Val", i.nativeEvent.text)}
                            />
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput 
                                    placeholder={"직접입력"}
                                    style={{flex:1, width: '100%', textAlign: 'center'}}
                                    value={data.agent.field3} 
                                    onChange={(i)=>updateData("agent", "field3", i.nativeEvent.text)}
                                />
                            </View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.agent.field3Val} 
                                onChange={(i)=>updateData("agent", "field3Val", i.nativeEvent.text)}
                            />
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                            <TextInput 
                                placeholder={"직접입력"}
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.agent.field4} 
                                onChange={(i)=>updateData("agent", "field4", i.nativeEvent.text)}
                            />
                            </View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.agent.field4Val} 
                                onChange={(i)=>updateData("agent", "field4Val", i.nativeEvent.text)}
                            />
                        </View>                        
                    </View>
                </View>
                <View style={[{flex: 2.5}]}>
                    <View style={[{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}, s.borderBottom]}>
                        <Text>폐기물</Text>
                    </View>
                    <View style={[{flex: 2, flexDirection: 'row'}]}>
                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>액상</Text>
                            </View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.agent.liquid} 
                                onChange={(i)=>updateData("agent", "liquid", i.nativeEvent.text)}
                            />
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>지정</Text>
                            </View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.agent.assain} 
                                onChange={(i)=>updateData("agent", "assain", i.nativeEvent.text)}
                            />
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>일반</Text>
                            </View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.agent.general} 
                                onChange={(i)=>updateData("agent", "general", i.nativeEvent.text)}
                            />
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>기타</Text>
                            </View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.agent.etc} 
                                onChange={(i)=>updateData("agent", "etc", i.nativeEvent.text)}
                            />
                        </View>                
                    </View>
                </View>
            </View>
            <View style={[s.lastSection]}>
                <View style={[{flex: 3}, s.borderRight]}>
                    <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>선박</Text></View>
                    <View style={[{flex:2, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>이선</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.iseon} 
                                onChange={(i)=>updateData("tool", "iseon", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>선외기</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.outBoard} 
                                onChange={(i)=>updateData("tool", "outBoard", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>기타</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.etc} 
                                onChange={(i)=>updateData("tool", "etc", i.nativeEvent.text)}
                            />
                        </View>
                    </View>
                </View>
                <View style={[{flex: 4}, s.borderRight]}>
                    <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>유흡착재</Text></View>
                    <View style={[{flex:2, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>패드형</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.pad} 
                                onChange={(i)=>updateData("tool", "pad", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>펜스형</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.fense} 
                                onChange={(i)=>updateData("tool", "fense", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>중질유</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.crude} 
                                onChange={(i)=>updateData("tool", "crude", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>기타</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.etcOil} 
                                onChange={(i)=>updateData("tool", "etcOil", i.nativeEvent.text)}
                            />
                        </View>
                    </View>
                </View>
                <View style={[{flex: 1}, s.borderRight]}>
                    
                    <View style={[{flex:1}]}>
                        <View style={[{flex:2}, s.borderBottom, s.flexWrapper]}><Text>{"유처\n리제"}</Text></View>
                        <TextInput 
                            style={{flex:1, width: '100%', textAlign: 'center'}}
                            value={data.tool.highPressure} 
                            onChange={(i)=>updateData("tool", "highPressure", i.nativeEvent.text)}
                        />
                    </View>
                    
                </View>
                <View style={[{flex: 2}, s.borderRight]}>
                    <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>세척기</Text></View>
                    <View style={[{flex:2, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"고압\n저압"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.highPressure} 
                                onChange={(i)=>updateData("tool", "highPressure", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text style={{textAlign:'center'}}>{"자갈\n세척기"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.pabbleCleaner} 
                                onChange={(i)=>updateData("tool", "pabbleCleaner", i.nativeEvent.text)}
                            />
                        </View>
                    </View>
                </View>
                <View style={[{flex: 3}, s.borderRight]}>
                    <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>차량</Text></View>
                    <View style={[{flex:2, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"크레인"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.crain} 
                                onChange={(i)=>updateData("tool", "crain", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"지게차"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.fork} 
                                onChange={(i)=>updateData("tool", "fork", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"카고"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.cargo} 
                                onChange={(i)=>updateData("tool", "cargo", i.nativeEvent.text)}
                            />
                        </View>
                    </View>
                </View>
                <View style={[{flex: 4}, s.borderRight]}>
                    <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>장갑</Text></View>
                    <View style={[{flex:2, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"면"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.cattonGlove} 
                                onChange={(i)=>updateData("tool", "cattonGlove", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"완코팅"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.coatedGlove} 
                                onChange={(i)=>updateData("tool", "coatedGlove", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"반코팅"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.halfCoatGlove} 
                                onChange={(i)=>updateData("tool", "halfCoatGlove", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"케미컬"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.chemicalGlove} 
                                onChange={(i)=>updateData("tool", "chemicalGlove", i.nativeEvent.text)}
                            />
                        </View>
                    </View>
                </View>
                <View style={[{flex: 2}, s.borderRight]}>
                    <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>마대</Text></View>
                    <View style={[{flex:2, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"이중\n마대"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.twoLayerBag} 
                                onChange={(i)=>updateData("tool", "twoLayerBag", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"톤백"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.tonBag} 
                                onChange={(i)=>updateData("tool", "tonBag", i.nativeEvent.text)}
                            />
                        </View>
                    </View>
                </View>
                <View style={[{flex: 4}, s.borderRight]}>
                    <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>개인장구류</Text></View>
                    <View style={[{flex:2, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"방제복"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.protectiveClothe} 
                                onChange={(i)=>updateData("tool", "protectiveClothe", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"장화"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.boots} 
                                onChange={(i)=>updateData("tool", "boots", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"마스크"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.mask} 
                                onChange={(i)=>updateData("tool", "mask", i.nativeEvent.text)}
                            />
                        </View>
                    </View> 
                </View>
                <View style={[{flex: 4}, s.borderRight]}>
                    <View style={[{flex:1, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:2}, s.borderBottom, s.flexWrapper]}><Text>{"걸래"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.mob} 
                                onChange={(i)=>updateData("tool", "mob", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:2}, s.borderBottom, s.flexWrapper]}><Text>{"캔버스"}</Text></View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.canvas} 
                                onChange={(i)=>updateData("tool", "canvas", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:2}, s.borderBottom, s.flexWrapper]}>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.field1} 
                                onChange={(i)=>updateData("tool", "field1", i.nativeEvent.text)}
                            />
                            </View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.field1Val} 
                                onChange={(i)=>updateData("tool", "field1Val", i.nativeEvent.text)}
                            />
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:2}, s.borderBottom, s.flexWrapper]}>
                                <TextInput 
                                    style={{flex:1, width: '100%', textAlign: 'center'}}
                                    value={data.tool.field2} 
                                    onChange={(i)=>updateData("tool", "field2", i.nativeEvent.text)}
                                />
                            </View>
                            <TextInput 
                                style={{flex:1, width: '100%', textAlign: 'center'}}
                                value={data.tool.field2Val} 
                                onChange={(i)=>updateData("tool", "field2Val", i.nativeEvent.text)}
                            />
                        </View>
                    </View> 
                </View>
            </View>
        </View>
    </View>
    )

}

const s = StyleSheet.create({
    flexWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    lastSection: {
        flex: 1,
        flexDirection: 'row'
    },
    s3s3: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    s3s2: {
        flex: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    s3s1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSection: {
        flex: 1,
        flexDirection: 'row'
    },
    yesBox: {
        width: 50
    },
    noBox: {
        width: 45
    },
    checkBoxText:{
        textAlign: 'right'
    },
    yesnoTextBox: {
        flex: 3, 
        paddingLeft: 7,
        textAlign: 'left',
        fontSize: 12
    },
    checkBox: {
        // flex: 1,
        height: 20,
        width: 50
    },
    textWithCheckBox: {
        flex: 8,
        paddingLeft: 8,
        fontSize: 12
    },
    textWithCheckBoxContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    C1S2: {
        flex: 5
    },
    C1S1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionTitleText: {
        fontSize: 16
    },
    C2S: {
        flex: 5,
        flexDirection: 'row'
    },
    C1S: {
        flex: 7,
        flexDirection: 'row'
    },
    thirdSection: {
        width: '100%',
        flex: 1,
    },
    seconSectionTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    secondSectionColumns: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondSection: {
        width: '100%',
        flex: 1.4,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    container: {
        flex: 1,
        // width: '100%',
        // width:Dimensions.get('window').width,
        // height:Dimensions.get('window').height,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        backgroundColor: 'white',

        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRightWidth: 0
    },
    borderRight: {
        borderRightWidth: 1,
        borderRightColor: 'black'
    },
    borderBottom: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    borderTop: {
        borderTopColor: 'black',
        borderTopWidth: 1
    }
})