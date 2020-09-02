import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Rating from './rating-component';
import Price from './price-component';
import RoundButton from './round-button-component';


const ScrollItem = ({title, location,rating, price,image,isSelected,animation,...style}) => {
    return(
        <Animatable.View  animation={animation} duration={1200} >
            <View style={styles.container} {...style}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} source={image} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.row}>
                        <View style={styles.col1}>
                            <Text style={styles.subtitle}>{location}</Text>
                        </View>
                        <View style={styles.col2}>
                            <Rating  value={4}/>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View>
                            <Price price={price} currency="$" unit="per week"/>
                        </View>
                        <View>
                            <RoundButton isSelected={isSelected} icon="heart-outline" />
                        </View>
                    </View>
                </View>


            </View>
        </Animatable.View>
       
    );
    
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        borderColor:"#000",
        borderRadius:20,
        width:250,
        height:320,
        margin:10,
        elevation:5

    },
    title:{
        color:"#000",
        fontWeight:"bold",
        fontSize:20,
    },
    
    subtitle:{
        color:"gray",
        fontWeight:"bold",
        fontSize:15,
        flexWrap:"wrap"
        
    },
    
    imageContainer:{
        flex:2,
        padding:0,
        margin:0,
        borderRadius:20,
    },
    textContainer:{
        flex:1,
        padding:10
        
    },
    imageStyle: {
        flex:1,
        width:"100%",
        borderRadius:20,
    },
    row:{
        flexDirection:"row",
        flexWrap:"wrap",
        flex:1,
        justifyContent:"space-between",
        alignItems:"center",
        padding:0,
        
    },
    col1:{
        flex:1,
    },

    col2:{
        flex:0.5,
    }

  
   
})



export default ScrollItem;