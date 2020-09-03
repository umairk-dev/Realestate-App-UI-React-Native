
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Favorite from '../screens/favorite-page';
import Chat from '../screens/chat-page';
import Profile from '../screens/profile-page';
import HomeNav from './home-nav-component';
import Detail from '../screens/detail-page';
import Home from '../screens/home-page';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function Main() {
    return (
      <Stack.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    );
  }

const BottomNav = ({navigation}) => {


    
    return (
      <Tab.Navigator

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'HomeNav') {
                        iconName = 'home-outline';
                    } else if (route.name === 'Chat') {
                        iconName = 'chat-outline';
                    }else if (route.name === 'Favorite') {
                        iconName = 'heart-outline';
                    }else if (route.name === 'Profile') {
                        iconName = 'account-outline';
                    }                    
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}

            tabBarOptions={{
                activeTintColor: '#58ACFA',
                inactiveTintColor: 'gray',
                safeAreaInsets:false,
                style:{
                    borderTopStartRadius:40,
                    borderTopEndRadius:40,
                    backgroundColor:"#ffffff",
                    padding:10
                }
            }}
        >
         
            <Tab.Screen name="HomeNav" component={HomeNav} />

            <Tab.Screen name="Favorite" component={Favorite} options={{ title:"", }}/>
        
            <Tab.Screen name="Chat" component={Chat} options={{ title:"", }}/>
            
            <Tab.Screen name="Profile" component={Profile} options={{ title:"", }}/>


      </Tab.Navigator>

    );
  }



  
const styles = StyleSheet.create({
    tabs:{
      flex:1,
      alignItems:"baseline",
      justifyContent:"center",
    },
   
 });

  export default BottomNav;