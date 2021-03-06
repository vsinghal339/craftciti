import { Router } from 'express';
import {
	createTweet,
	viewTweet,
	deleteTweet,
	editTweet
} from './controller/tweet_controller';

const router = new Router();

router
	.post('/tweets', createTweet)
	.get('/tweets', viewTweet)
	.delete('/tweets', deleteTweet)
	.put('/tweets', editTweet)

export default router;
