import dotenv from 'dotenv';
dotenv.config();
let productosDao;
let carritosDao;

switch (process.env.DB_CONNECTION) {
	case 'mongoDB':
		import('./productos/productosDaoMongoDb.js').then(({ MongoDBProductos }) => {
			productosDao = new MongoDBProductos();
		});
		import('./carritos/carritosDaoMongoDb.js').then(({ MongoDBCarritos }) => {
			carritosDao = new MongoDBCarritos();
		});
		break;
	case 'firebase':
		import('./productos/productosDaoFirebase').then(({ FirebaseProductos }) => {
			productosDao = new FirebaseProductos();
		});
		import('./carritos/carritosDaoFirebase').then(({ FirebaseCarrito }) => {
			carritosDao = new FirebaseCarrito();
		});
		break;
	default:
		console.log('Esta en default');
		break;
}

export { productosDao, carritosDao };
