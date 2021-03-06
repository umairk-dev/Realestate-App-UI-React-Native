import 'react-native-gesture-handler';
import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/detail-page';
import Home from '../screens/home-page';

const Stack = createStackNavigator();

function HomeNav({navigation}){
    return(
    <Stack.Navigator>
         <Stack.Screen name="Home" component={Home}  
            options={{ 
                headerTransparent:true,  
                title:'',
                headerTintColor: '#fff'
            }}
        />
        <Stack.Screen name="Detail" component={Detail} 
            options={{ 
                headerTransparent:true,  
                title:'',
                headerTintColor: 'transparent'
            }}
        />
       
    </Stack.Navigator>


    )
}

export default HomeNav;