import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { useData } from '../hooks/hooks';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Star from 'react-native-vector-icons/AntDesign';
import Search from '../components/search';

export default function Home({ navigation }) {

    const { user } = useData()
    // user?.user_name?console.log("yes"):navigation.navigate('Login')
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
                    <View>
                        <Search />
                    </View>
                    <ScrollView>
                        <View style={styles.foods}>
                            <Pressable  onPress={() => navigation.navigate('Order')} >
                                <View style={styles.food}>
                                    <View style={styles.foodImageWrapper}>
                                        <Image
                                            style={styles.foodImage}
                                            source={require('../../assets/images/signup2.png')}
                                        />
                                    </View>
                                    <View >
                                        <Text
                                            style={styles.foodName} >
                                            Cheezy Burger
                                        </Text>
                                    </View>
                                    <View style={styles.foodPriceRating}>
                                        <View style={styles.foodRating}>
                                            <Star name="star" size={17} color={'#FBBD10'} />
                                            <Star name="star" size={17} color={'#FBBD10'} />
                                            <Star name="star" size={17} color={'#FBBD10'} />
                                            <Star name="star" size={17} color={'#FBBD10'} />
                                            <Star name="star" size={17} color={'#FBBD10'} />
                                        </View>
                                        <View style={styles.foodPrice}>
                                            <Text>
                                                ₹ 200
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                    </ScrollView>
                </View>
            </View>
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
    foods: {
        marginTop: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        padding: 5,
    },
    food: {
        width: 150,
        height: 170,
        borderWidth: 1,
        borderRadius: 20,
        padding: 5,
    },
    foodImage: {
        width: 100,
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
        borderRadius: 20,
    },
    foodName: {
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    foodRating: {
        flexDirection: 'row'
    },
    foodPriceRating: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
