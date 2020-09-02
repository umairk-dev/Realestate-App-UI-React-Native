import React from 'react';
import {View, TouchableOpacity,Text,SafeAreaView, StyleSheet} from 'react-native'
import SearchBar from '../components/search-bar';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import HorizontalList from '../components/horizontal-list-component';
import { ScrollView } from 'react-native-gesture-handler';


const Home = ({navigator}) => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.top}>
                <Icon name="notifications-none" size={20} color="grey"/>
                <Icon name="notifications-none" size={20} color="grey"/>
            </View>
            <View style={styles.search}>
                <SearchBar />
            </View>
            <View style={styles.section_title}>
                <Text style={styles.title}>Popular Nearby</Text>
                <TouchableOpacity >
                    <Text style={styles.button}>View All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.horizontalList}>
                <HorizontalList/>
            </View>
                
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"#fff"
        
    },
    search:{
        marginTop:20
    },
    top:{
        flexDirection:"row",
        margin:5,
        justifyContent:"space-between",
        padding:5
    },
    horizontalList:{
        flex:1,
        padding:5
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
    },
    button:{
        color: "#58ACFA",
        fontWeight:"bold"
    },
    section_title:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20
        
    }

})
export default Home;