import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BuscaAluno from './utils/procurarAluno'
import Disciplinas from './utils/diciplinas'
import NovaAv from './utils/novaAv'
import Relatorios from './utils/relatorio'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={BuscaAluno} />
                    <Route path="/busca-aluno" component={BuscaAluno} />
                    <Route path="/disciplinas" component={Disciplinas} />
                    <Route path="/criar-avaliacao" component={NovaAv} />
                    <Route path="/relatorios" component={Relatorios} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;