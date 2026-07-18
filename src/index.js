const express = require('express');
// Na vida real, importaria métodos/clientes do auth-service
// const authClient = require('@acme/auth-service/client');

const app = express();

app.post('/process', (req, res) => {
  // Lógica que depende da API de usuários estar de pé e sem alterações bruscas
  res.json({ status: 'approved' });
});

app.listen(3002, () => console.log('Payment Service rodando na 3002'));
