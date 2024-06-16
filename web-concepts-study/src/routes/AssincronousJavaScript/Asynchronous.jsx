export const Asynchronous = () => {
    return (
        <div>
            <h1>
                Asynchrnous JavaScript
            </h1>
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
                <li>Callbacks
                    <ul>
                        <p>Funções Callbacks são funções passadas como parâmetros para outras funções que demoram um tempo para serem executadas</p>
                        <p>
                Por natureza, quando o JavaScript ver um código asynchronous ele segue a sua execução (não fica esperando) <br/>
                Ele segue o seu fluxo normal de execução.  
                <br/>
                <span style={{fontWeight: '600'}}>Callback Hell</span> Porém, como deve ser feito para que ele siga o fluxo que aguarda a execução?               
            </p>
            <ul>
                <li>Adicionando uma função callback para que ela seja executada durante a execução da primeira função. </li>
                <li>A função callback garante a execução da função que está sendo esperada para que não aconteça de ficar 'undefined'</li>
                <br/>
                <li>O principal problema encontrado com o uso de callbacks é o número de funções aninhadas que acaba dificultando a legibiliadde do código. Elas são funcionais, porém muito difíceis de entender.</li>
            </ul>
                    </ul>
                </li>

                <li>Promises</li>
                <li>Promises com Async/Await</li>
            </ul>


        </div>

    )
}