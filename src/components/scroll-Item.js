import React from 'react';
import {View,TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Rating from './rating-component';
import Price from './price-component';
import RoundButton from './round-button-component';


const ScrollItem = ({item,animation,handleClick,...style}) => {
    const {title, location,rating, price,currency,unit,image,isSelected} = item
    return(
        <Animatable.View  animation={animation} duration={1200} >
            <TouchableOpacity onPress={() => handleClick(item)}>
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
                            <Rating  value={rating}/>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View>
                            <Price price={price} currency={currency} unit={unit}/>
                        </View>
                        <View>
                            <RoundButton isSelected={isSelected} icon="heart-outline" />
                        </View>
                    </View>
                </View>


            </View>
           </TouchableOpacity>
            
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
    imageStyle: {
        flex:1,
        width:"100%",
        borderRadius:20,
    },
    textContainer:{
        flex:1,
        padding:10
        
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