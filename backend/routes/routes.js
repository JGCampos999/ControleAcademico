const express = require('express')
const app = express()
const AllowCors = require('./cors')
const sql = require('mssql')

const config = {
    user: 'Filipe',
    password: 'sou123eu',
    server: 'localhost',
    database: 'Siga2'
};

app.use(AllowCors);

app.post('/insere-falta/:ra_aluno/:codigo_d/:data/:presenca', (req, res)=>{
    let ra_aluno = req.params.ra_aluno
    let codigo_d = req.params.codigo_d
    let data = req.params.data
    let presenca = req.params.presenca

    request.query(`INSERT INTO Faltas VALUES ('${ra_aluno}', '${codigo_d}', '${data}', ${presenca});`,
    (err, recordset) => {
        if (err) {
            console.log(err)
        }
        res.status(200)
    })
})

app.post('/insere-nota/:ra_aluno/:codigo_d/:codigo_a/:nota', (req, res)=>{
    let ra_aluno = req.params.ra_aluno
    let codigo_d = req.params.codigo_d
    let codigo_a = req.params.codigo_a
    let nota = req.params.nota

    request.query(`INSERT INTO Notas VALUES ('${ra_aluno}', '${codigo_d}', '${codigo_a}', ${nota});`,
    (err, recordset) => {
        if (err) {
            console.log(err)
        }
        res.status(200)
    })
})

app.get('/notas-turma/:codigo_d', (req, res)=>{
    
})

app.get('/busca-aluno/:ra_aluno', (req, res)=>{
    let ra_aluno = req.params.ra_aluno
    request.query(`SELECT * FROM Aluno WHERE RA LIKE '%${ra_aluno}%'`,
    (err, recordset) => {
        if (err) {
            console.log(err)
        }
        res.json(recordset)
    })
})

app.get('/busca-av/:tipo/:codigo', (req, res)=>{
    let tipo = req.params.ra_aluno
    request.query(`SELECT * FROM Avalicao WHERE tipo LIKE '%${tipo}%'`,
    (err, recordset) => {
        if (err) {
            console.log(err)
        }
        res.json(recordset)
    })
})

app.get('/disciplinas', (req, res)=>{
    request.query("select * from Disciplina",
    (err, recordset) => {
        if (err) {
            console.log(err)
        }
        res.json(recordset)
    })
})

app.post('/cria-av/:tipo/:peso', (req, res)=>{

    let tipo = req.params.tipo
    let peso = req.params.peso

    request.query(`INSERT INTO Avaliacao VALUES('${tipo}', '${peso}');`,
    (err, recordset) => {
        if (err) {
            console.log(err)
        }
        res.status(200)
    })
})
 
app.post('/insere-falta/:codigo_d/:ra_aluno/:presenca', (req, res)=>{

    let codigo_d = req.params.codigo_d
    let ra_aluno = req.params.ra_aluno
    let presenca = req.params.presenca

    console.log(ra_aluno)

    request.query(`INSERT INTO Faltas VALUES('${ra_aluno}', '${codigo_d}', '01/01/2019', ${presenca});`,
    (err, recordset) => {
        if (err) {
            console.log(err)
        }
        res.status(200)
    })
})

app.listen(3001, ()=>{
    sql.connect(config).then(() => {
        console.log("server rodando")
    }).catch((err) => {
        console.log(err)
    });
    request = new sql.Request();
})