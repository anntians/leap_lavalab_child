import { Box, Heading, FlatList, HStack, Avatar, VStack, Spacer, NativeBaseProvider, ScrollView} from 'native-base';
import React, {useCallback, useRef, useState} from 'react';
import { Image, View,StyleSheet, Text, Dimensions } from 'react-native';
import BottomSheet, { BottomSheetFlatList, BottomSheetView } from "@gorhom/bottom-sheet";
// import WalletManager from 'react-native-wallet-manager';



import Card from '../assets/card.png';
import Wallet from '../assets/addtowallet.png';
import StarBucks from '../assets/starbucks.png';
import Cava from '../assets/cava.png';
import HoneyBird from '../assets/honeybird.png';
import Dulce from '../assets/dulce.png';

//import React Native chart Kit for different kind of Chart
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';



function HomeScreen(props) {

  const sheetRef = useRef(null);
  const snapPoints = ["32%", "80%"];
  



    return (

      <NativeBaseProvider>
        <View style = {styles.container}>
        
        <Text style = {styles.card_text}>Card </Text>
        <Image resizeMode='contain' style = {styles.card_image} source={Card}/>
        <Image resizeMode='contain' style = {styles.wallet} source={Wallet}/>

        <Text style = {styles.overview_text}>Overview Spending Compared to Limit: </Text>
        <MyProgressChart/>

              <BottomSheet
                ref={sheetRef}
                snapPoints = {snapPoints}
                style = {styles.bottomSheetShadow}
              >
                <BottomSheetView>
                  <Text style = {styles.transaction_text}>Transactions: </Text>
                  <Example/>
                </BottomSheetView>
              </BottomSheet>
            
          </View>
      </NativeBaseProvider>

        
    );
}

const MyProgressChart = () => {
  return (
    <>

      <ProgressChart
        data={{labels:['Oct', 'Nov'], data:[0.8, 0.6]}}
        width={Dimensions.get('window').width-50}
        height={150}
        chartConfig={{
          backgroundColor: 'red',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2,
          
          color: (opacity = 1) => `rgba(150,213,123, ${opacity})`,
          style: {
            borderRadius: 50,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 5,
          padding: 15,
          width: -40
        }}
      />
    </>
  );
};
const Example = () => {
  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Starbucks",
    timeStamp: "Nov 28, 12:47 PM",
    recentText: "$4.58",
    image: StarBucks
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Cava (Child)",
    timeStamp: "Nov 27, 11:11 PM",
    recentText: "$11.56",
    image: Cava
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Honey Bird",
    timeStamp: "Nov 26, 6:22 PM",
    recentText: "$8.89",
    image: HoneyBird
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Dulce (Child)",
    timeStamp: "Nov 25, 8:56 PM",
    recentText: "$4.78",
    image: Dulce
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Starbucks",
    timeStamp: "Nov 25, 6:22 PM",
    recentText: "$8.89",
    image: StarBucks
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d76",
    fullName: "Honey Bird",
    timeStamp: "Nov 24, 6:22 PM",
    recentText: "$8.89",
    image: HoneyBird
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d78",
    fullName: "Dulce (Child)",
    timeStamp: "Nov 23, 8:56 PM",
    recentText: "$4.78",
    image: Dulce
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d79",
    fullName: "Honey Bird",
    timeStamp: "Nov 22, 6:22 PM",
    recentText: "$8.89",
    image: HoneyBird
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d73",
    fullName: "Honey Bird",
    timeStamp: "Nov 22, 6:22 PM",
    recentText: "$8.89",
    image: HoneyBird
  }];
  return <Box height={500} p="5" pb="2">
      <FlatList data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "muted.50"
    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[3, 0]} justifyContent="space-between">
              <Avatar size="48px" source={item.image} />
              <VStack>
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  {item.fullName}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>} keyExtractor={item => item.id} />
    </Box>;
};




const styles = StyleSheet.create({
    card_image:{
        width: '100%',
        height: '35%',
        // backgroundColor: "green",
        top: 20,
        bottom: 20
    },
    wallet:{
      width: '20%',
      height: '5%',
      // backgroundColor: "green",
      top: 15,
      bottom: 0
  },
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    },
    card_text: {
        left: '-40%',
        top: 5,
        color:"grey"
    },
    overview_text: {
        left: '-10%',
        top: 20,
        color:"grey"
    },
    transaction_text:{
        left: '5%',
        top: 20,
        color:"grey"
    },
    bottomSheetShadow:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    }

 
})

export default HomeScreen;