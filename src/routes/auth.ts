import axios from 'axios';
import { Router } from 'express';
import https from 'https';

const auth = Router();
const agent = new https.Agent({ rejectUnauthorized: false });

const MockKorisnik = {
    id: 5,
    email: 'test@gmail.com',
    password: 'test'
};

auth.post('/login', async ( req, res ) => {
    try {
        const { email, password } = req.body;
        const response = await axios.get(`https://localhost:7146/korisnikemail/${email}`, { httpsAgent: agent});
        const korisnik = response.data;

        if(!korisnik) {
            res.status(404).json({ message: 'Ovaj korisnik ne postoji u bazi podataka' });
        }

        if ( password !== korisnik.lozinka ) {
            res.status(401).json({ message: 'Uneli ste pogresnu lozinku' });
        }

        res.status(200).json({ message: 'Uspesno ste se ulogovali' });
    }
    catch ( error ) {
        console.log ( error );
    }
});

export default auth;
