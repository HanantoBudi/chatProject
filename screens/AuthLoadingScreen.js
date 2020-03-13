import React from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import User from '../User';

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyAFzzbeyZ-MB9Fg9qzgMZ53JW9kQnpdAmc",
            authDomain: "awesomeproject-bea33.firebaseapp.com",
            databaseURL: "https://awesomeproject-bea33.firebaseio.com",
            projectId: "awesomeproject-bea33",
            storageBucket: "",
            messagingSenderId: "873434102250",
            appId: "1:873434102250:web:822bd94d3de75b2f"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userPhone');
        this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
    }

    render() {
        return (
            <View>
                <ActivityIndicator></ActivityIndicator>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}