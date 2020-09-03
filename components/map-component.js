
import React from 'react';
import {View, Image, StyleSheet,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';


const Map = () => {
    return(
        <View style={styles.container}>
            <View style={styles.pageIndicator}>
                    <Icon name="circle-outline" color="#0B7292" size={10}/>
                    <Icon name="circle" color="#0B7292" size={10}/>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={require("../assets/map.png")} />
            </View>
                
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width,
        padding:5
    },

    imageContainer:{
        flex:1,
        padding:0,
        margin:0,
        borderRadius:20,
    },
    imageStyle: {
        flex:1,
        width:"100%",
    },
    
    pageIndicator:{
        padding:5,
        flexDirection:"row",
        justifyContent:"center"
    },

})

export default Map;