import React from 'react'
import { Table } from 'react-bootstrap'

const Table1 = (props) => {
    let turma = props.turma

    return (
        <div>
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
        </div>
    )
}

export default Table1;