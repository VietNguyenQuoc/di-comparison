import express from 'express';
import bodyParser from 'body-parser';
import cookiesSession from 'cookie-session';
import * as userControllers from './controllers';
const app = express();

app.use(bodyParser.json());
app.use(cookiesSession({ keys: ['abc'] }));

app.get('/allUsers', userControllers.getAllUsersCtl);
app.post('/addUser', userControllers.addUserCtl);

app.listen(3000, () => { });
