import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    toolbar: {
        height: 60, 
        alignSelf: 'stretch',
        backgroundColor: '#03B0D5',
        flexDirection: 'row'
    },
    imageContainer: {
        marginLeft: 16,
        alignSelf: 'center'
    },
    navIcon: {
        width: 20, 
        height: 20,
    },
    titleContainer: {
        marginLeft: 32, 
        alignSelf: 'center', 
        flexDirection: 'column'
    },
    title: {
        color:'white', 
        fontSize: 16
    },
    subTitle: {
        color:'rgba(255,255,255,0.70)', 
        fontSize: 12
    }
})