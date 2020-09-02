import React from 'react';
import {View, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';


const SearchBar = () => {
    return(
        <View style={styles.searchSection}>
            
            <Icon style={styles.searchIcon} name="home-search-outline" size={20}/>
            <TextInput
                style={[styles.input, {height: Platform.OS == 'android' ? 40 : 20}]}
                placeholder="Search rental property"
                underlineColorAndroid="transparent"
                placeholderTextColor="gray"
            />
            
        </View>

    )
}

const styles = StyleSheet.create({
    searchSection: {
        borderRadius: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6EAEE',
        padding:20,
        marginStart:10,
        marginEnd:10,
        height:10,
        borderColor:"gray"
    },
    searchIcon: {
        padding: 10,
        color:"grey"
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#E6EAEE',
        color:'#000',
  
    },
    
})

export default SearchBar;