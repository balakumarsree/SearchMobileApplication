import React, {useState} from 'react';
import { Platform, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity } from 'react-native';
import Accordion from './../components/Accordion';

export default function SearchResults(props){
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    const array = [

        {  id:1, title: "Panel 1", body: "panel 1." },
        {  id:2, title: "Panel 2", body: "panel 2" },
        {  id:3, title: "Panel 3", body: "panel 3" },
        {  id:4, title: "Panel 4", body: "panel 4" },
        {  id:5, title: "Panel 5", body: "panel 5" }
  
      ];
      
    const [accItems,setAccItems] = useState({AccordionData : array});
    const [stateIsClicked, setStateIsClicked] = useState(true);
    const [stateSelectedId,setStateSelectedId] = useState(0);
    const accordionItemClick = (selectedId) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      setStateSelectedId(selectedId);
      if(stateIsClicked){
        setStateIsClicked(false);
      }
      else{
        setStateIsClicked(true);
      }
    }
    
    return(
        <View style={styles.MainContainer}>
          <ScrollView contentContainerStyle={{ paddingHorizontal: 5, paddingVertical: 5 }}>
            {
              accItems.AccordionData.map((item, key) =>
                (
                  <>
                      <Accordion
                            key={item.id} 
                            onAccordionClick={accordionItemClick.bind(this,item.id)} 
                            item={item} 
                            selectedId={stateSelectedId}
                      />                 
                   </>    
                ))
            }
          </ScrollView>
      </View>
    )

}

const styles = StyleSheet.create({

    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
      
    },
  
  
  });