import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'


const Counter = ({initValue,handleValue}) => {
    const [value, setValue] = useState(initValue)

    const increment=() =>{
        setValue(value+1)
        handleValue(value)
    }

    
    const decrement = () =>{
        if(value-1>=0){
            setValue(value-1)
            handleValue(value)
        }
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => decrement()} >
                <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{value}</Text>
            <TouchableOpacity onPress={() => increment()}  style={styles.buttonRight}>
                <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>

        </View>
            
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#58ACFA",
        borderBottomEndRadius:20,
        borderTopLeftRadius:20,

    },
    text:{
        textAlign:"center",
        color:"white",
        fontWeight:"bold",
        fontSize:15,
        padding:5
    },
    btnText:{
        textAlign:"center",
        color:"white",
        fontWeight:"bold",
        fontSize:20,
        padding:10
    }
    

})

export default Counter;