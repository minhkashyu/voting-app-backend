export default {
	'githubAuth': {
		'clientID': process.env.GITHUB_KEY,
		'clientSecret': process.env.GITHUB_SECRET,
		'callbackURL': process.env.API_URL + '/auth/github/callback'
	},
    'facebookAuth': {
        'clientID': process.env.FACEBOOK_KEY,
        'clientSecret': process.env.FACEBOOK_SECRET,
        'callbackURL': process.env.API_URL + '/auth/facebook/callback'
    },
    'twitterAuth': {
        'consumerKey': process.env.TWITTER_KEY,
        'consumerSecret': process.env.TWITTER_SECRET,
        'callbackURL': process.env.API_URL + '/auth/twitter/callback'
    },
    'googleAuth': {
        'clientID': process.env.GOOGLE_KEY,
        'clientSecret': process.env.GOOGLE_SECRET,
        'callbackURL': process.env.API_URL + '/auth/google/callback'
    }
};
