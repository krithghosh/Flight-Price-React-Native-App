import {StyleSheet} from 'react-native'

export default StyleSheet.create({
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
    }
})