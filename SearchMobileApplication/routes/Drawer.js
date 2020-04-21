import React from 'react';
import { View, StyleSheet, Image,BackHandler } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function DrawerContent(props) {
  return (
        <View style={{flex:1}}>
            <DrawerContentScrollView>
            <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection} >
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            {/* <Avatar.Image 
                                source={{
                                    uri: ''
                                }}
                                size={50}
                            /> */}
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>App Name</Title>
                                <Caption style={styles.caption}>Description</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={()=><Image 
                                        style={{width:25,height:25}} 
                                        source={require('./../assets/images/home-icon.jpg')} />}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={()=><Image 
                                        style={{width:25,height:25}} 
                                        source={require('./../assets/images/my-profile-icon.jpg')} />}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        /> 
                        <DrawerItem 
                            icon={()=><Image 
                                        style={{width:25,height:25}} 
                                        source={require('./../assets/images/contact-us.png')} />}
                            label="Contact Us"
                            onPress={() => {props.navigation.navigate('Support')}}
                        />
                    </Drawer.Section>                   
                </View>                
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                        icon={()=><Image 
                                        style={{width:20,height:20}} 
                                        source={require('./../assets/images/Exit-icon.png')} />}                            
                        label="Exit app"
                        onPress={() => {BackHandler.exitApp()}}
                    />
            </Drawer.Section>
        </View>
  );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
      backgroundColor:'#E1F5FE',
      padding:10,
      marginTop:-4,
      zIndex:3
    },
    title: {
      fontSize: 20,
      marginTop: 1
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 0,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        backgroundColor:'#E1F5FE'
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });