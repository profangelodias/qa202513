Feature: Solicitação de crédito - Aprovação e Reporvação
    Descrição da funcionalidade: cenários voltados para os -caminhos felizes- da Solicitação

Background: Acessar a página
    Given eu acesso a página de solicitação de crédito

Scenario: Validação dos campos obrigatórios
    When eu preencha todos os campos obrigatórios com dados válidos
    And confirme a solicitação
    Then o sistema irá informar que houve uma solicitação

# Scenario: Validação da aprovação de crédito
#     When eu preencha os campos obrigatórios com dados válidos
#     And eu preenho o valor da renda que aprove
#     And confirme a solicitação
#     Then o sistema irá informar que houve uma solicitação aprovada

# Scenario: Validação da reprovação de crédito
#     When eu preencha os campos obrigatórios com dados válidos
#     And eu preenho o valor da renda que reprove
#     And confirme a solicitação
#     Then o sistema irá informar que houve uma solicitação reprovada 

Scenario Outline: Validação da aprovação e reprovação de crédito
    When eu preencha os campos obrigatórios com dados válidos
    And eu preenho o valor da renda com <valor>
    And confirme a solicitação
    Then o sistema irá informar que houve uma solicitação <status>

    Examples:
        | valor   | status      | 
        | "2000"  | "APROVADA"  |
        | "1000"  | "REPROVADA" |