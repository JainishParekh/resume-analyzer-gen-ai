import 'dotenv/config';
import app  from './src/app.js';
import databaseConfig from './config/database.js';

databaseConfig.connectDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})