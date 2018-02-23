import React, {Component} from 'react'
import { connect } from 'react-redux'
import styles from '../stylesheets/itineraryList'
import Card from '../components/card'
import { fetchMoreLivePrices } from '../actions/livePrice'
import { ScrollView, View, Text, ActivityIndicator, List, FlatList } from 'react-native'

class ItineraryList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {currencies} = this.props

        const legs = ({item}) => {
            if(item === undefined) return null
            return (
                <View style={styles.card}>
                    <View style={styles.timeDetailContainer}>
                        <Card key={1} legId={item.OutboundLegId}/>
                        <Card key={2} legId={item.InboundLegId} />
                    </View>
                    <View style={styles.horizontalLine}/>
                    <View style={styles.priceContainer}>
                        {price(item.PricingOptions[0].Price)}
                        {agent(item.PricingOptions[0].Agents[0])}
                    </View>
                </View>
            )
        }

        const price = (itineraryPrice) => {
            return (
                <View style={styles.priceView}>
                    <Text style={styles.upperText}>
                        {currencies[0].Symbol + itineraryPrice}
                    </Text>
                </View>
            )
        }

        const agent = (agentId) => {
            return(
                <View style={styles.agentView}>
                    {this.props.agents
                        .filter(agent => agent.Id === agentId)
                        .map(agent => (
                            <Text key={agent.Id} style={styles.lowerText}>
                                via {agent.Name}
                            </Text>
                        ))}
                </View>
            )
        }

        return(
            <FlatList
                data={this.props.itineraries}
                keyExtractor={(item, index) => index.toString()}
                renderItem={legs}
                onEndReachedThreshold={0.5}
                onEndReached={this.props.fetchMoreLivePrices}
            />
        )
    }
}

export default connect(
    (state) => ({itineraries: state.livePrice.itineraries,
                 legs: state.livePrice.legs,
                 currencies: state.livePrice.currencies,
                 carriers: state.livePrice.carriers,
                 agents: state.livePrice.agents,
                 places: state.livePrice.places}),
    {fetchMoreLivePrices}
)(ItineraryList)