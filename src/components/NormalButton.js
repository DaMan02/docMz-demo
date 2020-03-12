import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import fonts from '../assets/fonts';

// props: backgroundColor, text, textColor, border, radius, onPress

const NormalButton = (props) => (
    <View  
    style={{...props.buttonStyle, alignItems:'center', justifyContent:'center'  }}>
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}
    style={{...styles.buttonContainer, backgroundColor:props.backgroundColor, borderColor: props.border, borderRadius: props.radius, borderWidth: 1 }} >
        <View >
            <Text style={{...fonts.h1, color: props.textColor}}>{props.text}</Text>
        </View>
    </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    main: {
        alignItems:'center',
        justifyContent:'center' 
    },
    buttonContainer: {
        justifyContent:'center',
        alignItems:'center',
        width: 130,
        height: 44,   
        borderRadius: 2 ,
        elevation: 4,
        padding: 2
    },
});

export default NormalButton;