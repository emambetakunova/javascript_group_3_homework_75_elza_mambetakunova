const express = require('express');
const router = express.Router();
const Vigenere = require('caesar-salad').Vigenere;


router.post('/encode', (req, res) => {
    const encode = Vigenere.Cipher(req.body.password.replace(" ", '')).crypt(req.body.encode);
    res.send(encode);
});

router.post('/decode', (req, res) => {
    const decode = Vigenere.Decipher(req.body.password.replace(" ", '')).crypt(req.body.decode);
    res.send(decode);
});

module.exports = router;