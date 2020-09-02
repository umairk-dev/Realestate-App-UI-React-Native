import React from 'react'
import {View, ScrollView} from 'react-native'
import ScrollItem from './scroll-Item'


const HorizontalList = () => {
    return (
        <View >
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}>
                <ScrollItem  
                    image={require("../assets/image1.jpg")}
                    title="3 Bedroom House"
                    location="126 Canadian Lakes"
                    animation = "bounceInLeft"
                    rating="1"
                    price="10"
                    backgroundColor="#FCFCFC"
                    color="#000"
                    isSelected={false}
                />

                <ScrollItem  
                    image={require("../assets/image2.jpg")}
                    title="Town House"
                    location="126 Canadian Lakes"
                    animation = "bounceInLeft"
                    rating="1"
                    price="10"
                    backgroundColor="#FCFCFC"
                    color="#000"
                    isSelected={true}
                />
               </ScrollView>
        </View>
    )
}


export default HorizontalList;



