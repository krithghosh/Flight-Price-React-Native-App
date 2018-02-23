import React, {Component} from 'react'
import { connect } from 'react-redux'
import styles from '../stylesheets/loader'
import { ScrollView, View, Text, ActivityIndicator } from 'react-native'

class Loader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <View style={styles.loading}>
            <ActivityIndicator size="large" color="#03B0D5"/>
        </View>)
    }
}

export default connect(
    (state) => ({isLoading: state.livePrice.isLoading}),
    {}
)(Loader)