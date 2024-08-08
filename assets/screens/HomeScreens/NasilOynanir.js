import { View, Text, SafeAreaView, Image, Dimensions, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const MainScreen = (props) => {

    const { width, height } = Dimensions.get('window');
    const data = [
      { title: 'Başlangıç Ekranı', items: ['Oyun başlamadan önce, oyuncu sayısı belirlenir. Bu, ajan dahil olmak üzere tüm oyuncuları içerir.', 'Gruba uygun olacak şekilde (çok fazla ajan seçilmesi tavsiye edilmez) ajan sayısı belirlenir.', 'Oyunun kelimelerinin belirleneceği kategori seçilir.','Oyunun süresi belirlenir.','"OYUNU BAŞLAT" tuşuna basılarak oyun başlatılır.'] },
      { title: 'Rol Dağıtımı', items: ['Yönetici kişi, ekrandaki karta 1 kez dokunarak kelimeyi görür.', 'Tekrar dokunarak rolünü gizler ve telefonu 2. oyuncunun eline verir.', 'Ajan olan oyunculara "Sen Ajansın" yazılı kart görünür, diğer oyuncular ise bu kartı göremez ve ajanı bilmezler.','Bu şekilde telefon tüm oyuncuların elinden geçerek herkes kartta yazanı görür ve süre başlar.'] },
      { title: 'Oyun Akışı', items: ['Oyun süresince, oyuncular soru sormak istedikleri kişiye kelime hakkında bir soru yöneltirler.', 'Soru yönelten kişilerin amacı ajanı ortaya çıkarmaktır.', 'Ajanın amacı ise sorular ve cevaplardan fikir yürütüp, kendine yöneltilen sorulardan ustaca kaçınarak kelimeyi bulmaktır.','Soru yöneltilen kişi, ajana belli etmeden kendini masum çıkaracak cevabı verir.','Sürenin sonuna gelindiğinde artık kimse soru yöneltemez ve oylama yaparak ajanın kim olduğu tahmin edilir.','Eğer seçilen kişi gerçekten ajan ise kelimeyi tahmin eder ve doğru tahmin ederse kazanır, edemezse diğer oyuncular oyunu kazanır.','Eğer seçilen kişi ajan değilse, ajan olmadığını söyler ve gerçek ajan ortaya çıkar. Ajan, oyunu tahmin yapmasına gerek olmadan kazanır.','Oyuncular, ajanı bulduklarına hemfikir olurlarsa, erken oylama yaparak oyunu bitirebilirler. Bu aşamada ajana kelime söylenmez ve tahmin etmesi istenir. Aynı aşamalarla oyun sonuçlanır.','Diğer bir ihtimalde ise, ajan kelimeyi tespit ettiğine inandığında oyunu durdurup kendisinin ajan olduğunu söyler ve kelimeyi tahmin eder.','Eğer Ajan doğru tahminde bulunursa, oyunu kazanır; yanlış ise Ajan kaybeder.','Sorulan sorularda herhangi bir kısıtlama ve yasak yoktur, Ajanın kelimeyi kolay tahmin edememesi için oyuncular sorularını stratejik şekilde sormalı, cevaplayanlar da akıllıca cevap vermelidir.'] },
    {title:'Bu kılavuz, oyunun temel kurallarını adım adım açıklar. Her oyuncu, kendi rolünü gizli tutarak, diğer oyuncuların rollerini tahmin etmek için stratejik düşünme yeteneğini kullanmalıdır. İyi eğlenceler!', items:[]},
    ];
    
    const renderItem = ({ item }) => (
      <View style={{ marginLeft: 20, marginTop:10}}>
        <Text style={{ fontSize: width/20, color:'#fff',fontFamily:'Lato-Bold', marginBottom:10 }}>{item.title}</Text>
        {item.items.map((subItem, index) => (
          <Text key={index} style={{ fontSize: width/25, marginLeft: 10, color:'#fff', fontFamily:'Lato-Light', marginTop:5 }}>{'\u2022'} {subItem}</Text>
        ))}
      </View>
    );
    
  
    
  return (
    <SafeAreaView style={{flex:1}} >

        <LinearGradient style={{flex:1}} colors={['#851e21', '#d33338']} >
        <Image source={require('../../logoTrans.png')} resizeMode='cover' style={{ width: width/1.4, height: height/1.3,  position:'absolute', right:0, top:30 }} />
        <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ position:'absolute', left:0, top:0, padding:10 }} >
        <Image source={require('../../arrows.png')} resizeMode='contain' style={{ width:30, height: 30}} />
        </TouchableOpacity>
      <Text style={{fontSize:width/9,alignSelf:'center', color:'#fff', fontFamily:'Lato-Black', marginTop:40 }} >NASIL OYNANIR?</Text>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
    
      </LinearGradient>
    </SafeAreaView>
  )
}

export default MainScreen