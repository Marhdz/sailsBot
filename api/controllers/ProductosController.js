/**
 * ProductosController
 *
 * @description :: Server-side logic for managing productos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list:function(req, res){
			Productos.find({}).exec(function(err, articles){
					if(err){
							res.send(500, {error: 'Database Error'});
					}
					res.send('list', {productos:productos});
			});
	},
};
