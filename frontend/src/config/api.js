import { SERVER_URL } from './constants';

const tweetUrl = SERVER_URL;

const config = (url, method, body) =>
	fetch(url, {
		method,
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	}).then(response => response.json());

export const fetchTweets = () => fetch(tweetUrl).then(res => res.json());

export const createTweets = ({ user, tweet, name, company, phone }) => config(tweetUrl, 'POST', { user, tweet, name, company, phone });

export const deleteTweet = ({ id }) => config(tweetUrl, 'DELETE', { id });

export const editTweet = ({ id, tweet, name, company, phone }) => config(tweetUrl, 'PUT', { id, tweet, name, company, phone});