import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CardStyleInterpolators } from '@react-navigation/stack';
import DrawerContent from './routes/Drawer';
import {HomeStackNavigator,ProfileStackNavigator,SupportStackNavigator} from './routes/NavigationStacks'
import SearchResults from './screens/SearchResults'
const Drawer = createDrawerNavigator();

function App() {
  return (
    // <SearchResults/>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name='Home'    component={HomeStackNavigator}></Drawer.Screen>
        <Drawer.Screen name='Profile' component={ProfileStackNavigator}></Drawer.Screen>
        <Drawer.Screen name='Support' component={SupportStackNavigator}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}

export default App;