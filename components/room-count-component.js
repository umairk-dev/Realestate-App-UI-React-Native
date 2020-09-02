import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Counter from './counter-component';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';


const RoomCount = ({icon, name, value, handleValue}) => {
    
    return(
        <View style={styles.container}>
            <Icon name={icon} color={"black"} size={20}/>
            <Text style={styles.text}>{name}</Text>
            <Counter initValue={value} handleValue={handleValue} />
        </View>
            
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:5
    },
  
    text:{
        fontSize:15,
    },
    icon:{
        backgroundColor:"#0B7292",
        elevation:5,
    }

})

export default RoomCount;