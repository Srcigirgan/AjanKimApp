import { View, Text, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Hakkinda = (props) => {

    const { width, height } = Dimensions.get('window');

  return (
    <SafeAreaView style={{flex:1}} >

        <LinearGradient style={{flex:1, justifyContent:'space-between'}} colors={['#851e21', '#d33338']} >
        <Image source={require('../../logoTrans.png')} resizeMode='cover' style={{ width: width/1.4, height: height/1.3,  position:'absolute', right:0, top:30 }} />
       <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ position:'absolute', left:0, top:0, padding:10 }} >
        <Image source={require('../../arrows.png')} resizeMode='contain' style={{ width:30, height: 30}} />
        </TouchableOpacity>
        <Text style={{fontSize:width/13,alignSelf:'center', color:'#fff', fontFamily:'Lato-Bold', marginTop:50, textAlign:'center' }} >AJAN KİM? HAKKINDA</Text>

<View>
      <Text style={{fontSize:width/15, color:'#fff', fontFamily:'Lato-Bold', marginHorizontal:20}} >Proje Başlangıç Tarihi</Text>
      <Text style={{fontSize:width/18, color:'#fff', fontFamily:'Lato-Light', marginLeft:20, marginTop:5 }} >-25.02.2024</Text>
      <Text style={{fontSize:width/15, color:'#fff', fontFamily:'Lato-Bold', marginHorizontal:20,marginTop:20 }} >Emeği Geçenler</Text>
      <Text style={{fontSize:width/18, color:'#fff', fontFamily:'Lato-Light', marginLeft:20, marginTop:5 }} >-Salih Rafi ÇIĞIRGAN</Text>
      <Text style={{fontSize:width/18, color:'#fff', fontFamily:'Lato-Light', marginLeft:20, marginTop:5 }} >-Gülderen TÜRKMEN</Text>
      <Text style={{fontSize:width/15, color:'#fff', fontFamily:'Lato-Bold', marginHorizontal:20,marginTop:20 }} >Proje Amacı</Text>
      <Text style={{fontSize:width/20, color:'#fff', fontFamily:'Lato-Light', marginLeft:20, marginTop:5 }} >Hiçbir uygulamada Türkçe dil desteği bulunmayan bu oyunu kendi kültürümüzden parçalarla taçlandırarak kendimiz neden yapmıyoruz diye düşünerek çıkılmış bir yol...</Text>
      </View>
      <Text style={{fontSize:width/20, color:'#fff', fontFamily:'Lato-Bold', marginHorizontal:20,marginTop:20, alignSelf:'flex-end', marginBottom:20}} >Versiyon: 1.0</Text>


      </LinearGradient>
    </SafeAreaView>
  )
}

export default Hakkinda