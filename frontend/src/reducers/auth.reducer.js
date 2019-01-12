import {
	AUTH_DETAIL_CHANGE,
	TWEET_VALUE_CHANGE,
	TWEET_VALUE_EDIT,
	LOG_IN,
	SET_ID,
	FETCH_ALL_TWEETS,
	LOADING,
	DELETE_TWEET,
	CREATE_TWEET,
	PHONE_VALUE_CHANGE,
	COMPANY_VALUE_CHANGE,
	NAME_VALUE_CHANGE,
	PHONE_VALUE_EDIT,
	COMPANY_VALUE_EDIT,
	NAME_VALUE_EDIT,
	EDIT_TWEET,
	SET_EDIT_DEFAULTS,
	UPDATE_STORE
} from '../actions/types.actions';

const INITIAL_STATE = {
	email: '',
	password: '',
	tweet: '',
	tweets: [],
	name : '',
	phone : '',
	company : '',
	id:''
};

export default (state = INITIAL_STATE, actions) => {
	switch (actions.type) {

		case AUTH_DETAIL_CHANGE:
			return { ...state, [actions.payload.prop]: actions.payload.value };
		case TWEET_VALUE_CHANGE:
			return { ...state, [actions.payload.prop]: actions.payload.value };
		case NAME_VALUE_CHANGE:
			return { ...state, [actions.payload.prop]: actions.payload.value };
		case PHONE_VALUE_CHANGE:
			return { ...state, [actions.payload.prop]: actions.payload.value };
		case COMPANY_VALUE_CHANGE:
			return { ...state, [actions.payload.prop]: actions.payload.value };
	
		case NAME_VALUE_EDIT:
			return { ...state, [actions.payload.prop]: actions.payload.value };
		case PHONE_VALUE_EDIT:
			return { ...state, [actions.payload.prop]: actions.payload.value };
		case COMPANY_VALUE_EDIT:
			return { ...state, [actions.payload.prop]: actions.payload.value };
		case TWEET_VALUE_EDIT:
			return { ...state, [actions.payload.prop]: actions.payload.value };
		
		case LOG_IN:
			return { ...state };
		case FETCH_ALL_TWEETS:
			return { ...state, tweets: actions.payload, loading: false };
		case LOADING:
			return { ...state, loading: actions.payload };
		case DELETE_TWEET:
			return { ...state, tweets: actions.payload };
		case CREATE_TWEET:
			return { ...state, tweets: actions.payload, tweet: '',name: '', phone: '', company: '' };
		
		case SET_ID:

			return {...state,id:actions.payload};
		case EDIT_TWEET:
		console.log( { ...state, tweets: actions.payload, tweet: '',name: '', phone: '', company: '' }		)
			return { ...state, tweets: actions.payload, tweet: '',name: '', phone: '', company: '' };

	
		case SET_EDIT_DEFAULTS:
			return { ...state, name: actions.payload.name, phone: actions.payload.phone,company: actions.payload.company,tweet: actions.payload.tweet };
	
		case UPDATE_STORE:
			let tempState	=	{...state};
			tempState.tweets	=	tempState.tweets.map((value, index) => {
				if( value._id	==	state.id ){
					value.name	=	actions.payload.name;
					value.company	=	actions.payload.company;
					value.phone	=	actions.payload.phone;
					value.tweet=	actions.payload.tweet;
				}
				return value;
			})
			
			return {
				...tempState
			}

		default:
			return { ...state };
	}
};
