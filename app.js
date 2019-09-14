//  Es6 imports test
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routerEvent from './src/routes/events';

const app = express();

const connectDb = async () => {
  await mongoose.connect('mongodb://localhost:27017/db', {
    useUnifiedTopology: true
  });
};

connectDb();

app.use(bodyParser.json());

//  k8s healthcheck
app.get('/', (req, res) => {
  res.send({ message: 'ok'});
});

// app.use('/', users);

app.use('/', routerEvent);

app.listen(process.env.PORT || 3000, () => {
  console.log(`I am started on port ${process.env.PORT || 3000}`);
});
