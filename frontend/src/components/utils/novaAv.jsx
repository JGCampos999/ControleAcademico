import React, { useState } from 'react'
import {Form, Button }from 'react-bootstrap/'
import axios from 'axios'

const NovaAv = () => {

    const [peso, setPeso] = useState(0);
    const [tipo, setTipo] = useState('');

    const formStyle = {
        width: "600px",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "20px"
    }

    function criaAv(){
        let url = `http://localhost:3001/cria-av/${tipo}/${peso}`
        axios.post(url).then(res=>{
            alert(res.status)
        })
    }

    return (
        <Form style={formStyle}>
            <Form.Group >
                <Form.Control type="text" placeholder="tipo" onChange={(e)=>{setTipo(e.target.value)}} />
                <Form.Text className="text-muted">
                    Exemplo de tipo: P1, P2 ou P3.
                </Form.Text>
            </Form.Group>
            <Form.Group >
                <Form.Control type="text" placeholder="Peso" onChange={(e)=>{setPeso(e.target.value)}}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={()=>{criaAv()}}>
                Criar!
            </Button>
        </Form>
    )
}

export default NovaAv;