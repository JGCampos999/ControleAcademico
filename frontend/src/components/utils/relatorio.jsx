import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { FormControl } from 'react-bootstrap'
import Table from './tableTurma'
import axios from 'axios'

const Relatorios = () => {
    const [turma, setTurma] = useState([])

    function getTurma(e) {
        let url = `http://localhost:3001/notas-turma/${e}`
        axios.get(url).then(res => {
            let data = res.data
            setTurma(data.recordset)
        })
    }

    return (
        <div>
            <div style={{ display: "flex", width: "900px", marginRight: "auto", marginLeft: "auto", justifyContent: "center" }}>
                <Card style={{ width: '18rem', margin: "20px" }}>
                    <Card.Body>
                        <Card.Title>Relatorio 01</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Relatorio de notas</Card.Subtitle>
                        <Card.Text>
                            Relatorio das notas da turma.
                    </Card.Text>
                        <FormControl type="text" placeholder="Procurar turma" className="mt-2 mb-2" onChange={(e) => { getTurma(e.target.value) }} />
                    </Card.Body>
                </Card>
             
            </div>
            <Table turma={turma} />
        </div>
    )
}

export default Relatorios;