import { Box, Heading, FlatList, HStack, Avatar, VStack, Spacer, NativeBaseProvider, ScrollView, Button} from 'native-base';
import React, {useState, useRef,useCallback, useMemo, useEffect} from 'react';
import { Image, View,StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import warningIcon from '../assets/warningIcon.png';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
// import WalletManager from 'react-native-wallet-manager';


//import React Native chart Kit for different kind of Chart
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';



function TriviaScreen(props) {
    const [colour, setColour] = useState('white');
    const handleClick = () => { setColour('#A0D995'); setpoints(40)}

    const [points,setpoints] = useState(30)

    return (
    

      <NativeBaseProvider>
        <View style = {styles.container}>
            <Text style = {styles.card_text}>Your Leap Points this Month</Text>
            <Text style = {styles.points}>{points}</Text>
            <Text style = {styles.subtitle}>Today's Question</Text>
            <Text style = {styles.question}>What doesn't affect your credit score?</Text>
            <TouchableOpacity style = {styles.button} >
                <Text style = {styles.buttonText}>Payment History</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button2}>
                <Text style = {styles.buttonText}>Amount of Debt you owe</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.button3, { backgroundColor: colour}]} onPress={handleClick} >
                <Text style = {styles.buttonText}>Your grade in math class</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button4} >
                <Text style = {styles.buttonText}>Length of Credit History</Text>
            </TouchableOpacity>

        </View>
      </NativeBaseProvider>

        
    );
}


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
        top: 50,
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
    points:{
        top: 70,
        color:"#71C480",
        fontSize: 50,
        fontWeight: 'bold',
    },
    subtitle:{
        top: 100,
        color:"#4CACBC",
        fontSize: 40,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    question:{
        top: 150,
        color:"grey",
        fontSize: 20,
        paddingBottom: 5
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
    },
    button:{
        
        height: 30,
        borderRadius: 30,
        borderWidth: 4,
        borderColor:'grey',
        // backgroundColor:'#A0D995',
        width:150,
        height: 150,
        left: 50,
        top:200,
        alignSelf:'left',
        alignItems:'center',
        justifyContent:'center'
      },
      button2:{
        height: 30,
        borderRadius: 30,
        borderWidth: 4,
        borderColor:'grey',
        // backgroundColor:'#A0D995',
        width:150,
        height: 150,
        left: 225,
        top:50,
        alignSelf:'left',
        alignItems:'center',
        justifyContent:'center'
      },
      button3:{
        
        height: 30,
        borderRadius: 30,
        borderWidth: 4,
        borderColor:'grey',
        // backgroundColor:'#A0D995',
        width:150,
        height: 150,
        left: 50,
        top:75,
        alignSelf:'left',
        alignItems:'center',
        justifyContent:'center'
      },
      button4:{
        height: 30,
        borderRadius: 30,
        borderWidth: 4,
        borderColor:'grey',
        // backgroundColor:'#A0D995',
        width:150,
        height: 150,
        left: 225,
        top:-75,
        alignSelf:'left',
        alignItems:'center',
        justifyContent:'center'
      },
      buttonText:{
        color: 'grey',
        fontSize:18,
        padding:3,
        alignSelf:'center'
      },

 
})

export default TriviaScreen;