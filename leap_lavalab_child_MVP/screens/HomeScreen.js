import { Box, Heading, FlatList, HStack, Avatar, VStack, Spacer, NativeBaseProvider, ScrollView} from 'native-base';
import React, {useCallback, useRef, useState} from 'react';
import { Image, View,StyleSheet, Text, Dimensions } from 'react-native';
import BottomSheet, { BottomSheetFlatList, BottomSheetView } from "@gorhom/bottom-sheet";



import Card from '../assets/card.png';
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
  const snapPoints = ["34%", "80%"];

    return (
        // <NativeBaseProvider>
        //   <View style = {styles.container}>
        //       <Text style = {styles.card_text}>Card: </Text>
        //       <Image resizeMode='contain' style = {styles.card_image} source={Card}/>
        //       <Text style = {styles.overview_text}>Overview: </Text>
        //       <MyProgressChart/>
        //       <Text style = {styles.transaction_text}>Transactions: </Text>
              
        //       <BottomSheet
        //         ref={useRef<BottomSheet>(null)}
        //         snapPoints = {snapPoints}
        //       >
        //         <BottomSheetView>
        //           <Text>Hi</Text>
        //         </BottomSheetView>
        //       </BottomSheet>
              
        //   </View>
        // </NativeBaseProvider>

      <NativeBaseProvider>
        <View style = {styles.container}>
        
        <Text style = {styles.card_text}>Card: </Text>
        <Image resizeMode='contain' style = {styles.card_image} source={Card}/>
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
        data={[0.8]}
        width={Dimensions.get('window').width - 16}
        height={150}
        chartConfig={{
          backgroundColor: 'red',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(160, 230, 149, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
          padding: 10
        }}
      />
    </>
  );
};

const Example = () => {
  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Starbucks",
    timeStamp: "12:47 PM",
    recentText: "$4.58",
    image: StarBucks
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Cava (Child)",
    timeStamp: "11:11 PM",
    recentText: "$11.56",
    image: Cava
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Honey Bird",
    timeStamp: "6:22 PM",
    recentText: "$8.89",
    image: HoneyBird
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Dulce (Child)",
    timeStamp: "8:56 PM",
    recentText: "$4.78",
    image: Dulce
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Starbucks",
    timeStamp: "6:22 PM",
    recentText: "$8.89",
    image: StarBucks
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d76",
    fullName: "Honey Bird",
    timeStamp: "6:22 PM",
    recentText: "$8.89",
    image: HoneyBird
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d78",
    fullName: "Dulce (Child)",
    timeStamp: "8:56 PM",
    recentText: "$4.78",
    image: Dulce
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d79",
    fullName: "Honey Bird",
    timeStamp: "6:22 PM",
    recentText: "$8.89",
    image: HoneyBird
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d73",
    fullName: "Honey Bird",
    timeStamp: "6:22 PM",
    recentText: "$8.89",
    image: HoneyBird
  }];
  return <Box height={500} p="5" pb="2">
      <FlatList data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "muted.50"
    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[12, 3]} justifyContent="space-between">
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