const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((nomeAprovado, indice) =>
    console.log(`${indice + 1}-Aprovado: ${nomeAprovado}`)
) //forEach o primeiro parâmetro é o **Item** e o Segundo é o **Índice**

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)
