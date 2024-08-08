import { View, Text, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const MainScreen = (props) => {

    const { width, height } = Dimensions.get('window');

  return (
    <SafeAreaView style={{flex:1, }} >
        <LinearGradient style={{flex:1, justifyContent:'space-between'}} colors={['#851e21', '#d33338']} >

      <Text style={{fontSize:width/7,alignSelf:'center', color:'#fff', fontFamily:'TopSecret', marginTop:20,fontWeight:undefined }} >AJAN KİM?</Text>
      
      <Image source={require('../../MainLogo.png')} resizeMode='contain' style={{ width: width/1.9, height: height/2.4,  alignSelf:'center' }} />
      <View style={{width:width/1.7, marginBottom:10, alignSelf:'center'}} >
      <TouchableOpacity  onPress={()=> props.navigation.navigate('GameOptions')} style={{backgroundColor:'#fff', marginTop:10,borderRadius:15, paddingVertical:4, justifyContent:'center', alignItems:'center', borderWidth:4, borderColor:'#851e21'}} >
      <Text style={{fontSize:width/17, color:'#000', fontFamily:'Lato-Black'}} >BAŞLA</Text>

      </TouchableOpacity>
      <TouchableOpacity onPress={()=> props.navigation.navigate('NasilOynanir')} style={{backgroundColor:'#fff', marginTop:20,borderRadius:15, paddingVertical:4, justifyContent:'center', alignItems:'center', borderWidth:4, borderColor:'#851e21'}} >
      <Text style={{fontSize:width/17, color:'#000', fontFamily:'Lato-Black'}} >NASIL OYNANIR?</Text>

      </TouchableOpacity >
      <TouchableOpacity onPress={()=> props.navigation.navigate('Hakkinda')} style={{backgroundColor:'#fff', marginTop:20,borderRadius:15, paddingVertical:4, justifyContent:'center', alignItems:'center', borderWidth:4, borderColor:'#851e21'}} >
      <Text style={{fontSize:width/17, color:'#000', fontFamily:'Lato-Black'}} >HAKKINDA</Text>

      </TouchableOpacity>
      </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default MainScreen