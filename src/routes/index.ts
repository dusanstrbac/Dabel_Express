import express from 'express';
import axios from 'axios';
import https from 'https';

const router = express.Router();

// Root ruta (opciono)
router.get('/', (req, res) => {
  res.send('API radi! ✅');
});


export default router;
