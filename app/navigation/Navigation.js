import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/FontAwesome";


import HomeScreenStack from "./HomeStack";
import AboutScreenStack from "./AboutStack";

const NavigationStacks = createDrawerNavigator(
    { 
        Home: {
            screen: HomeScreenStack,
            navigationOpcion:({ tintColor }) => ({
                drawerLabel: "Inicio",
                drawerIcon: () => (
                <Icon name="home" size={24} style={{color: "#000"}} />
                )
            })
        },
        About: {
            screen: AboutScreenStack,
            navigationOpcion:({ tintColor }) => ({
                drawerLabel: "Inicio",
                drawerIcon: () => (
                <Icon name="user" size={24} style={{color: "#000"}} />
                )
            })
        }
    },
    {
        drawerBackgroundColor: "#717171",
        contentOption:{
            ActiveTintColor: "White",
            inactiveTintColor: "While",
            itemsContainerStyles: {
                marginVertical: 0
            }
        }
    }
);

export default createAppContainer(NavigationStacks);