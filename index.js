const express = require('express');
const app = express();

const { Pool, Client } = require('pg')
const connectionString = 'postgres://pdypewzcmiidot:ddf779b97e2cb698f922969424bc258f4d1649784be568a569a8c2be90ee7a9c@ec2-107-22-216-123.compute-1.amazonaws.com:5432/dmqe2uft63ru6?ssl=true'
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

app.post('/', (req, res) => {
  var { dato } = req.body;
  pool.query(`insert into datos(dato) values('${dato}')`);
  res.send(`agregado: ${dato}`);
})

app.get('/', (req, res) => {
  pool.query(`select * from datos`, (err, res2) => {
    res.send(res2);
    if (err) {
      res.send("error: " + err)
    }
  });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Escuchando en puerto ${PORT} ...`) })