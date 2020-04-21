import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import SupportScreen from '../screens/Support';
import ScreenHeader from './../components/Header';

const Stack = createStackNavigator();
const HomeStackNavigator = ({navigation}) => {
    
    return(
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
            name="Home" 
            component={HomeScreen} options={{
                header : ()=><ScreenHeader headerTitle='Search' isHome='true' navigation={navigation} />,

            }}
        />
        
      </Stack.Navigator>
    )
}

const ProfileStackNavigator = ({navigation}) => {
    
    return(
      <Stack.Navigator>
        <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
                header : ()=><ScreenHeader headerTitle='Profile' isHome='false' navigation={navigation} />,

            }}
        />
        
      </Stack.Navigator>
    )
}

const SupportStackNavigator = ({navigation}) => {
    
    return(
      <Stack.Navigator>
        <Stack.Screen 
            name="Support" 
            component={SupportScreen} 
            options={{
                header : ()=><ScreenHeader headerTitle='Support' isHome='false' navigation={navigation} />,

            }}
        />
        
      </Stack.Navigator>
    )
}

export { HomeStackNavigator,
        ProfileStackNavigator,
        SupportStackNavigator}


