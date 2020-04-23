import React,{Component, useState} from 'react';
import { Image, Platform, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity } from 'react-native';
import {TouchableRipple} from 'react-native-paper'
if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}

export default class Accordion extends Component{

    constructor(props){
        super(props);
        this.state = {
          updated_Height:0,
          contentId: this.props.item.id,
          isExpanded:false
        }
    }

    static getDerivedStateFromProps(updated_props, state) {
      if(updated_props.selectedId == state.contentId){
        if(!state.isExpanded){
          return {
            updated_Height:null,
            isExpanded:!state.isExpanded
          }
        }
      }
      return  {
        updated_Height:0,
        isExpanded:!state.isExpanded
      };
    }
  
    
      render() {
        return (    
          <View style={styles.Panel_Header_Holder}>    
            <TouchableRipple  onPress={this.props.onAccordionClick} style={styles.Btn}>
                <View style={{flexDirection:'row',width:'100%', alignContent:'center',justifyContent:'center'}}>
                    <View style={{flexDirection:'column',alignItems:'flex-start',width:'50%'}}>
                        <Text style={styles.Panel_Button_Text}>{this.props.item.title} </Text>  
                    </View>
                    <View style={{flexDirection:'column',alignItems:'flex-end',width:'50%'}}>
                        <Image 
                          style={{marginTop:5,height:15,width:15}} 
                          source={
                              (this.state.updated_Height == null)?require('./../assets/images/downArrow.png'):require('./../assets/images/rightArrowBlack.png')
                            }/>  
                    </View>
                </View>
            </TouchableRipple>    
              <View style={{ height: this.state.updated_Height }}>
                <View style={styles.Panel_Content_Holder} >
                  <View style={{ overflow: 'hidden',backgroundColor:'#fff' }}>    
                          <Text style={styles.Panel_text}>    
                            {this.props.item.body}    
                          </Text>    
                  </View>
                </View>
              </View>
          </View>
    
        );
      }
}



const styles = StyleSheet.create({

    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: (Platform.OS === 'ios') ? 10 : 0
    },
  
    Panel_text: {
      fontSize: 18,
      color: '#000',
      padding: 10
    },
  
    Panel_Button_Text: {
      color: '#424242',
      fontSize: 20
    },
  
    Panel_Header_Holder: {
      borderWidth: 1,
      borderColor: '#9E9E9E',
      marginVertical: 1,
    },
    Panel_Content_Holder: {
      marginTop:-1,
      borderWidth: 1.5,
      borderColor: '#9E9E9E',
      marginVertical: 1
    },
  
    Btn: {
      padding: 10,  
      backgroundColor: '#E0E0E0',
      height:60,
      justifyContent:'center',
      
    }
  
  });

