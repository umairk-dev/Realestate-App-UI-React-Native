import React, { useState } from 'react';
import {View,Dimensions,TouchableOpacity,Image, Text, StyleSheet, Button} from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

import Info from '../components/info-component';
import Map from '../components/map-component';

const Detail = ({title, location,rating,bed,bath,car, unit,price,image,currency,isSelected,agent,closeModal}) =>{

    const [animation, setAnimation] = useState('fadeInUp');
    const [innerAnimation, setInnerAnimation] = useState('fadeInDown');

    const [page, setPage] = useState("info");



    return(
        <Animatable.View style={styles.container}  animation={animation} duration={1000} onAnimationEnd={() => {animation === "fadeOutDown" ? closeModal() : null}}>
            <Animatable.View style={styles.upper} animation="fadeInDown">
                {innerAnimation?
                <View style={styles.imageContainer} >
                    <Image style={styles.imageStyle} source={image} />
                </View>
                :null}
            </Animatable.View>
            <View style={styles.lower}>
                <View style={styles.row}>
                    <Animatable.View style={styles.priceContainer} animation="fadeInRight">
                        <Text style={styles.price}>{currency}{price}</Text>
                        <Text style={styles.unit}>{unit}</Text>
                    </Animatable.View>
                    <Icon name={isSelected?"heart":"heart-outline" } color="#0B7292" size={25}/>
                </View>
                
                <Animatable.View style={styles.titleContainer}  animation="fadeInRight">
                    <Text style={styles.title}>{title}</Text>
                </Animatable.View>

                <Animatable.View style={styles.row}  animation="fadeInRight">
                    <View style={styles.icons}>
                        <Icon style={styles.icon}  name="bed" color="#0B7292" size={20}/>
                        <Text style={styles.subtitle}>{bed}</Text>
                        <Icon style={styles.icon}  name="shower" color="#0B7292" size={20}/>
                        <Text style={styles.subtitle}>{bath}</Text>
                        <Icon style={styles.icon} name="car" color="#0B7292" size={20}/>
                        <Text style={styles.subtitle}>{car}</Text>
                    </View>

                    <Text  style={styles.subtitle}>200sq.ft</Text>
                    
                </Animatable.View>
                
                <View style={styles.line} />
                
                <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}

                        snapToInterval={Dimensions.get('window').width} //your element width
                    >
                    <Info style={styles.page} {...agent}/>
                    <Map  style={styles.page}/>

                </ScrollView>
               
               
                <View style={styles.innerContainer}>
                        <TouchableOpacity onPress={() => {setAnimation("fadeOutDown");}} style={styles.buttonApply}>
                            <Text style={styles.buttonApply}>Express Interest</Text>
                        </TouchableOpacity>
                </View> 
            </View>
        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    upper:{
        flex:0.8
    },
    lower:{
        marginTop:-55,
        backgroundColor:"white",
        flex:1,
        borderTopLeftRadius:80,
        padding:10,
        elevation:5,
        borderColor:"#000",
    },
    titleContainer:{
        paddingStart:35    
    },
    title:{
        fontSize:20,
        fontWeight:"bold"
    },
    subtitle:{
        fontSize:15,
        color:"gray"

    },
    line:{
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },
    innerContainer:{
        justifyContent:"center",
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    priceContainer:{
        flexDirection:"row",
        paddingStart:35,
        alignItems:"baseline"
    },
    price:{
        color:"#0B7292",
        fontWeight:"bold",
        fontSize:25
    },
    unit:{
        fontSize:15,
        alignSelf:"baseline",
        marginStart:10,
        fontWeight:"bold",
        color:"#0B7292",
    },
    icons:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    icon:{
        padding:10
    },
    buttonApply:{
        padding:10,
        backgroundColor:"#0B7292",
        borderRadius:30,
        color:"#fff",
        alignItems:"center",
        
        borderTopEndRadius:10,
        borderBottomStartRadius:10
    },
    btnText:{
        color:"white"
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
    },
   
    pageIndicator:{
        padding:5,
        flexDirection:"row",
        justifyContent:"center"
    },
    page:{
        flex:1,
    }
})

export default Detail;