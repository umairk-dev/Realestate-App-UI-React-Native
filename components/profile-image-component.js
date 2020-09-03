import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const ProfileImage = ({image}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.innerContainer} source={image}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        shadowColor:"black",
        padding:1,
        elevation:5
    },
    innerContainer:{
        width:60,
        height:60,
        borderRadius:60/2,
    },
    

});

export default ProfileImage;