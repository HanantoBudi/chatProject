import React from 'react';
import {SafeAreaView, Text, TextInput, Alert, TouchableOpacity, AsyncStorage} from 'react-native';
import User from '../User';
import styles from '../constant/styles';
import firebase from 'firebase';

export default class ProfileScreen extends React.Component {
    static navigationOption = {
        title:'Profile'
    }

    state = {
        name: User.name
    }

    handleChange = key => val => {
        this.setState({[key]:val})
    }

    changeName = async () => {
        if (this.state.name.lenght < 3) {
            Alert.alert('Error', 'Please enter valid name');
        } else if (User.name !== this.state.name) {
            firebase.database().ref('users').child(User.phone).set({name:this.state.name});
            User.name = this.state.name;
            Alert.alert('Success', 'Name changed successful.');
        }
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Text style={{fontSize:20}}>
                    {User.phone}
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={this.handleChange('name')}
                />
                <TouchableOpacity onPress={this.changeName}>
                    <Text style={styles.btnText}>Change Name</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.logOut}>
                    <Text style={styles.btnText}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}