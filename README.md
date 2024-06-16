# Estudo de Web Moderno
Repositório dedicado ao inicío do meu estudo sobre Web Moderno

## Promises ✅
- Pode ser comparado a uma função callback, porém a callback acaba trazendo um aninhamento entre as chamadas que pode acabar sendo difícil compreender o código.
- Utilizada para adicionar um processamento assíncrono. Pode ser utilizada para recuperar objetos e fazer requisições, por exemplo.
- A promessa pode ser Resolvida ou Rejeitada
- A promessa Resolvida será atribuida ao .then() que é utilizado para tratar o retorno da Promise resolvida.
- A promessa Rejeitada será atribuida ao .catch() onde será possível adicionar o tratamento de erros e=>e.message
- Promise.all() => O promisse all garante que o .then só será executado após todas as promessas terem sido executadas
## Hooks✅
Só é possível adicionar os Hooks dentro de componentes funcionais. Não é possível utilizar dentro de componentes de classes.
### useState (react)✅

### useContext (react)✅
### useEffect (react)✅
### useRef (react)✅
### useReducer (react)✅
### useMemo (react)✅
### useCallback (react)✅
### useLayoutEffect (react)✅
### useRouter (next/router)
### useSession (next-auth)
## Async Await✅
## Funções✅
### Arrow Function✅
### Callback✅
- A principal caracterísica de funções callbacks é serem passadas como argumento para outras funções externas para completar algum tipo de rotina ou ação.
- Funções Callback são amplamente usadas em programação Assíncrona. Ela é executada após a conclusão de algum tipo de operação ou evento. 
- Em comparação com as promises pode ter alguns problemas devido o encadeamento de várias funções.
- Permite flexibilidade e assincronismo
### CallBack Hell ✅
- Callback hell é o uso excessivo de callbacks aninhados o que em muitos casos pode deixar o código difícil de ler e de manter.
### Anonymous Function✅
## Funções básicas✅
### .concat
### .map✅
### .filter
### .reduce
### .flatmap 
## Object 
### Inheritance
### JSON vs OBJECT
### Class
## Operator
### Rest
### Spread
## Web Concepts
### HTTP Protocol✅
- Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS ...
O método HTTP mostra o que a rota irá fazer dentro da aplicação. Serve para semanticamente definir pra que será utilizada aquela rota.

- Corpo da requisição (Request Body)
Geralmente é utilizado em requisições do tipo POST ou PUT que estão relacionadas a um formulário. Criação de algo.

- Parâmetros de busca (Search Params / Query Params)
São parâmetros que são utilizados diretamente na rota para realizar filtros ou buscas. Diretamente na URL. Parâmetros normalmente não obrigatórios
`http://localhost:3000/usuarios?name=Duds`

- Parâmetros de rota (Route Params)
Geralmente utilizados em identificação de recursos específicos. Normalmente relacionado ao GET, PUT e DELETE. Quando são necessárias alterações em um 'usuário' específico, em um registro específico.
`http://localhost:3000/usuario/5`

- Cabeçalhos (Headers)
Normalmente são utilizados para enviar o contexto da requisição.
Mensagens de Erro. Datas. Contextualizar o backend para entender as características do usuário. Linguagem, local, horário.
### Status Code✅
- 20x => Sucesso
- 30x => Redirecionamento
- 40x => Client Error (erro em alguma infromação enviada por QUEM está fazendo a chamada da API)
- 50x => Erro do Servidor. Erro que está acontecendo independente do que está sendo enviado para o servidor.
### Client Side vs Server Side
### DNS
## DOM
## Ajax
## Gulp
## Webpack
## JQuery
## Bootstrap
## Banco de dados
### Relacional
### Não relacional
### Conexão: Driver nativo
### Conexão: Query Builders
### Conexão: ORMs
### Axios ✅
### React-router-dom ✅
## Design Pattterns
### Provider Pattern✅
### Adapter Pattern✅
### Dependency Injection