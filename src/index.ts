import express from 'express';
import bodyParser from 'body-parser';
import cookiesSession from 'cookie-session';
import UserServices from './services';
import UserControllers from './controllers';
const app = express();

app.use(bodyParser.json());
app.use(cookiesSession({ keys: ['abc'] }));

const userServices = UserServices();
const userControllers = UserControllers(userServices);

app.get('/allUsers', userControllers.getAllUsers);
app.post('/addUser', userControllers.addUser);

app.listen(3000, () => { });
