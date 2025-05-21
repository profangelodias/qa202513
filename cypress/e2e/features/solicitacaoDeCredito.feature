#language: pt

Funcionalidade: Solicitação de crédito - Aprovação e Reporvação
    Descrição da funcionalidade: cenários voltados para os -caminhos felizes- da Solicitação

Cenário: Validação dos campos obrigatórios
    Dado eu acesso a página de solicitação de crédito
    Quando eu preencha todos os campos obrigatórios com dados válidos
    E confirme a solicitação
    Então o sistema irá informar que houve uma solicitação