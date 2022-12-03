import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native'
import codePush from "react-native-code-push";


const App = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
            <View style={{height: 100, width: 300, alignItems:'center', justifyContent: 'center', backgroundColor: 'red'}} >
                <Text>OTA Testing  done 1 2 3 . . . . </Text>
            </View>
        </View>
    )
}

export default codePush(App)