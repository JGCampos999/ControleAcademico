import React from 'react';
import { Navbar, Nav,  Button, Form } from 'react-bootstrap'

class Header extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Siga 2.0</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/disciplinas">Disciplinas</Nav.Link>
                    <Button variant="warning" href="/criar-avaliacao">Criar Avaliação</Button>
                    <Button variant="info" href="/relatorios" className="ml-2">Relatórios</Button>
                </Nav>
                <Form inline>
                    <Button variant="outline-info" href="/busca-aluno">Procurar aluno</Button>
                </Form>
            </Navbar>
        )
    }
}

export default Header;