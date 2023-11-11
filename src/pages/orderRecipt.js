import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { useData } from '../hooks/hooks';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Rupee from 'react-native-vector-icons/FontAwesome';
import BottomNav from '../components/bottomNav';

export default function OrderRecipt({ navigation }) {

    const { user, selectedItem } = useData()
    const [recipt, setRecipt] = useState({})
   

    useEffect(() => {
        
    }, )
    return (
        <>
            <View style={styles.homeWrapper}>
                <View style={styles.homeMain}>
                    <View style={styles.header}>
                        <Text>
                            <Icon name="menu" size={30} />
                        </Text>
                        <Text>
                            <Icon1 name="user" size={30} />
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.eatSomething}>
                            Let's Eat Something !
                        </Text>
                        <Text style={styles.delicious}>
                            DELICIOUS
                        </Text>
                    </View>

                    <View style={styles.container}>
                        <View>
                            <Image
                                style={styles.foodImage}
                                source={{ uri: `http://192.168.79.229:5000/img/${selectedItem?.img}` }}
                            />
                        </View>
                        <View>
                            <Text
                                style={styles.foodName} >
                                {selectedItem?.itemName}
                            </Text>
                        </View>
                        <View style={styles.qrcode}>
                            <QRCode
                                value={"qrCodeData"}
                                size={200}
                                color="black"
                                backgroundColor="white"
                            />
                        </View>
                        <View>
                            <Text
                                style={styles.name} >
                                {"name"}
                            </Text>
                        </View>
                        <View style={styles.delevery}>
                            <View style={styles.addressWrapper}>
                                <Icon1 name='location' size={25} color={'#FBBD10'} />
                                <Text
                                    style={styles.address} >
                                    {selectedItem?.itemName}
                                </Text>
                            </View>
                            <View style={styles.dateWrapper}>
                                <Icon1 name='calendar' size={25} color={'#FBBD10'} />
                                <Text
                                    style={styles.date} >
                                    {selectedItem?.itemName}
                                </Text>
                            </View>
                            <View style={styles.timeWrapper}>
                                <Icon1 name='clock' size={25} color={'#FBBD10'} />
                                <Text
                                    style={styles.time} >
                                    {selectedItem?.itemName}
                                </Text>
                            </View>
                            <View style={styles.priceWrapper}>
                            <Rupee name='rupee' size={25} color={'#FBBD10'} />
                                <Text
                                    style={styles.price} >
                                    {selectedItem?.itemName}
                                </Text>
                            </View>
                        </View>
                    </View>
                    
                </View>
            </View>
            <BottomNav/>
        </>
    );
}

const styles = StyleSheet.create({

    homeWrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
    },
    homeMain: {

        width: '100%',
        height: "100%",
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    eatSomething: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    delicious: {
        color: '#FBBD10',
        textAlign: 'center',
        fontSize: 20,
    },
    container:{
        width:'auto',
        height:'auto',
        padding:5,
        borderWidth:1,
        borderRadius:20,
    },
    foodImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    foodName: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 25,
        color: '#FBBD10'
    },
    addressWrapper: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
    timeWrapper: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
    dateWrapper: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
    priceWrapper: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
    delevery: {
        width: 250,
        height: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
    },   
    name: {
        textAlign: 'center',
        fontSize: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
    },
    qrcode: {
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    }

});
