import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { Button, DefaultTheme } from 'react-native-paper';

import { whiteColor, blueColor } from '../config/colors';
import { tweetChangeEdit, updateStoreWithEditedValues, setEditDefaults,editTweetAction, nameChangeEdit, companyChangeEdit, phoneChangeEdit } from '../actions/auth.actions';
import { fetchTweetAction } from '../actions';

class EditTweet extends Component {
	static navigationOptions = {
		title: 'Edit',
		headerVisible: true
	};

	componentDidMount() {
		var statedData	=	this.props.tweets.filter((value)=>{
			return this.props.id	==	value._id
		})
		statedData	=	{...statedData[0]};
		this.props.setEditDefaults( { name : statedData.name, phone: statedData.phone, company:statedData.company, tweet:statedData.tweet} );
	}

	editTweet = (id, name, phone, company, tweet) => {
		if (true) {
			this.props.editTweetAction({ 
				id :id, 
				user: 'user', 
				tweet:tweet, 
				name: name , 
				company : company, 
				phone : phone
			});
			this.props.updateStoreWithEditedValues( {
				id :id, 
				user: 'user', 
				tweet: tweet, 
				name: name , 
				company : company, 
				phone : phone
			} )
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
								onChangeText={value => this.props.nameChangeEdit({value, prop: 'name'})}
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
							onChangeText={value => this.props.companyChangeEdit({value, prop: 'company'})}
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
							onChangeText={value => this.props.phoneChangeEdit({value, prop: 'phone'})}
							value={this.props.phone}
							ref = {input => (this.input = input)}
						/>
						</View>
					</TouchableWithoutFeedback>

					<TouchableWithoutFeedback onPress={() => this.input.focus()}>
						<View style={inputContainer}>
							<TextInput
								onChangeText={value => this.props.tweetChangeEdit({ value, prop: 'tweet' })}
								value={this.props.tweet}
								placeholderTextColor="#888"
								placeholder="Address..."
								underlineColorAndroid="transparent"
								multiline
								ref={input => (this.input = input)}
							/>
						</View>
					</TouchableWithoutFeedback>

					<View style={buttonContainer}>
						<Button
							color={blueColor}
							theme={{ ...DefaultTheme, roundness: 100 }}
							style={button}
							onPress={() => this.editTweet(this.props.id, this.props.name, this.props.phone,this.props.company, this.props.tweet)}
							raised
						>
							Update
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
	return { id: state.auth.id, tweets: state.auth.tweets, name: state.auth.name, phone : state.auth.phone, company: state.auth.company, tweet : state.auth.tweet };
};

export default connect(
	mapStateToProp,
	{fetchTweetAction, updateStoreWithEditedValues, tweetChangeEdit, editTweetAction, nameChangeEdit, setEditDefaults,companyChangeEdit, phoneChangeEdit }
)(EditTweet);
