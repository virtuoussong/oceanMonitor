import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import TitleInputView from './TitleInput';
import CheckBox from 'react-native-check-box';


export default ThirdDoc = (props) => {
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
                            <Text style={s.yesnoTextBox}>공터 활용 가능</Text>
                            <CheckBox style={s.checkBox} leftText={"yes"} isChecked={true}/>
                            <CheckBox style={s.checkBox} leftText={"no"}/>
                        </View>
                        <View style={[s.textWithCheckBoxContainer, s.borderBottom]}>
                            <Text style={s.yesnoTextBox}>공터 100m 이내</Text>
                            <CheckBox style={s.checkBox} leftText={"yes"}/>
                            <CheckBox style={s.checkBox} leftText={"no"}/>
                        </View>
                        <View style={[s.textWithCheckBoxContainer]}>
                            <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>방제기자재 보관시설 존재</Text>
                            <CheckBox style={s.checkBox} leftText={"yes"}/>
                            <CheckBox style={s.checkBox} leftText={"no"}/>
                        </View>
                    </View>
                </View>

                <View style={[s.borderBottom, {flex:3.065, flexDirection: 'row'}]}>
                    <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, s.borderRight]}>
                        <Text>{"해\n상"}</Text>
                    </View> 
                    <View style={[{flex: 8}]}>
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
                        <View style={[s.textWithCheckBoxContainer]}>
                            <Text style={{flex: 3, paddingLeft: 7,textAlign: 'left', fontSize: 12}}>방제기자재 보관시설 존재</Text>
                            <CheckBox style={s.checkBox} leftText={"yes"}/>
                            <CheckBox style={s.checkBox} leftText={"no"}/>
                        </View>
                    </View>
                </View>
                <View style={[s.borderBottom, {flex: 1, width: '100%'}]}></View>
                <View style={[s.borderBottom, {flex: 1, width: '100%'}]}></View>
                <View style={[s.borderBottom, {flex: 1, width: '100%'}]}></View>
                <View style={[{flex: 1, width: '100%'}]}></View>
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
                <View style={[{flex: 6}, s.borderRight]}>
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
                <View style={[{flex: 2.5}]}>
                    <View style={[{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}, s.borderBottom]}>
                        <Text>폐기물</Text>
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
            <View style={[s.lastSection]}>
                <View style={[{flex: 3}, s.borderRight]}>
                    <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>선박</Text></View>
                    <View style={[{flex:2, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>이선</Text></View>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>선외기</Text></View>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>기타</Text></View>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><TextInput/></View>
                        </View>
                    </View>
                </View>
                <View style={[{flex: 4}, s.borderRight]}>
                    <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>유흡착재</Text></View>
                    <View style={[{flex:2, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>패드형</Text></View>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>펜스형</Text></View>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>중질유</Text></View>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>기타</Text></View>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><TextInput/></View>
                        </View>
                    </View>
                </View>
                <View style={[{flex: 1}, s.borderRight]}>
                    
                    <View style={[{flex:1}]}>
                        <View style={[{flex:2}, s.borderBottom, s.flexWrapper]}><Text>{"유처\n리제"}</Text></View>
                        <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                    </View>
                    
                </View>
                <View style={[{flex: 2}, s.borderRight]}>
                    <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>세척기</Text></View>
                    <View style={[{flex:2, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"고압\n저압"}</Text></View>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"자갈\n세척기"}</Text></View>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><TextInput/></View>
                        </View>
                    </View>
                </View>
                <View style={[{flex: 3}, s.borderRight]}>
                    <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>차량</Text></View>
                    <View style={[{flex:2, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"크레인"}</Text></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"지게차"}</Text></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"카고"}</Text></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                    </View>
                </View>
                <View style={[{flex: 4}, s.borderRight]}>
                    <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>장갑</Text></View>
                    <View style={[{flex:2, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"면"}</Text></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"완코팅"}</Text></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"반코팅"}</Text></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"케미컬"}</Text></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                    </View>
                </View>
                <View style={[{flex: 2}, s.borderRight]}>
                    <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>마대</Text></View>
                    <View style={[{flex:2, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"이중\n마대"}</Text></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"톤백"}</Text></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                    </View>
                </View>
                <View style={[{flex: 4}, s.borderRight]}>
                    <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>개인장구류</Text></View>
                    <View style={[{flex:2, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"방제복"}</Text></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"장화"}</Text></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:1}, s.borderBottom, s.flexWrapper]}><Text>{"마스크"}</Text></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                    </View> 
                </View>
                <View style={[{flex: 4}, s.borderRight]}>
                    <View style={[{flex:1, flexDirection: 'row'}]}>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:2}, s.borderBottom, s.flexWrapper]}><Text>{"걸래"}</Text></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:2}, s.borderBottom, s.flexWrapper]}><Text>{"캔버스"}</Text></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}, s.borderRight]}>
                            <View style={[{flex:2}, s.borderBottom, s.flexWrapper]}><TextInput placeholder={"직접입력"}/></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
                        </View>
                        <View style={[{flex:1}]}>
                            <View style={[{flex:2}, s.borderBottom, s.flexWrapper]}><TextInput placeholder={"직접입력"}/></View>
                            <View style={[{flex:1}, s.flexWrapper]}><TextInput/></View>
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
        borderBottomWidth: 1,
    },
    borderTop: {
        borderTopColor: 'black',
        borderTopWidth: 1
    }
})