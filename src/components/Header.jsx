import React from 'react';
import { Text, View } from 'react-native';
import { styleHead } from '../../style/style';

export default function Header(){
    return(
        <View style={styleHead.disp}>
            <Text style={styleHead.textDisp}>Soul Calc</Text>
        </View>
    )
}