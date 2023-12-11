import React from "react";
import {View, Text, StyleSheet, KeyboardAvoidingViewBase, KeyboardAvoidingView} from 'react-native';

const bgImage = require("../assets/background2.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");



export default class Login extends Component{
    render(){
        return(<View>
            <Text>
                Tela de login
            </Text>
        </View>)
    }
    
};

render() {
    return(
        <KeyboardAvoidingView style = {styles.container}>

        </KeyboardAvoidingView>
    )

};
const styles = StyleSheet.create({
     container: {
        flex: 1, 
        backgroundColor: "#FFFFFF" },
    bgImage: 
        { flex: 1, resizeMode: "cover", justifyContent: "center" },
    upperContainer: 
        { flex: 0.5, justifyContent: "center", alignItems: "center" },
    appIcon: 
        { width: 280, height: 280, resizeMode: "contain", marginTop: 80 }, 
    appName: 
        { width: 180, resizeMode: "contain", marginBottom: 30 }, 
    lowerContainer: 
        { flex: 0.5, alignItems: "center" }, 
    textinput: 
        { width: "75%", height: 55, padding: 10, borderColor: "#FFFFFF", borderWidth: 4, borderRadius: 10, fontSize: 18, color: "#FFFFFF", fontFamily: "Rajdhani_600SemiBold", backgroundColor: "#5653D4" },
    button: 
        { width: "43%", height: 55, justifyContent: "center", alignItems: "center", backgroundColor: "#F48D20", borderRadius: 15 }, 
    buttonText: 
        { fontSize: 24, color: "#FFFFFF", fontFamily: "Rajdhani_600SemiBold" } });
