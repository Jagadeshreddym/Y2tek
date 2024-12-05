// screens/DetailsScreen.tsx

import React from 'react';
import { View, Text, Image , ScrollView} from 'react-native';
import Card from '../utils/Card';

const MenuScreen = () => {
  
return (
    <View>
        <View style = {{width:'100%', height: 100, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
        <Image source={require('../assets/images/menu_banner.png')} />
        </View>
        <ScrollView>
        <View style = {{padding:10}}>
        <Text>Services</Text>
        <View style={{padding:10}}>
          <Card title="Bot" image1={require('../assets/images/robo_bolt.png')} image2={require('../assets/images/navigation_arrow.png')} backgroundColor="white" isHeader={false}/>
          <Card title="Paper Trade" image1={require('../assets/images/paper_trade.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false} />
          <Card title="Backtest" image1={require('../assets/images/back_test.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false}/>
          <Card title="Transactions" image1={require('../assets/images/transactions.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false} />
          </View>
          <Text >Help</Text>
          <View style={{padding:10}}>
          <Card title="Help Videos" image1={require('../assets/images/help_videos.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false}/>
          <Card title="Support" image1={require('../assets/images/support.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false}/>
          <Card title="Live Chat" image1={require('../assets/images/live_chat.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false}/>
        </View>
        </View>
        </ScrollView>
    </View>
  );
};

export default MenuScreen;