import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Table } from 'react-bootstrap'
import axios from 'axios'

const RelatorioModal = (props) => {



    let show = props.show;
    let close = props.close;
    let codigo_d = props.codigo_d.codigo

    const [turma, setTurma] = useState([])

    function getTurma() {
        let url = `http://localhost:3001/notas-turma/${codigo_d}`
        axios.get(url).then(res => {
            let data = res.data
            setTurma(data.recordset)
        })
    }
    getTurma()

    return (
        <div style={{width: "1000px"}}>
            <Modal show={show} onHide={show} onClose={close}>
                <Modal.Header closeButton onClick={close}>
                    Relatorio de Notas
            </Modal.Header>
                <Modal.Body >
                    {turma.map(row => (
                        <Table key={row.RA_Aluno} >
                            <td>{row.RA_Aluno}</td>
                            <td>{row.Nome_Aluno}</td>
                            <td>{row.Disciplina}</td>
                            <td>{row.Nota1}</td>
                            <td>{row.Nota2}</td>
                            <td>{row.Nota3}</td>
                            <td>{row.Nota_Trabalho}</td>
                            <td>{row.Exame_Final}</td>
                            <td>{row.Media_Final}</td>
                            <td>{row.Situacao}</td>
                        </Table>
                    ))}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default RelatorioModal;