import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'


const SwitchButton = ({value1, value2, selected,handleSelect}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleSelect(value1)} style={[styles.buttonLeft, selected === value1 ? styles.selectedLeft : null]}>
                <Text style={styles.text}>{value1}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSelect(value2)} style={[styles.buttonRight, selected == value2 ? styles.selectedRignt : null]}>
                <Text style={styles.text}>{value2}</Text>
            </TouchableOpacity>
        </View>
            
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        padding:10
    },
    buttonLeft:{
        backgroundColor:"#58ACFA",
        justifyContent:"center",
        alignContent:"center",
        padding:10,
        flex:1,
        marginLeft:-10,
        borderTopStartRadius:10,
        borderBottomEndRadius:10

   },
   buttonRight:{
        backgroundColor:"#58ACFA",
        justifyContent:"center",
        alignContent:"center",
        padding:10,
        flex:1,
        borderTopEndRadius:10,
        borderBottomStartRadius:10

    },
    text:{
        textAlign:"center",
        color:"white",
        fontWeight:"bold"
    },
    selectedLeft:{
        backgroundColor:"#0B7292",
        elevation:5,
        marginEnd:-20

    },
    selectedRignt:{
        backgroundColor:"#0B7292",
        elevation:5,
        marginStart:-20

    }

})

export default SwitchButton;