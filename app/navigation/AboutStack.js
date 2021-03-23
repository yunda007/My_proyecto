import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Icon from "react-native-vector-icons/FontAwesome";
import AboutScreen from "../screens/About";

const LeftIcon = (navigation, icon) => {
    <Icon
        name={icon}
        style={{marginLeft: 20}}
        size={20}
        color="#000"
        onPress={() => navigation.onDrawer()}
    />;
}

const AboutScreenStack = createStackNavigator({
    Home: {
        screen: AboutScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Inicio",
            headerLeft: () => LeftIcon(navigation, "bars")
        })
    }
})

export default AboutScreenStack;