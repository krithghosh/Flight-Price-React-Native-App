import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from '../app/store'
import Home from '../app/components/home'

const app = () => (
    <Provider store={store}>
        <Home />
    </Provider>
)

module.exports = app