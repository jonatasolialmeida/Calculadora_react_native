import React from 'react';
import { Text, View } from 'react-native';
import { styleFoot } from '../../style/style';

export default function Footer(){
    return(
        <View style={styleFoot.disp}>
            <Text style={styleFoot.textDisp}>Desenvolvido por Jonatas Almeida</Text>
        </View>
    )
}