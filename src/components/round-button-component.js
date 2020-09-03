import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';


const RoundButton = ({icon, isSelected,handleClick}) => {
    return(
            <TouchableOpacity onPress={() => handleClick()} style={styles.container}>
                <View style={[styles.inner, isSelected?{backgroundColor:"#0B7292"}:{backgroundColor:"white"}]}>
                    <Icon name={icon} size={20} color={`${isSelected?"white":"#0B7292"}`}/>
                </View>
            </TouchableOpacity>
            
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    inner:{
        elevation:5,
        backgroundColor:"#fff",
        borderRadius:360,
        justifyContent:"center",
        alignContent:"center",
        padding:10
   }

})

export default RoundButton;