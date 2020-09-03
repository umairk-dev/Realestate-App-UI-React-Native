import React, { useState } from 'react';
import {View,TouchableOpacity, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import SwitchButton from './switch-button-component';
import RangeSlider from 'rn-range-slider';
import RoomCount from './room-count-component';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';


const FilterDlg = ({closeModal}) => {
    
    const [animation, setAnimation] = useState('bounceInUp');

    const [type, setType] = useState("Buy");
    
    const [rangeLow,setLow] = useState(250)
    const [rangeHigh,setHigh] = useState(700)

    const [bed,setBed] = useState(3)
    const [bath,setBath] = useState(2)
    const [car,setCar] = useState(1)

    const selectType = (newType) =>{
        console.log("Selection " + newType);
        setType(newType)
    }


    return(
        <Animatable.View style={styles.container} easing="ease-out" animation={animation} duration={1200} onAnimationEnd={() => {animation === "bounceOutDown" ? closeModal() : null}}>


            <View style={styles.upper}></View>
            <View style={styles.lower}>
                <View style={styles.titleContainer}>
                    <Icon name="options" size={25} color="#58ACFA"/>
                    <Text style={styles.title}>Filter</Text>
                </View>
                <View style={styles.line} />
                <ScrollView showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <View>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>Listings</Text>
                    <SwitchButton value1="Buy" value2="Rent" handleSelect={selectType} selected={type}/>
                </View>
            
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>Price Range</Text>
                    <RangeSlider
                        style={{width: "100%", height: 80}}
                        min={200}
                        max={1000}
                        step={20}
                        initialLowValue={rangeLow}
                        initialHighValue={rangeHigh}
                        selectionColor="#0B7292"
                        blankColor="#58ACFA"
                        labelBackgroundColor="#58ACFA"
                        labelBorderColor="#58ACFA"
                        onValueChanged={(low, high) => {
                            setLow(low)
                            setHigh( high)
                        }}
                    />

                    <View style={styles.row}>
                        <Text style={styles.price}>{rangeLow}</Text>
                        <Text style={styles.price}>{rangeHigh}</Text>
                    </View>
                </View>
                
                <View style={styles.innerContainer}>
                     <Text style={styles.title}>Rooms</Text>
                     <RoomCount icon="bed" name="Bedrooms" value={bed} handleValue={(value) => {setBed(value)}}/>   
                     <RoomCount icon="shower" name="Bathrooms" value={bath} handleValue={(value) => {setBath(value)}}/>   
                     <RoomCount icon="car" name="Parking" value={car} handleValue={(value) => {setCar(value)}}/>   
                </View>
                <View style={styles.innerContainer}>
                        <TouchableOpacity onPress={() => {setAnimation("bounceOutDown");}} style={styles.buttonApply}>
                            <Text style={styles.btnText}>Apply Filter</Text>
                        </TouchableOpacity>
                </View>        
            </View>
            </ScrollView>
            </View>
        </Animatable.View> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    upper:{
        flex:0.3
    },
    lower:{
        backgroundColor:"white",
        flex:1,
        borderTopLeftRadius:80,
        padding:10,
        elevation:5,
        borderColor:"#000",
    },
    titleContainer:{
        flexDirection:"row",
        justifyContent:"center",
        padding:5
    },
    title:{
        fontSize:15,
        fontWeight:"bold",
        marginStart:5
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
        justifyContent:"space-around",
    },
    price:{
        color:"#0B7292",
        fontWeight:"bold"
    },
    buttonApply:{
        padding:10,
        backgroundColor:"#58ACFA",
        borderRadius:30,
        color:"#fff",
        alignItems:"center"
    },
    btnText:{
        color:"white"
        
    }





})

export default FilterDlg;