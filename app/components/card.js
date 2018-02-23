import React, {Component} from 'react'
import { connect } from 'react-redux'
import styles from '../stylesheets/card'
import { getFlightTime, getTimeDifferenceHours } from '../utils/appUtils'
import { Image, ScrollView, View, Text, ActivityIndicator } from 'react-native'

class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
            const legId = this.props.legId
            var legs = this.props.legs.filter(leg => leg.Id === legId)
            var leg = legs[0]
            
            var departureTime = getFlightTime(leg.Departure)
            var arrivalTime = getFlightTime(leg.Arrival)
            var durationResult = getTimeDifferenceHours(leg.Duration)

            var carriers = this.props.carriers
                                     .filter(carrier => leg.Carriers[0] === carrier.Id)
            var carrier = carriers[0]

            var originPlace = this.props.places
                                        .filter(place => leg.OriginStation === place.Id)
            
            var destinationPlace = this.props.places
                                             .filter(place => leg.DestinationStation === place.Id)
            
            var originCode = originPlace[0].Code
            var destinationCode = destinationPlace[0].Code

            // Display results
            const timeResult = departureTime + ' - ' + arrivalTime
            const placeResult = originCode + '-' + destinationCode + ',' + ' ' + carrier.Name
            const imageResult = carrier.ImageUrl
            const stopsLength = leg.Stops.length
            const stops = (stopsLength === 0) 
                            ? 'Direct'
                            : stopsLength > 1 ? stopsLength + ' Stops': stopsLength + ' Stop' 

            return (
                <View style={{marginTop: 4, marginBottom: 4, flexDirection: 'row'}}>
                    <Image style={styles.carrierImage} source={{uri: imageResult}}/>
                    <View style={styles.boundContainer}>
                        <View style={styles.dateTimeContainer}>
                            <Text style={styles.upperText}>{timeResult}</Text>
                            <Text style={styles.upperText}>{stops}</Text>
                        </View>
                        <View style={styles.dateTimeContainer}>
                            <Text style={styles.lowerText}>{placeResult}</Text>
                            <Text style={styles.lowerText}>{durationResult}</Text>
                        </View>
                    </View>
                </View>
            )
    }
}

export default connect(
    (state) => ({legs: state.livePrice.legs,
                 currencies: state.livePrice.currencies,
                 carriers: state.livePrice.carriers,
                 agents: state.livePrice.agents,
                 places: state.livePrice.places}),
    { }
)(Card)