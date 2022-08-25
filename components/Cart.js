import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

const img = require('../assets/foodies7.jpeg')
function Cart() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F5E0E0", width: "100%" }}>
            <View>
                <Text
                    style={{ color: "black", padding: 5, fontSize: 20, fontWeight: "800", marginTop: 30, }}>FOODIES
                </Text>
            </View>

            <View style={{backgroundColor: 'white', width: '85%', height: '70%', marginLeft: '6.5%', marginTop: 10 ,}}>

                <View style={{flexDirection:'row',justifyContent:'center'}}>

                    <Text style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: 800,fontSize: 15,}}>PRODUCT</Text>
                    <Text style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: 800,fontSize: 15,marginLeft:5,}}>PRICE</Text>
                    <Text style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: 800,fontSize: 15,marginLeft:5,}}>QUANTITY</Text>
                    <Text style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: 800,fontSize: 15,marginLeft:5,}}>TOTAL</Text>

                </View>
                <View style={{flexDirection:'row',}}>
                    <Image source={img} style={{width:70,height:80,marginLeft:'6.5%',marginTop:10,fontWeight: 800,}}/>
                    <Text style={{width:70,height:100,marginLeft:'3%',marginTop:45,fontWeight: 800,}}>R 25.70</Text>
                    <Text style={{width:70,height:100,marginLeft:'1%',marginTop:45,fontWeight: 800,}}>- 1 +</Text>
                    <Text style={{width:70,height:80,marginLeft:'0%',marginTop:45,fontWeight: 800}}>R 25.70</Text>
                </View>
            </View>
            <View >
                <Text style={{marginLeft:'35%',marginTop:10,fontWeight: 800}}>Total:R 185,75</Text>
                <Text style={{marginLeft:'35%',fontWeight: 800}}>I agree to T&Cs</Text>
            </View>
            <TouchableOpacity
        style={{
          backgroundColor: 'rgba(192, 9, 9, 0.96)',
          justifyContent: 'center',
          alignItems: 'center',
          width: 200,
          height: 35,
          borderRadius: 20,
          marginTop: 10,
          marginLeft: "23%",
        }}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontFamily: "Inter",
            fontSize: 20,
          }}
         
          >CHECK OUT</Text>
      </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Cart
