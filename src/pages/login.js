import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable,Alert } from 'react-native';
import { useData } from '../hooks/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Login({navigation}) {

    const { isLoading, startLoading, stopLoading,user,setUser,baseURL } = useData();
    user?.username?navigation.navigate('Home'):console.log(user)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
    

    const login = async () => {
        console.log("yes")
        startLoading();
        const user = { email, password };
        try {
          const response = await axios.post(`${baseURL}/login`, user);
          if (response) {
            setUser(response.data.user); 
            await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
            navigation.navigate('Home') 
          } else {
           console.log(response)
          }
        } catch (err) {
          console.error('Error during login:', err.message);
          Alert.alert('Error', 'An unexpected error occurred during login.');
        } finally {
          stopLoading();
        }
      };



    return (
        <>
            <View>
                <View style={styles.images}>
                    <Image
                        style={styles.image1}
                        source={require('../../assets/images/login1.png')}
                    />
                    <View>
                        <Image
                            style={styles.image2}
                            source={require('../../assets/images/login2.png')}
                        />
                        <Image
                            style={styles.image3}
                            source={require('../../assets/images/login3.png')}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.welcome}>
                        WELCOME TO FOOD BREAK !
                    </Text>
                </View>
                <View>

                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => { setEmail(value) }}
                        type='email'
                        value={email}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => { setPassword(value) }}
                        value={password}
                        type='password'
                        placeholder="Password"
                    />
                </View>
                <View>
                    <Pressable style={styles.button} onPress={() => { () => console.log("y"); login() }}>
                        <Text style={styles.text}>Login</Text>
                    </Pressable>
                </View>
                <View style={styles.line}>
                    <Text style={styles.note}>Not Have Account  <Text style={styles.signup} onPress={() => navigation.navigate('SignUp')}>SignUp </Text> </Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    images: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        padding: 25,
        height: 460,
        marginTop: 30
    },
    image1: {
        width: 150,
        height: 420,
        marginTop: 'auto',
        marginBottom: 'auto',
        borderRadius: 20,
    },
    image2: {
        width: 145,
        height: 210,
        borderRadius: 20,
    },
    image3: {
        width: 145,
        height: 200,
        borderRadius: 20,
        marginTop: 10
    },
    welcome: {
        textAlign: 'center',
        fontSize: 20,
    },
    input: {
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
        backgroundColor: 'transparent',
        width: 310,
        height: 40,
        borderWidth: 1,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        backgroundColor: '#FBBD10',
        marginTop: 10,
        width: 310,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    line:{
        marginTop:20,
        marginLeft:'auto',
        marginRight:'auto',
    },
    signup:{
        color:'#FBBD10'
    }

});
