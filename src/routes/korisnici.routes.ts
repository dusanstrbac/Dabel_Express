import axios from "axios";
import { Router } from "express";
import https from 'https';

const korisnik = Router();
const agent = new https.Agent({ rejectUnauthorized: false });

korisnik.get('/', async (req, res) => {
    try {
        const response = await axios.get("https://localhost:7146/api/Korisnik/AllKorisnici", { httpsAgent: agent });
        res.json(response.data);
    }
    catch ( error ) {
        res.status(500).send('Interni error na serveru');
    }
});

korisnik.get('/:id', async ( req, res ) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`https://localhost:7146/korisnikid/${id}`, { httpsAgent: agent});
        res.json(response.data);
    }
    catch ( error ) {
        res.status(500).send("Greska prilikom preuzimanja korisnika");
    }
});

export default korisnik;