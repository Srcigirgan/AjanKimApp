import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TouchableOpacity, ScrollView, Modal, FlatList, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import data from '../Data';

const MainScreen = (props) => {
  const { width, height } = Dimensions.get('window');
  const [count, setCount] = useState(5);
  const [countDk, setCountDk] = useState(5);
  const [countSpy, setCountSpy] = useState(1);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const decreaseCount = () => {
    if (count > 3 && countSpy < count) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decreaseCountDk = () => {
    if (countDk > 2 ) {
      setCountDk(countDk - 1);
    }
  };

  const increaseCountDk = () => {
    if (countDk < 60) {
      setCountDk(countDk + 1);
    }
  };

  const decreaseCountSpy = () => {
    if (countSpy > 0 && countSpy <= count) {
      setCountSpy(countSpy - 1);
    }
  };

  const increaseCountSpy = () => {
    if ( countSpy < count) {
      setCountSpy(countSpy + 1);
    }
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f3f3', borderRadius: 12, margin: 3, padding: 3, width:width/3, height:width/3}}>
      <Image source={item.image} resizeMode='contain' style={{ width: width / 8, height: height / 8 }} />
      <Text style={{ fontSize: width / 22, color:'#000', fontFamily:'Lato-Bold' }}>{item.title}</Text>
    </TouchableOpacity>
  );

  const startGame = () => {
    if (selectedItem) {
      props.navigation.navigate('Game', {
        count: count,
        countDk: countDk,
        countSpy: countSpy,
        selectedItem: selectedItem
      });
    } else {
      Alert.alert('Uyarı', 'Lütfen bir kategori seçin.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <LinearGradient style={{ flex: 1, justifyContent: 'space-between' }} colors={['#851e21', '#d33338']} >
      <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ position:'absolute', left:0, top:0, padding:10 }} >
        <Image source={require('../../arrows.png')} resizeMode='contain' style={{ width:30, height: 30}} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40 }} >
          <Image source={require('../../MainLogo.png')} resizeMode='contain' style={{ width: width / 4, height: height / 5.5, alignSelf: 'center' }} />
          <Text style={{ fontSize: width / 10, alignSelf: 'center', color: '#fff', fontFamily: 'TopSecret', marginTop: 20, marginLeft: 20 }} >AJAN KİM?</Text>
        </View>
        <ScrollView horizontal>
          <View style={{ width: width / 1.3, height: width / 1.3, borderRadius: width / 6, backgroundColor: 'white', margin: 10, justifyContent: 'center' }} >
            <View></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }} >
              <TouchableOpacity onPress={decreaseCount} style={{ alignSelf: 'center' }} >
                <Image source={require('../../back.png')} resizeMode='contain' style={{ width: 30, height: 30, alignSelf: 'center' }} />
              </TouchableOpacity>
              <Text style={{ fontSize: width / 5, color: '#000', fontFamily: 'Lato-Medium' }} >{count}</Text>
              <TouchableOpacity onPress={increaseCount} style={{ alignSelf: 'center' }} >
                <Image source={require('../../next.png')} resizeMode='contain' style={{ width: 30, height: 30, alignSelf: 'center' }} />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: width / 15, color: '#000', fontFamily: 'Lato-Medium', alignSelf: 'center' }} >OYUNCU SAYISI</Text>
          </View>
          <View style={{ width: width / 1.3, height: width / 1.3, borderRadius: width / 6, backgroundColor: 'white', margin: 10, justifyContent: 'center' }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }} >
              <TouchableOpacity onPress={decreaseCountSpy} style={{ alignSelf: 'center' }} >
                <Image source={require('../../back.png')} resizeMode='contain' style={{ width: 30, height: 30, alignSelf: 'center' }} />
              </TouchableOpacity>
              <Text style={{ fontSize: width / 5, color: '#000', fontFamily: 'Lato-Medium' }} >{countSpy}</Text>
              <Image source={require('../../MainLogo.png')} resizeMode='contain' style={{ width:width/4.6, height: width/4, alignSelf: 'center' }} />

              <TouchableOpacity onPress={increaseCountSpy} style={{ alignSelf: 'center' }} >
                <Image source={require('../../next.png')} resizeMode='contain' style={{ width: 30, height: 30, alignSelf: 'center' }} />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: width / 15, color: '#000', fontFamily: 'Lato-Medium', alignSelf: 'center' }} >AJAN SAYISI</Text>
          </View>
          <View style={{ width: width / 1.3, height: width / 1.3, borderRadius: width / 6, backgroundColor: 'white', margin: 10, justifyContent: 'center' }} >
            <TouchableOpacity  onPress={() => setModalVisible(true)} >
              <Image source={selectedItem ? selectedItem.image : require('../../rose.png')} resizeMode='contain' style={{ width: width / 4, height: height / 5.5, alignSelf: 'center' }} />
              <Text style={{ fontSize: width / 18, color: '#000', fontFamily: 'Lato-Medium', alignSelf: 'center' }} >{selectedItem ? selectedItem.title : 'Seçim Yapın'}</Text>
           
            <Text style={{ fontSize: width / 15, color: '#000', fontFamily: 'Lato-Medium', alignSelf: 'center' }} >KATEGORİ</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: width / 1.3, height: width / 1.3, borderRadius: width / 6, backgroundColor: 'white', margin: 10, justifyContent: 'center' }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }} >
              <TouchableOpacity onPress={decreaseCountDk} style={{ alignSelf: 'center' }} >
                <Image source={require('../../back.png')} resizeMode='contain' style={{ width: 30, height: 30, alignSelf: 'center' }} />
              </TouchableOpacity>
              <Text style={{ fontSize: width / 5, color: '#000', fontFamily: 'Lato-Medium' }} >{countDk}dk</Text>
              <TouchableOpacity onPress={increaseCountDk} style={{ alignSelf: 'center' }} >
                <Image source={require('../../next.png')} resizeMode='contain' style={{ width: 30, height: 30, alignSelf: 'center' }} />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: width / 15, color: '#000', fontFamily: 'Lato-Medium', alignSelf: 'center' }} >SÜRE</Text>
          </View>
          
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
              />
              <TouchableOpacity style={{backgroundColor:'red', borderRadius:12, alignSelf:'center', paddingVertical:3, paddingHorizontal:12}} onPress={() => setModalVisible(false)}>
                <Text style={{ fontSize: width/22, color: '#fff', fontFamily:'Lato-Bold'}}>VAZGEÇ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={{ width: width / 1.7, marginBottom: 10, alignSelf: 'center' }} >
          <TouchableOpacity onPress={startGame} style={{ backgroundColor: '#fff', marginTop: 10, borderRadius: 15, paddingVertical: 4, justifyContent: 'center', alignItems: 'center', borderWidth: 4, borderColor: '#851e21' }} >
            <Text style={{ fontSize: width / 17, color: '#000', fontFamily: 'Lato-Black' }} >OYUNU BAŞLAT</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default MainScreen;
