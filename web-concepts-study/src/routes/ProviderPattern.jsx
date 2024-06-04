export const ProviderPattern = () => {
    return (
        <div>
            <h1>Provider Pattern</h1>
            <p>
                Em alguns casos é necessário adicionar o compartilhamento de informações entre os componentes da aplicação. 
                Contudo, se a maioria dos componentes necessitam dessa informação acaba acontecendo o problema chamado de <span style={{backgroundColor: '#eee'}}>"prop drilling"</span>.
                
            </p>
            <p>
                <span style={{backgroundColor: '#cdcdcd', fontWeight:'600'}}>Prop Drilling</span> está relacionado ao caso em que as props são passadas profundamente para os componentes na árvore, sendo necessário uma
                refatoração do código adicionando o Provider Pattern de modo que os componentes tenham acesso ao valor diretamente, sem que seja
                necessário replicar as props. 
            </p>
            <p>
                Para resolver o problema podemos utilizar o <span style={{fontWeight:'600'}}>Provider Pattern</span> fazendo com que todos os componentes fiquem em volta de um <span style={{fontWeight:'600'}}>Provider</span>.
            </p>
            <p>
                O Provider vem a partir de um Contexto onde é definido através do value quais são as propriedades que serão compartilhadas com os filhos (children) do contexto. Os children normalmente
                são outros componentes que irão receber aquelas propriedades. O provider Context vem junto com o React.useContext(Contexto) para que seja possível recuperar as inforções.
            </p>
            <span style={{fontSize:'18px', color:'orange'}}>{`Para maiores explicações acesse Hooks > useContext`}</span>
        </div>

    )
}

