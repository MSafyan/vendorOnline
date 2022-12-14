const { decode } = require('../utils/jwt.utils');

const deserializeUser = async (req, res, next) => {
	// get token from cookie
	const token = req.cookies.token;
	// console.log(req.cookies);

	if (!token) return next();

	const { valid, expired, decoded } = decode(token);
	console.log(decoded);

	if (!valid) {
		res.clearCookie('token');

		return next();
	}

	if (expired) {
		res.clearCookie('token');

		return next();
	}

	req.user = decoded;

	next();
};

module.exports = deserializeUser;
