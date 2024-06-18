export const Nest = () => {
    return (
        <div>
            <h1>
                Nest
            </h1>
            <p>
                O nest é todo baseado em modulos <br/>
                o modulo é uma classe que tem um decorator (anotations) @Module em cima. <br/>
                O nest trabalha com o modelo MVC (Model, View e Controller) = O controller recebe uma requisição http, processa e devolve a resposta. <br/>
                O provider registra os revirsos da aplicação. Serviço de negócio ou algo que será reutilizado. 
            </p>
            <br/>
            
            <ul >
                <li>
                    1. @Body() pega o body da requisição e transforma em um objeto
                </li>
                <li>
                    2. DTO
                </li>
                <li>
                    
                </li>
            </ul>
        
            <ul>
                <p>
                    a configuração foi feita através do prisma com mysql e docker-compose 
                </p>
            </ul>
            <p>
                configuração do MySQL e do docker compose :
                <ul>
                    <li>1. vai ser criado um .env com um DATABASE_URL depois você faz as alterações para pegar seu usuário/senha no Mysql</li>
                    <li>2. depois criar na raiz um docker-compose.yaml</li>
                    <li>3. rodar um docker-compose up para rodar a imagem</li> 
                    <li></li>
                </ul>
                configuração do prisma
                <ul>
                    <li>
                        1. instale o prima
                    </li>
                    <li>
                        2. faça adicione o seu database na linha 12.
                    </li>
                    <li>
                        3. faça as alterações/criação de novas tabelas 
                    </li>
                    <li>
                        4. rode o comando npx prisma migrate dev
                    </li>
                </ul>
                acessar o banco de dados mysql
                <ul>
                    <li>
                        1. docker-compose exec db bash (entrando no container)
                    </li>
                    <li>
                        2. mysql -u(@user) -p(@password)
                    </li>
                    <li>
                        3. use (@database)
                    </li>
                </ul>
            </p>
        </div>
    )
}