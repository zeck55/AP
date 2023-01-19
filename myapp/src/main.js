import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
/*
const mongodb = requier('mongodb');

const MongoClient = mongodb.MongoClient;

const connectionString = 'mongodb://admin:admin@mongodb://localhost:27017/Kundendaten';

MongoClient.connect(connectionString, {autoReconnect: true}, (err,dateabase) =>{
  if (err) {
    console.log('Failed to connect on the database .' , err,message);
    process.exit(1);
  }

  console.log('Connected !');
}); */
