import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable,Alert } from 'react-native';
import { useData } from '../hooks/hooks';
import axios from 'axios';

export default function SignUp({navigation}) {
    const { isLoading, startLoading, stopLoading,setUser } = useData();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const baseURL = "http://192.168.79.229:5000"


    const signup = async () => {
        if (password !== repass || !username || !email) {
          Alert.alert('Error', 'Enter valid data. Password and Repassword should match.');
        } else {
          try {
            startLoading();
            const user = { username, email, password };
            const response = await axios.post(`${baseURL}/signup`, user);
    
            if (response.data.error) {
              Alert.alert('Error', response.data.error);
            } else {
              Alert.alert('Success', response.data.message);
              navigation.navigate('Login')
            }
          } catch (err) {
            console.error('Error during signup:', err.message);
            Alert.alert('Error', 'An unexpected error occurred during signup.');
          } finally {
            stopLoading();
          }
        }
      };
    


    return (
        <>
            <View>
                <View style={styles.images}>
                    <Image
                        style={styles.image1}
                        source={require('../../assets/images/signup1.png')}
                    />
                    <View style={styles.images23}>
                        <Image
                            style={styles.image2}
                            source={require('../../assets/images/signup2.png')}
                        />
                        <Image
                            style={styles.image3}
                            source={require('../../assets/images/signup3.png')}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.welcome}>
                        START WITH FOOD BREAK !
                    </Text>
                </View>
                <View>

                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => { setUsername(value) }}
                        type='email'
                        value={username}
                        placeholder="Full Name"
                    />
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
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => { setRepass(value) }}
                        value={repass}
                        type='password'
                        placeholder="Re-Password"
                    />

                </View>
                <View>
                    <Pressable style={styles.button} onPress={() => { () => console.log("y"); signup()  }}>
                        <Text style={styles.text}>SignUp</Text>
                    </Pressable>
                </View>
                <View style={styles.line}>
                    <Text style={styles.note}>Allready Have Account  <Text style={styles.signup} onPress={() => navigation.navigate('Login')}>Login </Text> </Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    images: {
        width: '100%',
        gap: 10,
        padding: 25,
        height: 350,
        marginTop: 30
    },
    images23:{
        flexDirection:'row',
        marginTop:10,
        gap:20,
    },
    image1: {
        width: '100%',
        height: 120,
        borderRadius: 20,
    },
    image2: {
        width: 145,
        height: 170,
        borderRadius: 20,
    },
    image3: {
        width: 145,
        height: 170,
        borderRadius: 20,
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
