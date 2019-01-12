import { Platform } from 'react-native';

const PORT = '5000';
const PATH = 'tweets';

const android = `https://quiet-eyrie-26794.herokuapp.com/${PATH}`;//${PORT}/${PATH}`;
//PLEASE ENTER IP ADDRESS OF YOUR SYSTEM

//const android = `https://secret-inlet-64908.herokuapp.com/${PATH}`;
const ios = `https://quiet-eyrie-26794.herokuapp.com/${PATH}`;//`http://localhost:${PORT}/${PATH}`;

export const SERVER_URL = Platform.select({
	ios,
	android
});

export const IMAGE_URL = 'https://cdn.pixabay.com/photo/2016/11/29/04/19/beach-1867285_960_720.jpg';
