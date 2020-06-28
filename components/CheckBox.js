import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';

const CheckBoxCustom = (props) => {

    const [isChecked, setChecked] = useState(props.isChecked)

    return <CheckBox 
        style={{flex:1}}
        leftText={props.leftText} 
        isChecked={props.isChecked} 
        onClick={props.onClick}
    />
};

export default CheckBoxCustom;