import React from 'react';
import axios from 'axios'
import { Button, Container } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import NotaModal from './notaModal'
import FaltaModal from './faltaModal'
import RelatorioModal from './relatorioModal'

class Diciplinas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            disciplinas: [],
            faltaopen: false,
            notaopen: false,
            relatorioopen: false,
            selected: {}
        }
        this.getDiciplinas();
    }

    getDiciplinas() {
        let url = "http://localhost:3001/disciplinas"
        axios.get(url).then(res => {
            let data = res.data
            this.setState({
                disciplinas: data.recordset
            })
        })
    }

    faltaOpen = (selected) => {
        this.setState({
            faltaopen: true,
            selected
        });
    };

    faltaClose = () => {
        this.setState({
            faltaopen: false
        });
    };

    notaOpen = (selected) => {
        this.setState({
            notaopen: true,
            selected
        });
    };

    relatorioClose = () => {
        this.setState({
            relatorioopen: false
        });
    };

    relatorioOpen = (selected) => {
        this.setState({
            relatorioopen: true,
            selected
        });
    };

    notaClose = () => {
        this.setState({
            notaopen: false
        });
    };

    render() {
        return (
            <div>
                {this.state.disciplinas.map((row, idx) => (
                    <Jumbotron key={idx} >
                        <Container>
                            <h1>{row.sigla}</h1>
                            <h2>{row.nome}</h2>
                            <p>
                                turno: {row.turno}
                                <br />
                                Quantidade de Aulas: {row.numAulas}
                            </p>
                            <Button className="mb-2" variant="secondary" onClick={() => { this.faltaOpen(row) }}>Inserir Falta</Button><br />
                            <Button className="mb-2" variant="secondary" onClick={() => { this.notaOpen(row) }}>Inserir Nota</Button><br />
                            <Button variant="info" onClick={() => { this.relatorioOpen(row) }}>Relatorio de Nota</Button><br />
                        </Container>
                    </Jumbotron>
                ))}
                <NotaModal show={this.state.notaopen} close={() => this.notaClose()} codigo_d={this.state.selected} />
                <FaltaModal show={this.state.faltaopen} close={() => this.faltaClose()} codigo_d={this.state.selected} />
                <RelatorioModal show={this.state.relatorioopen} close={() => this.relatorioClose()} codigo_d={this.state.selected} />
            </div>
        )
    }
}

export default Diciplinas;