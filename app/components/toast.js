import React, {Component} from 'react'
import {ToastAndroid} from 'react-native'
import { connect } from 'react-redux'

class Toast extends Component {

    render() {
        const {msg} = this.props
        return(
            ToastAndroid.showWithGravityAndOffset(
                msg,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50
              )
        )
    }
}

export default connect(
    (state) => {state.message.showMessage},
    {}
)(Toast)