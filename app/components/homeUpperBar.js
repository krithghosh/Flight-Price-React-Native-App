import React, {Component} from 'react'
import { connect } from 'react-redux'
import styles from '../stylesheets/upperBar'
import { ScrollView, View, Text, ActivityIndicator } from 'react-native'

class HomeUpperBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const resultKey = (val) => { return (val > 1) ? ' results': 'result' }
        const currentSize = this.props.itineraries.length
        const totalSize = this.props.allItineraries.length
        return(
        <View style={styles.upperBar}>
            <Text style={styles.titleText}>{currentSize + ' of ' + totalSize + resultKey(totalSize)}</Text>
            <Text style={styles.titleText}>SORT & FILTERS</Text>
        </View>)
    }
}

export default connect(
    (state) => ({allItineraries: state.livePrice.allItineraries, 
                 itineraries: state.livePrice.itineraries}),
    {}
)(HomeUpperBar)