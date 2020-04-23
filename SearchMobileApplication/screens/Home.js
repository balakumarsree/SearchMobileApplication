import  React,{Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import SearchInput from './../components/SearchInput';
import Accordion from './../components/Accordion'

export default class HomeScreen extends Component {
    constructor({ navigation }){
        super({ navigation });
    }
    render(){
        return (
            <View style={style.homeScreenContainer}>       
                <SearchInput/>      
            </View>
        );
    }
}

const style = StyleSheet.create({
    homeScreenContainer:{
        flex:1,
        width:'100%'
    }
});