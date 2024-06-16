export function AdapterPattern() {
    return (
        <div>
            <h1>Adapter Pattern</h1>
            <ul>
                <li>
                    O Adapter funciona como um adaptador para ligar duas classes que são incompatíveis.
                </li>
                <li>
                    Classes incompatíveis refere-se a classes que não têm a mesma interface
                </li>
                <li>
                    A ideia é poder acessar métodos que antes não eram acessíveis para uma classe para que ela
                    possa acessar através do adapter os métodos disponíveis naquela classe.
                </li>
                <li>
                    Para adicionar novos métodos de conversa entre as classes você só precisa adicionar  a implementação do adapter. Permitindo que elas acessem os mpétodos das outras classes.
                </li>
                <li>
                    O adapter também pode funcionar para fazer conversão de dados por meio da interface. Ele pode fazer o tratamento de dados convertendo por exemplo uma lib que vem em JSON para XLSX da sua aplicação,
                    permitindo que o seu lado possa conversar com o do cliente
                </li>
            </ul>
        </div>

    )
}