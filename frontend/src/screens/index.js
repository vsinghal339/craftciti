import { createStackNavigator } from 'react-navigation';

import NewsFeed from './NewsFeed';
import AddTweet from './AddTweet';
import EditTweet from './EditTweet'

const Navigator = createStackNavigator(
	{
		newsFeed: NewsFeed,
		addTweet: AddTweet,
		editTweet : EditTweet
	},
	{
		initialRouteName: 'newsFeed',
		backBehavior: 'initialRoute'
	}
);

export default Navigator;
