import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useData } from '../hooks/hooks';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';


export default function BottomNav() {

    return (
        <>
            <View style={styles.NavWrapper}>
                <View style={styles.NavMain}>
                    <TouchableHighlight onPress={() => { console.log("dfghjkl") }}>
                        <Icon name='home' size={30}/>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { console.log("dfghjkl") }}>
                        <Text>Order</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { console.log("dfghjkl") }}>
                        <Icon1 name='logout' size={30}/>
                    </TouchableHighlight>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    NavWrapper:{
        position:'absolute',
        bottom:0,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'white',
    },
    NavMain:{
        
        flexDirection:'row',
        gap:130,
    }


});
