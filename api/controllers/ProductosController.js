/**
 * ProductosController
 *
 * @description :: Server-side logic for managing productos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list:function(req, res){
			Productos.find({}).exec(function(err, productos){
					if(err){
							res.send(500, {error: 'Database Error'});
					}
					res.json(productos);
					// productos.forEach(function(producto){console.log(producto.nombre)});
			});

	},
};
