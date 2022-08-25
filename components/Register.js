import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Image,
  SafeAreaView
} from 'react-native'
import { authentication } from '../firebaseAuth/firebase'
import { auth } from '../firebaseAuth/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ImageBackground } from 'react-native-web'

const img = require('../assets/foodies.png')

const Register = () => {

/*   const navigate =useNavigation();
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth,email, password).then(userCredentials => 
        {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
        })
        .catch(error => alert(error.message))
        navigate("Login")
} */


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5E0E0", width: "100%" }}>

      <View>
        <Text style={{ color: "black", padding: 5, fontSize: 20, fontWeight: "800", marginTop: 30, }}>FOODIES</Text>

      </View>
      <View style={{ backgroundColor: 'black', width: '100%', height: 57, marginTop: 5, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#F5E0E0', fontWeight: 'bold', fontSize: 32, }}>REGISTER</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
        <Image source={img} style={{ width: '90%', height: 200, }} />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 22, }}>
        <TextInput
          placeholder='Enter Your Full Name'
          style={{
            width: '95%',
            height: 47,
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 200,
            fontSize: 20,
            color: 'rgba(0, 0, 0, 0.5)',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            marginTop: 5
          }}
        ></TextInput>
        <TextInput
          placeholder='Enter Your Email Address'
          style={{
            width: '95%',
            height: 47,
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 200,
            fontSize: 20,
            color: 'rgba(0, 0, 0, 0.5)',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            marginTop: 5
          }}></TextInput>
        <TextInput
          placeholder='Enter Your Address' style={{
            width: '95%',
            height: 47,
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 200,
            fontSize: 20,
            color: 'rgba(0, 0, 0, 0.5)',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            marginTop: 5

          }}></TextInput>
        <TextInput
          placeholder='Enter Your Password'
          style={{
            width: '95%',
            height: 47,
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 200,
            fontSize: 20,
            color: 'rgba(0, 0, 0, 0.5)',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            marginTop: 5
          }} />
      </View>

      <TouchableOpacity style={{ backgroundColor: 'rgba(192, 9, 9, 0.96)', justifyContent: 'center', alignItems: 'center', width: 200, height: 35, borderRadius: 20, marginTop: 10, marginLeft: "23%" }}>
        <Text style={{ color: "white", fontWeight: "bold", fontFamily: "Inter", fontSize: 20 }}>REGISTER</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'center', marginTop: 10 }}>
        <Text style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 600, fontSize: 16, color: '#000000' }}>Already registered?</Text><Text style={{
          color: "#4B0808", fontFamily: 'Inter',
          fontStyle: 'normal', fontWeight: 600, fontSize: 16,
          
        }}/* onPress={handleSignUp} */>LOGIN</Text>
      </TouchableOpacity >
      <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: 600,fontSize: 16,color:'black',alignItems:'center',justifyContent:'center'}}>Browse</Text>
      </TouchableOpacity>
    </SafeAreaView>

  )
}

export default Register

