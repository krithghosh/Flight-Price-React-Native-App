import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    carrierImage: {
        width: 20, 
        height: 20
    },
    boundContainer: {
        flex:1, 
        flexDirection: 'column'
    },
    dateTimeContainer: {
        marginBottom: 4,        
        marginLeft: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    timeContainer: {
        marginTop: 8, 
        marginLeft:8, 
        marginRight: 8, 
        flexDirection: 'row', 
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
    upperText: {
        color: '#544C63',
        fontSize: 14,
        fontWeight: "400",
        fontFamily: 'Helvetica'
    },
    lowerText: {
        color: 'rgba(137,130,148,0.74)',
        fontSize: 11,
        fontWeight: "100",
        fontFamily: 'Helvetica'
    }
})