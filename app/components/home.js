import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeUpperBar from '../components/homeUpperBar'
import Toolbar from '../components/toolbar'
import Loader from '../components/loader'
import Toast from '../components/toast'
import Error from '../components/error'
import ItineraryList from '../components/itineraryList'
import { fetchLivePrices } from '../actions/livePrice'
import styles from '../stylesheets/home'
import { ScrollView, View, Text, ActivityIndicator, ToolbarAndroid } from 'react-native'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if(this.props.itineraries === undefined || this.props.itineraries.length === 0) {
            this.props.fetchLivePrices()
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Toolbar />
                {this.props.networkError ? <Error /> : null}
                {this.props.isLoading ? <Loader /> : null}
                {this.props.itineraries.length > 0 ? <HomeUpperBar /> : null}
                {this.props.itineraries.length > 0 ? <ItineraryList /> : null}
            </View>
        )
    }
}

export default connect(
    (state) => ({allItineraries: state.livePrice.allItineraries,
                 itineraries: state.livePrice.itineraries,
                 legs: state.livePrice.legs,
                 segments: state.livePrice.segments,
                 currencies: state.livePrice.currencies,
                 agents: state.livePrice.agents,
                 carriers: state.livePrice.carriers,
                 places: state.livePrice.places,
                 isLoading: state.livePrice.isLoading,
                 networkError: state.livePrice.networkError,
                 errorMessage: state.livePrice.errorMessage}),
    { fetchLivePrices }
)(Home)