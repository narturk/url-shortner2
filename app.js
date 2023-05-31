import express from 'express';
const app = express();
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: __dirname + '/db/.env' });
import connectToDB from './db/DBMongoose.js';
import indexRoute from './routes/index.js'
import getRoute from './routes/getShortURL.js'

connectToDB();

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
});

app.use('/api', indexRoute);
app.use('/', getRoute);
