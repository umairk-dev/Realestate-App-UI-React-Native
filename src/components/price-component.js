import React from 'react';
import {View, Text,StyleSheet} from 'react-native'


const Price = ({price,currency,unit}) => {
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.currency}>{currency}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <View>
                <Text style={styles.unit}>{unit}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        padding:10

    },
    innerContainer:{
        flexDirection:"row",
        alignItems:"baseline",
    },
    price:{
        fontSize:20,
        fontWeight:"bold",
    },
    currency:{
        fontSize:12,
        fontWeight:"bold",
    },
    
    unit:{
        fontSize:12,
        fontWeight:"bold",
        color:"gray"
    },
})

export default Price;