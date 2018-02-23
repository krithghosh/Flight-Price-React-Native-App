import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 108,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 3,
        borderColor: '#BDBDBD',
        padding: 8
    },
    buttonTitle: {
        color: '#544C63',
        fontSize: 16,
        fontWeight: "400",
        fontFamily: 'Helvetica'
    },
    message: {
        marginTop: 16,
        color: '#544C63',
        fontSize: 17,
        fontWeight: "400",
        fontFamily: 'Helvetica'
    }
})