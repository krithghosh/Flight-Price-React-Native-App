import React, { Component } from 'react'
import { View, ToolbarAndroid, TouchableOpacity, Text, StatusBar, Image, BackHandler } from 'react-native'
import styles from '../stylesheets/toolbar'

class Toolbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const closeApp = () => {
            BackHandler.exitApp()
            return true
        }

        return(
            <View>
            <StatusBar backgroundColor='#0093b2' animated={true}/>    
            <View style={styles.toolbar}>
                <TouchableOpacity style={styles.imageContainer} activeOpacity = { .3 } onPress={closeApp}>
                    <Image style={styles.navIcon} source={require('../images/back.png')}/>
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>EDI - LOND</Text>
                    <Text style={styles.subTitle}>05 Mar – 06 Mar, 1 adult, economy</Text>
                </View>
            </View>
            </View>
        )
    }
}

export default Toolbar