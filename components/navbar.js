import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native'


export default function Header(props) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>alert("ok")}>
                <Image source={require('../assets/back.png')} style={{ width: 20, height: 20, }} />
            </TouchableOpacity>
            <Text style={styles.label}>{props.label}</Text>
        </View>
    );
  }

const styles= StyleSheet.create({

    header:{
        paddingTop:50,
        backgroundColor: '#17B1C2',
        height: 90,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingHorizontal: 20
    },
    label:{
        lineHeight:24,
        fontSize:24,
        marginLeft: 10,
        color: '#fff'
    }
})