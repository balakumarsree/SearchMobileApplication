import React,{Component} from 'react';
import { Button, View, Text } from 'react-native';

export default class SupportScreen extends Component {
    constructor({ navigation }){
        super({ navigation });
    }
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Support Screen</Text>                
            </View>
        );
    }
  }