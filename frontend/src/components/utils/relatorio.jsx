import React from 'react'
import Card from 'react-bootstrap/Card'

const Relatorios = () => {
    return (
        <div style={{display: "flex", width: "900px", marginRight: "auto", marginLeft: "auto", justifyContent:"center"}}>
            <Card style={{ width: '18rem', margin: "20px" }}>
                <Card.Body>
                    <Card.Title>Relatorio 01</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Relatorio de faltas</Card.Subtitle>
                    <Card.Text>
                        Relatorio das faltas da turma.
                    </Card.Text>
                    <Card.Link href="#">Baixar</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: "20px"  }}>
                <Card.Body>
                    <Card.Title>Relatorio 02</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Relatorio de notas</Card.Subtitle>
                    <Card.Text>
                        Relatorio das notas das turmas.
                    </Card.Text>
                    <Card.Link href="#">Baixar</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Relatorios;