import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    toolbar: {
        height: 60, 
        alignSelf: 'stretch',
        backgroundColor: '#03B0D5',
        flexDirection: 'row'
    },
    navIcon: {
        marginLeft: 16,
        width: 20, 
        height: 20,
        alignSelf: 'center'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flexDirection: 'column', 
        flex: 1, 
        backgroundColor: '#EFEFEF'
    },
    upperBar: {
        backgroundColor: '#FAFAFA',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 4}
    },
    titleText: {
        color: '#544C63',
        fontSize: 14,
        fontWeight: "400",
        fontFamily: 'Helvetica',
        marginLeft: 8,
        marginRight: 8
    },
    card: {
        borderRadius: 2, 
        marginTop: 4, 
        marginLeft: 8, 
        marginRight: 8, 
        marginBottom: 4,
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
    agentView: {
        marginTop: 4, 
        marginRight:8, 
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },
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