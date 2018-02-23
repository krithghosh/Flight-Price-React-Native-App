import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    card: {
        borderRadius: 2, 
        marginTop: 4, 
        marginLeft: 8, 
        marginRight: 8, 
        marginBottom: 4,
        backgroundColor: 'white'
    },
    timeDetailContainer: {
        marginTop: 8, 
        marginLeft:8, 
        marginRight: 8,
        marginBottom: 8,
        flexDirection: 'column', 
        backgroundColor: 'white'
    },
    horizontalLine: {
        height: 1, 
        backgroundColor: '#EAEAEA'
    },
    priceContainer: {
        flex: 1, 
        flexDirection: 'column',
        marginBottom: 8
    },
    priceView: {
        marginTop: 4, 
        marginRight:8, 
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },
    upperText: {
        color: '#544C63',
        fontSize: 14,
        fontWeight: "400",
        fontFamily: 'Helvetica'
    },
    agentView: {
        marginTop: 4, 
        marginRight:8, 
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },
    lowerText: {
        color: 'rgba(137,130,148,0.74)',
        fontSize: 11,
        fontWeight: "100",
        fontFamily: 'Helvetica'
    }
})