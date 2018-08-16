/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	//BotController tiene getUser
	find: (req, res) => {

			User.find().exec((err, users) => {

					if (err) {
							sails.log.debug(err);
							return res.serverError(err);
					}

					return res.json(users);
			});
	},
	findOne: (req, res) => {
			const id = req.param('id');

			User.find( id ).exec((err, users) => {

					if (err) {
							sails.log.debug(err);
							return res.serverError(err);
					}

					return res.json(users);
			});
	},
	update: (req, res) => {
			const id = req.param('id');
			const params = req.allParams();
			User.update( id, params ).exec((err, user) => {
					if (err) {
							sails.log.debug(err);
							return res.serverError(err);
					}

					return res.json(user);
			});
	},
};
