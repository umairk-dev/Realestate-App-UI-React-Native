
import React from 'react';
import {View, Text,StyleSheet,Dimensions} from 'react-native'
import ProfileImage from  '../components/profile-image-component';
import RoundButton from '../components/round-button-component';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Info = ({image, name}) => {
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height

    return(
        <View style={[styles.container, width, height ]}>
            <View style={styles.pageIndicator}>
                    <Icon name="circle"  color="#0B7292" size={10}/>
                    <Icon name="circle-outline" color="#0B7292" size={10}/>
            </View>
            <View style={styles.agentContainer}>
                    <ProfileImage image={image}/>
                    <View style={styles.agent}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>Property Agent</Text>
                    </View>
                    <View style={styles.agentContact}>
                        <RoundButton icon="chat" handleClick={() => {}}/>
                        <RoundButton icon="phone" handleClick={() => {}}/>
                    </View>
                
            </View>
            <View>
                <Text>Property Description</Text>
                <Text>ABC ABC</Text>
                <Text>ABC ABC</Text>
                <Text>ABC ABC</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width,
        padding:5
    },
    agentContainer:{
        flex:0.5,
        flexDirection:"row",
        alignItems:"center",
        padding:1,
    },
    agent:{
        flex:1,
        alignContent:"flex-start",
        padding:5

    },
    agentContact:{
        flex:0.5,
        flexDirection:"row",
        padding:10
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"left"
    },
    subtitle:{
        fontSize:15,
        color:"gray"
    },
    
    pageIndicator:{
        padding:5,
        flexDirection:"row",
        justifyContent:"center"
    },
})

export default Info;