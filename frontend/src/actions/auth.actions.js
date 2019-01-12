import { AsyncStorage } from 'react-native';

import {
	AUTH_DETAIL_CHANGE,
	LOG_IN,
	SET_ID,
	SET_EDIT_DEFAULTS,
	TWEET_VALUE_CHANGE,
	TWEET_VALUE_EDIT,
	FETCH_ALL_TWEETS,
	LOADING,
	DELETE_TWEET,
	CREATE_TWEET,
	EDIT_TWEET,
	NAME_VALUE_CHANGE,
	COMPANY_VALUE_CHANGE,
	PHONE_VALUE_CHANGE,
	NAME_VALUE_EDIT,
	COMPANY_VALUE_EDIT,
	PHONE_VALUE_EDIT,
	UPDATE_STORE
} from './types.actions';
import { logIn, fetchTweets, deleteTweet, createTweets, editTweet } from '../config/api';

export const authDetailChange = value => ({
	type: AUTH_DETAIL_CHANGE,
	payload: value
});

export const logInAction = ({ email, password }) => async dispatch => {
	const data = await logIn({ email, password });
	const { user } = data;
	await AsyncStorage.setItem('userToken', user.token);
	console.log(user.token);

	dispatch({ type: LOG_IN, payload: data });
};

export const tweetChange = value => ({
	type: TWEET_VALUE_CHANGE,
	payload: value
});

export const tweetChangeEdit = value => ({
	type: TWEET_VALUE_EDIT,
	payload: value
});


export const nameChange = value => ({
	type: NAME_VALUE_CHANGE,
	payload: value
});

export const companyChange = value => ({
	type: COMPANY_VALUE_CHANGE,
	payload: value
});

export const phoneChange = value => ({
	type: PHONE_VALUE_CHANGE,
	payload: value
});

export const setId = ({id}) => ({
	type: SET_ID, 
	payload: id 
});

export const updateStoreWithEditedValues = ({id, user, tweet, name, company, phone}) => ({
	type: UPDATE_STORE, 
	payload: {id, user, tweet, name, company, phone} 
});

export const nameChangeEdit = value => ({
	type: NAME_VALUE_EDIT,
	payload: value
});

export const companyChangeEdit = value => ({
	type: COMPANY_VALUE_EDIT,
	payload: value
});

export const setEditDefaults = ({name, phone, company, tweet}) => ({
	type: SET_EDIT_DEFAULTS, 
	payload: {name, phone, company, tweet} 
});

export const phoneChangeEdit = value => ({
	type: PHONE_VALUE_EDIT,
	payload: value
});

export const fetchTweetAction = () => async dispatch => {
	dispatch({ type: LOADING, payload: true });
	const data = await fetchTweets();
	dispatch({ type: FETCH_ALL_TWEETS, payload: data });
};

export const deleteTweetAction = ({ id }) => async dispatch => {
	const data = await deleteTweet({ id });
	dispatch({ type: DELETE_TWEET, payload: data });
};

export const createTweetAction = ({ user, tweet, name, company, phone }) => async dispatch => {
	const data = await createTweets({ user, tweet, name, company, phone });
	dispatch({ type: CREATE_TWEET, payload: data });
};

export const editTweetAction = ({ id, user, tweet, name, company, phone }) => async dispatch => {
	const data = await editTweet({ id, user, tweet, name, company, phone });
	dispatch({ type: EDIT_TWEET, payload: data });
};
