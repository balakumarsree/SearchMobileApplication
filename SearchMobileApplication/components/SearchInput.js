import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {Base64} from 'js-base64';
import {TouchableRipple} from 'react-native-paper'

const KEYS_TO_FILTERS = ['name', 'area'];
 
export default class SearchInputText extends Component{
 constructor(props) {
    super(props);
    this.state = {
      Customers:[],
      IsTyped:false,
      selectedItem:'',
      searchTerm: ''
    }
  }
  searchUpdated(term) {
    if(this.state.searchTerm != '' ){
      this.setState({ searchTerm: term })
    }
    else{
      this.setState({ IsTyped: false })
    }
  }



  componentDidMount(){

    let dataSource = [];
    fetch('https://api.github.com/repos/sjagan85/insightcrux/contents/FinUsers.json')
    .then( response => {
        if (!response.ok) { throw response }
        return response.json()  
      })
      .then( jsonData => {
        let test = [];
          //console.log(Base64.decode(jsonData.content))
          this.setState({Customers:JSON.parse(Base64.decode(jsonData.content))});
        
      });
    
  }
  
  render() {
    const filteredCustomers = this.state.Customers.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>
        <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term);
                                   this.setState({IsTyped:true}) 
                                  }
                       } 
          style={styles.searchInput}
          placeholder="Type a message to search"       
          clearButtonMode='while-editing'
          ><Text>{this.state.selectedItem}</Text></SearchInput>

      {!this.state.IsTyped? <Text></Text>:
        <ScrollView>
          {filteredCustomers.map(customer => {
            return (
              <TouchableRipple
                onPress={()=>{this.setState({selectedItem:customer.name,IsTyped:false})}} 
                key={customer.id} 
                style={styles.customerItem}>
                <View>
                  <Text>{customer.name}</Text>        
                  <Text style={styles.customerSubject}>{customer.area}</Text>              
                </View>
              </TouchableRipple>
            )
          })}          
        </ScrollView>
          }
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  customerItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  customerSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});