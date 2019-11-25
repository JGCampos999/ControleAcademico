const express = require('express')
const app = express()
const AllowCors = require('./cors')
const sql = require('mssql')

const config = {
    user: 'Filipe',
    password: 'sou123eu',
    server: 'localhost',
    database: 'Siga3'
};

app.use(AllowCors);

app.post('/insere-falta/:ra_aluno/:codigo_d/:data/:presenca', (req, res) => {
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

app.post('/insere-nota/:ra_aluno/:codigo_d/:codigo_a/:nota', (req, res) => {
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

app.get('/notas-turma/:codigo_d', (req, res) => {
    let codigo_d = req.params.codigo_d
    request.query(`SELECT	fn.ra AS RA_Aluno, al.nome AS Nome_Aluno,
    dc.nome AS Disciplina, fn.nota1 AS Nota1, fn.nota2 AS Nota2,
    CASE WHEN (fn.nota3 IS NULL) THEN
        0
    ELSE
        fn.nota3
    END AS Nota3,
    CASE WHEN (fn.t IS NULL) THEN
        0
    ELSE
        fn.t
    END AS Nota_Trabalho,
    CASE WHEN (fn.ef IS NULL) THEN
        0
    ELSE
        fn.ef
    END AS Exame_Final,
    fn.media AS Media_Final, fn.situacao AS Situacao
FROM fn_turma('${codigo_d}') fn
INNER JOIN Aluno al
ON al.ra = fn.ra
INNER JOIN Disciplina dc
ON dc.codigo = fn.disc`, (err, recordset) => {
        res.send(recordset)
    })
})

app.get('/busca-aluno/:ra_aluno', (req, res) => {
    let ra_aluno = req.params.ra_aluno
    request.query(`SELECT * FROM Aluno WHERE RA LIKE '%${ra_aluno}%'`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
            res.json(recordset)
        })
})

app.get('/busca-av/:tipo/:codigo', (req, res) => {
    let tipo = req.params.ra_aluno
    request.query(`SELECT * FROM Avalicao WHERE tipo LIKE '%${tipo}%'`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
            res.json(recordset)
        })
})

app.get('/disciplinas', (req, res) => {
    request.query("select * from Disciplina",
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
            res.json(recordset)
        })
})

app.post('/cria-av/:tipo/:peso', (req, res) => {

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

app.get('/avaliacao/:codigo_d/:tipo', (req, res) => {

    let tipo = req.params.tipo
    let codigo_d = req.params.codigo_d

    request.query(`SELECT av.codigo FROM Avaliacao av
    INNER JOIN Disciplina_Avaliacao da
    ON da.codigo_A = av.codigo
    INNER JOIN Disciplina dc
    ON da.codigo_D = dc.codigo
    WHERE dc.codigo = '${codigo_d}' AND av.tipo = '${tipo}'`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            } 
            res.json(recordset)
        })
})


app.post('/insere-nota/:codigo_d/:ra_aluno/:nota/:codigo_a', (req, res) => {

    let codigo_d = req.params.codigo_d
    let ra_aluno = req.params.ra_aluno
    let nota = req.params.nota
    let codigo_a = req.params.codigo_a

    console.log(nota)

    request.query(`exec sp_insereNota(${codigo_d}, ${ra_aluno}, ${nota}, ${tipo});`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
            res.status(200)
        })
})

app.post('/insere-falta/:codigo_d/:ra_aluno/:presenca', (req, res) => {

    let codigo_d = req.params.codigo_d
    let ra_aluno = req.params.ra_aluno
    let presenca = req.params.presenca

    request.query(`INSERT INTO Faltas VALUES('${ra_aluno}', '${codigo_d}', '01/01/2019', ${presenca});`,
        (err, recordset) => {
            if (err) {
                console.log(err)
            }
            res.status(200)
        })
})

app.listen(3001, () => {
    sql.connect(config).then(() => {
        console.log("server rodando")
    }).catch((err) => {
        console.log(err)
    });
    request = new sql.Request();
})