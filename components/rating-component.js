import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';


const Rating = ({value}) => {
    return(
        <View style={styles.container}>
            <View>
                <Icon name="star" color="orange" size={20}></Icon>
            </View>
            <View>
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"flex-end",
        alignContent:"center",
        padding:10        
    },
    value:{
        color:"#000",
        fontSize:15,
        fontWeight:"bold"
    }
})

export default Rating;