//importing
import express from 'express';
//app config
const app = express();
import chat from './data';
import mongoose from 'mongoose';
import colors from 'colors';

//middleware
import dotenv from "dotenv";
dotenv.config();

app.use(express.json());

import { notFound, errorHandler } from './middleware/errorMiddleware';


//database connection
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: ".red.bold));
db.once("open", function () {
  console.log("Database Connected successfully".cyan.underline);
});
//.....................................................................................

//api route
import userRoutes from './routes/userRoutes';
import chatRoutes from "./routes/chatRoutes";
app.get('/', (req, res) => {
    res.send('hello world !');
})
app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
//listening
app.listen(5000, console.log('started on port 5000'.yellow.bold));


