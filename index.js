const express = require('express');
const app = express();

const { Pool, Client } = require('pg')
const connectionString = 'postgres://bzijorxrsqakbv:b7a96af5c04282ee942f759ca862a1bbdaf05e528fa392eff300e039c98d6358@ec2-107-22-234-204.compute-1.amazonaws.com:5432/d4o7frdi5ou1qk?ssl=true'
const pool = new Pool({
  connectionString: connectionString
})


app.get('/dato/:dato', (req, res) => {
  const dato = req.params.dato;
  pool.query(`insert into datos(dato) values('${dato}')`);
  res.send('agregado');
})

app.get('/:dato', (req, res) => {
  const dato = req.params.dato;
  pool.query(`insert into datos(dato) values('${dato}')`);
  res.send('agregado');
})

app.post('/dato', (req, res) => {
  if (!req.body.dato) {
    res.send("dato no enviado");
  } else {
    var dato = req.body.dato;
    pool.query(`insert into datos(dato) values('${dato}')`);
    res.send(`agregado: ${dato}`);
  }

})

app.get('/', (req, res) => {
  pool.query(`select * from datos`, (err, res2) => {
    res.send(res2.rows);
    if (err) {
      res.send("error: " + err)
    }
  });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Escuchando en puerto ${PORT} ...`) })