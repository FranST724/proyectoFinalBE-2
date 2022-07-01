import 'dotenv/config';

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;
const DB_NAME = process.env.DB_NAME;

export default {
	mongoDB: {
		URL: `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.8lz5w.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
		optiones: {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	}
};
