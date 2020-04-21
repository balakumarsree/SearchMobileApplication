import React from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';

function ScreenHeader(props){    
        return(           
          <View style={headerStyles.headerContainer}>
            <View  style={headerStyles.headerIconColumn}>
              {props.isHome === 'true'?
                <TouchableOpacity onPress={()=>{props.navigation.openDrawer()}}><Image 
                      style={headerStyles.headerIcon} 
                      source={require('./../assets/images/menu-white.png')} /></TouchableOpacity> 
                    :
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('Home')}}><Image 
                      style={headerStyles.headerIconBack} 
                      source={require('./../assets/images/back-button.png')} /></TouchableOpacity> 
               }
            </View>
            <View style={headerStyles.headerTitleColumn}>
              <Text style={headerStyles.headerTitle}>{props.headerTitle}</Text>
            </View>
          </View>
        )
}; 
export default ScreenHeader;

const headerStyles = StyleSheet.create({
    headerContainer:{
      flexDirection:'row', 
      width:'100%', 
      backgroundColor:'#0091EA',
      zIndex:10,
      shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
    },
    headerTitleColumn:{
      width:'80%',
      height:60,
      flexDirection: 'column',      
      alignItems:'flex-start',
      justifyContent:'center'
    },
    headerTitle:{
      color:'#fff',
      fontSize:20,
      marginLeft:-20
    },
    headerIcon:{
      width:25,
      height:25,
      marginLeft:15,
      backgroundColor:'#0091EA'
    },
    headerIconBack:{
      width:20,
      height:20,
      marginLeft:20
    },
    headerIconColumn:{
      flexDirection:'column', 
      width:'20%',
      height:60, 
      alignItems:'flex-start', 
      justifyContent:'center'
    }
});