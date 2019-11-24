import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, FormControl, Jumbotron, Container } from 'react-bootstrap'
import axios from 'axios'

const NotaModal = (props) => {

    let show = props.show;
    let close = props.close;
    let codigo_d = props.codigo_d.codigo

    const [aluno, setAluno] = useState([])
    const [avaliacao, setAvaliacao] = useState([])
    const [nota, setNota] = useState(0)

    function getAluno(e) {
        let url = `http://localhost:3001/busca-aluno/${e}`
        axios.get(url).then(res => {
            let data = res.data
            setAluno(data.recordset)
        })
    }

    function getAvaliacao(e){
        
    }

    return (
        <Modal show={show} onHide={show} onClose={close}>
            <Modal.Header closeButton onClick={close}>
                Editar Nota
            </Modal.Header>
            <Modal.Body>
                <FormControl type="text" placeholder="Procurar aluno" className="mt-2 mb-2" onChange={(e) => { getAluno(e.target.value) }} />
            </Modal.Body>
            <div>
                {aluno.map(row => (
                    <Jumbotron style={{justifyContent: "center"}}>
                        <Container>
                            <h1>{row.RA}</h1>
                            <h2>{row.nome}</h2>
                        </Container>
                        <FormControl type="text" placeholder="Nota" onChange={(e)=>{setNota(e.target.value)}} />
                        <br />
                        <Button variant="secondary">Salvar</Button>
                    </Jumbotron>
                ))}
            </div>
        </Modal>
    )
}

export default NotaModal;