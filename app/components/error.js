import React, {Component} from 'react'
import { View, TouchableOpacity, Text} from 'react-native'
import styles from '../stylesheets/error'
import { connect } from 'react-redux'
import { fetchLivePrices } from '../actions/livePrice'

class Error extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const handleOnClick = () => {
            this.props.fetchLivePrices()
        }

        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleOnClick}>
                    <Text style={styles.buttonTitle}>Retry</Text>
                </TouchableOpacity>
                <Text style={styles.message}>{this.props.errorMessage}</Text>
            </View>
        )
    }
}

export default connect(
    (state) => ({errorMessage: state.livePrice.errorMessage}),
    { fetchLivePrices }
)(Error)