import React from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import TitleInputView from '../DocDetail/components/TitleInput';
import CheckBox from 'react-native-check-box';

let dataSet = [
    {id: 1, name: "구역 1"},
    {id: 2, name: "구역 2"},
    {id: 3, name: "구역 3"},
    {id: 4, name: "구역 4"},
    {id: 5, name: "구역 5"},
    {id: 6, name: "구역 6"},
    {id: 7, name: "구역 7"},
    {id: 8, name: "구역 8"},
    {id: 9, name: "구역 1"},
    {id: 10, name: "구역 2"},
    {id: 11, name: "구역 3"},
    {id: 12, name: "구역 4"},
    {id: 13, name: "구역 5"},
    {id: 14, name: "구역 6"},
    {id: 15, name: "구역 7"},
    {id: 16, name: "구역 8"},
]

export default ThirdDoc = (props) => {
    return (
    <View style={s.container}>
        <TitleInputView/>

        <View style={[s.secondSection, s.borderBottom]}>
            {/* 접근 여건 */}
            <View style={[s.secondSectionColumns, s.borderRight]}>
                <View style={[s.seconSectionTitle, s.borderBottom]}><Text style={s.sectionTitleText}>접근여건</Text></View>
                <View style={[s.C1S, s.borderBottom]}>
                    <View style={[s.C1S1, s.borderRight]}>
                        <Text>육상</Text>
                    </View>
                    <View style={[s.C1S2]}>
                    <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>공터 활용 가능</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>공터 100m 이내</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>방제기자재 보관시설 존재</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>보관시설 100m 이내</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>선회기 활용 방제기자제 수령하나 보관을 불가</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>선착장 근처 방제기자재 보관 가능</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer]}>
                    <Text style={s.textWithCheckBox}>마을회관내 창고 활용 가능</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                    </View>
                </View>
                <View style={[s.C1S]}>
                    <View style={[s.C1S1, s.borderRight]}>
                        <Text>해상</Text>
                    </View>
                    <View style={[s.C1S2]}>
                    <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>공터 활용 가능</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>공터 100m 이내</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>방제기자재 보관시설 존재</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>보관시설 100m 이내</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>선회기 활용 방제기자제 수령하나 보관을 불가</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>선착장 근처 방제기자재 보관 가능</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer]}>
                    <Text style={s.textWithCheckBox}>마을회관내 창고 활용 가능</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                    </View>
                </View>
            </View>
            {/* 방제기자제 수령 및 고봔 여건 */}
            <View style={[s.secondSectionColumns, s.borderRight]}>
                <View style={[s.seconSectionTitle, s.borderBottom]}><Text >방제기자재 수령 및 보관 여건</Text></View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>공터 활용 가능</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>공터 100m 이내</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>방제기자재 보관시설 존재</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>보관시설 100m 이내</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>선회기 활용 방제기자제 수령하나 보관을 불가</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>선착장 근처 방제기자재 보관 가능</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>마을회관내 창고 활용 가능</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
                </View>
            </View>
            {/* 페기물 보관 및 반출 여건 */}
            <View style={[s.secondSectionColumns, s.borderRight]}>
                <View style={[s.seconSectionTitle, s.borderBottom]}><Text >페기물 보관 및 반출 여건</Text></View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>공터 활용 가능</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>공터 100m 이내</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>방제기자재 보관시설 존재</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>보관시설 100m 이내</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>선회기 활용 방제기자제 수령하나 보관을 불가</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>선착장 근처 방제기자재 보관 가능</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>마을회관내 창고 활용 가능</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
                </View>
            </View>
            {/* 해양 환경 민간 개소 */}
            <View style={[s.secondSectionColumns]}>
                <View style={[s.seconSectionTitle, s.borderBottom]}><Text >해양 환경 민감개소</Text></View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>공터 활용 가능</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.yesnoTextBox}>공터 100m 이내</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>방제기자재 보관시설 존재</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>보관시설 100m 이내</Text>
                    <CheckBox style={s.checkBox} leftText={"yes"}/>
                    <CheckBox style={s.checkBox} leftText={"no"}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>선회기 활용 방제기자제 수령하나 보관을 불가</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>선착장 근처 방제기자재 보관 가능</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <Text style={s.textWithCheckBox}>마을회관내 창고 활용 가능</Text>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
                </View>
                <View style={[s.textWithCheckBoxContainer]}>
                    <TextInput style={s.textWithCheckBox} placeholder={"직접 입력"}/>
                    <CheckBox style={s.checkBox}/>
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
                                <Text>작업 기간</Text>
                    </View>
                    <TextInput style={{flex: 1}} placeholder={"test"}/>
                </View>
                <View style={[s.s3s2, s.borderRight]}>
                    <View style={[{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}, s.borderBottom]}>
                        <Text>동원 인력</Text>
                    </View>
                    <View style={[{flex: 2, flexDirection: 'row'}]}>
                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>계</Text>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>주민</Text>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>{"자월\n봉사자"}</Text>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>공단</Text>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>해경</Text>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>
                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <TextInput placeholder={"직접입력"}/>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>
                        
                    </View>
                </View>
                <View style={s.s3s3}>
                    <View style={[{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}, s.borderBottom]}>
                        <Text>동원 인력</Text>
                    </View>
                    <View style={[{flex: 2, flexDirection: 'row'}]}>
                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>계</Text>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>주민</Text>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>{"일반"}</Text>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>

                        <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                            <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}, s.borderBottom]}>
                                <Text>기타</Text>
                            </View>
                            <View style={[{flex: 1}]}>
                                <TextInput/>
                            </View>
                        </View>                
                    </View>
                </View>
            </View>
            <View style={[s.bottomSection, s.borderBottom]}></View>
        </View>
    </View>
    )

}

const s = StyleSheet.create({
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
    yesnoTextBox: {
        flex: 3, 
        paddingLeft: 7,
        textAlign: 'left',
        fontSize: 12
    },
    checkBox: {
        flex: 1
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
        borderBottomWidth: 1
    },
})