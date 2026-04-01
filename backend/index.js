import 'dotenv/config';
import app  from './src/app.js';
import databaseConfig from './config/database.js';

databaseConfig.connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})