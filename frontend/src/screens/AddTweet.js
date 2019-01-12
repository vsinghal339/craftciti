import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { Button, DefaultTheme } from 'react-native-paper';

import { whiteColor, blueColor } from '../config/colors';
import { tweetChange, createTweetAction, nameChange, companyChange, phoneChange } from '../actions/auth.actions';

class AddTweet extends Component {
	static navigationOptions = {
		title: 'Add Info',
		headerVisible: true
	};

	addTweet = () => {
		if (true) {
			this.props.createTweetAction({
				user: 'user', 
				tweet: this.props.tweet, 
				name: this.props.name ,
				company : this.props.company, 
				phone : this.props.phone
			});
			this.props.navigation.navigate('newsFeed');
		}
	};

	render() {
		const { container, inputContainer, buttonContainer, button } = styles;

		return (
			<ScrollView
				style={{ backgroundColor: whiteColor }}
				showsVerticalScrollIndicator={false}
				keyboardShouldPersistTaps="always"
			>
				<View style={container}>
					<TouchableWithoutFeedback onPress={() => this.input.focus()}>
						<View style={inputContainer}>
							<TextInput
								autoFocus
								placeholderTextColor="#888"
								placeholder="Name"
								underlineColorAndroid="transparent"
								multiline
								onChangeText={value => this.props.nameChange({value, prop: 'name'})}
								value={this.props.name}
								ref = {input => (this.input = input)}
							/>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => this.input.focus()}>
						<View style={inputContainer}>
						<TextInput
							placeholderTextColor="#888"
							placeholder="Company"
							underlineColorAndroid="transparent"
							multiline
							onChangeText={value => this.props.companyChange({value, prop: 'company'})}
							value={this.props.company}
							ref = {input => (this.input = input)}
						/>
						</View>
					</TouchableWithoutFeedback>

					<TouchableWithoutFeedback onPress={() => this.input.focus()}>
						<View style={inputContainer}>
						<TextInput
							placeholderTextColor="#888"
							placeholder="Phone"
							underlineColorAndroid="transparent"
							multiline
							onChangeText={value => this.props.phoneChange({value, prop: 'phone'})}
							value={this.props.phone}
							ref = {input => (this.input = input)}
						/>
						</View>
					</TouchableWithoutFeedback>

					<TouchableWithoutFeedback onPress={() => this.input.focus()}>
						<View style={inputContainer}>
						<TextInput
							placeholderTextColor="#888"
							placeholder="Address..."
							underlineColorAndroid="transparent"
							multiline
							onChangeText={value => this.props.tweetChange({value, prop: 'tweet'})}
							value={this.props.tweet}
							ref = {input => (this.input = input)}
						/>
						</View>
					</TouchableWithoutFeedback>

					<View style={buttonContainer}>
						<Button
							color={blueColor}
							theme={{ ...DefaultTheme, roundness: 100 }}
							style={button}
							onPress={() => this.addTweet()}
							raised
						>
							add
						</Button>
					</View>
				</View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	button: {
		width: 100
	},
	buttonContainer: {
		alignItems: 'center',
		paddingTop: 15
	},
	// textInput: {},
	container: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: whiteColor
	},
	inputContainer: {
		minHeight: 10,
		backgroundColor: '#eee',
		borderRadius: 10,
		padding: 10,
		margin: 10
	},
	text: {
		fontSize: 22,
		fontWeight: 'bold'
	}
});

const mapStateToProp = state => {
	const { tweet , name, company, phone} = state.auth;
	console.log(state);
	return { tweet, name, company, phone };
};

export default connect(
	mapStateToProp,
	{ tweetChange, createTweetAction, nameChange, companyChange, phoneChange }
)(AddTweet);
