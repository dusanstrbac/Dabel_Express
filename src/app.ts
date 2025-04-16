import express from 'express';
const axios = require('axios');
const https = require('https')
import indexRouter from './routes/index';
import korisnikRuter from './routes/korisnici.routes';
import loginRouter from './routes/auth'

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', indexRouter);
app.use('/api/korisnici', korisnikRuter)
app.use('/api/auth', loginRouter);

// Ignorisanje sertifikata ( za pocetak dok se ne kreira sertifikat )
const agent = new https.Agent({
  rejectUnauthorized : false
})

export default app;
