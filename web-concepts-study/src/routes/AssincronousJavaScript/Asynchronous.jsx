export const Asynchronous = () => {
    return (
        <div>
            <h1>Asynchrnous JavaScript</h1>
            <p>Um código assíncrono pode ser definido como aquele que leva um tempo para ser executado e que pode ou não ser bem sucedido:</p>
            <ul>
                <li>
                    chamadas a API
                </li>
                <li>
                    interação com o banco de dados
                </li>
            </ul>
            <p> Há três maneiras de lidar com esse tipo de cenário: </p>
            <ul>
                <li> <h2>Callbacks</h2>
                    <ul>
                        <p>Funções Callbacks são funções passadas como parâmetros para outras funções que demoram um tempo para serem executadas</p>
                <p>
                    Por natureza, quando o JavaScript ver um código asynchronous ele segue a sua execução (não fica esperando) <br/>
                    Ele segue o seu fluxo normal de execução.  
                    <br/>
                     Porém, como deve ser feito para que ele siga o fluxo que aguarda a execução?               
                </p>
            <ul>
                <li>Adicionando uma função callback para que ela seja executada durante a execução da primeira função. </li>
                <li>A função callback garante a execução da função que está sendo esperada para que não aconteça de ficar 'undefined'</li>
                <br/>
                <li> <span style={{fontWeight: '600'}}>Callback Hell: </span>O principal problema encontrado com o uso de callbacks é o número de funções aninhadas que acaba dificultando a legibiliadde do código. Elas são funcionais, porém muito difíceis de entender.</li>
            </ul>
                    </ul>
                </li>

                <li><h2>Promises</h2></li>
                <ul>
                    <p>
                        As promises surgiram com o objetivo de evitar a ilegibilidade de código trazida pelas callbacks
                    </p>
                    <p>
                        A estrutura dela seguem a seguinte maneira:
                    </p>
                    <ul>
                        new Promise((resolve, reject)=>{`{}`})
                        <br />
                        Promessas podem ser resolvidas ou rejeitadas. Quando elas são resolvidas elas executam o .then() e seguem com o tratamento ou execução de novas promises - requisições=
                        Quando elas são rejeitadas (reject) elas executam o .catch() recebe uma função como parâmetro para o tratamento de erros
                    </ul>
                </ul>
                <li>Promises com Async/Await</li>
            </ul>


        </div>

    )
}