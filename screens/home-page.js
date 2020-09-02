import React from 'react';
import {View, TouchableOpacity,Text,SafeAreaView, StyleSheet} from 'react-native'
import SearchBar from '../components/search-bar';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import HorizontalList from '../components/horizontal-list-component';
import { ScrollView } from 'react-native-gesture-handler';
import RoundButton from '../components/round-button-component';


const Home = ({navigator}) => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.top}>
                    <Icon name="notifications-none" size={20} color="grey"/>
                    <Icon name="notifications-none" size={20} color="grey"/>
                </View>
                <View style={styles.searchSection}>
                    <View  style={styles.search}>
                        <SearchBar/>
                    </View>
                    <View style={styles.filter}>
                        <RoundButton  icon="filter-variant"/>
                    </View>
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

                <View style={styles.section_title}>
                    <Text style={styles.title}>Recommended for you</Text>
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
    searchSection:{
        flexDirection:"row",
        flex:1,
        justifyContent:"space-between"

    },
    search:{
        flex:1
    },
    filter:{
        paddingEnd:10
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
        paddingStart:20,
        paddingEnd:20,
        paddingTop:10,
    }

})
export default Home;