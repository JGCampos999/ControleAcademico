import React from 'react'
import { FormControl, Button, Container } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios'

class BuscaAluno extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aluno: []
        }
    }

    getAluno(e) {
        let url = `http://localhost:3001/busca-aluno/${e}`
        axios.get(url).then(res => {
            let data = res.data
            this.setState({
                aluno: data.recordset
            })
        })
    }

    inputStyle = {
        width: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center"
    }

    render() {
        return (
            <div>
                <FormControl type="text" placeholder="Procurar aluno" className="mt-2 mb-2" style={this.inputStyle} onChange={(e) => { this.getAluno(e.target.value) }} />
                {this.state.aluno.map(row => (
                    <Jumbotron fluid>
                        <Container>
                            <h1>{row.RA}</h1>
                            <h2>{row.nome}</h2>
                            <Button >Editar Falta</Button>
                            <Button >Editar Nota</Button>
                        </Container>
                    </Jumbotron>
                ))}
            </div>
        )
    }
}

export default BuscaAluno;