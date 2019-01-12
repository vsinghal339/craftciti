import Tweet from '../models/Tweet';

export const createTweet = (req, res) => {
	const { user, tweet, phone, name, company } = req.body;
	const newTweet = new Tweet({ user, tweet, phone, name, company });

	newTweet
		.save()
		.then(() => Tweet.find())
		.then(val => res.json(val)).catch();
};

export const viewTweet = (req, res) => {
	Tweet.find().then(() => {
		Tweet.find().then(val => res.json(val));
	});
};

export const editTweet = (req, res) => {
	const {id, tweet, name, company, phone } = req.body;
	Tweet.update({_id:id}, {tweet, name, company, phone}, {upsert: true},(err, results) => {
		if(err) {
			throw err;
		};
		
	})
}

export const deleteTweet = (req, res) => {
	const { id } = req.body;
	Tweet.findByIdAndRemove(id).then(val => {
		Tweet.find().then(val => res.json(val));
	});
};
