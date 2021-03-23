import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeScreen from "../screens/Home";

const LeftIcon = (navigation, icon) => {
    <Icon
        name={icon}
        style={{marginLeft: 20}}
        size={20}
        color="#000"
        onPress={() => navigation.onDrawer()}
    />;
}

const HomeScreenStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Inicio",
            headerLeft: () => LeftIcon(navigation, "bars")
        })
    }
})

export default HomeScreenStack;