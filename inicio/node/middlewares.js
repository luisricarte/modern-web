//middleware pattern (chain of responsability)

const passo1 = (ctx, next) => {
  ctx.valor1 = 'mid1'
  next()
}

const passo2 = (ctx,next) => {
  ctx.valor2 = 'mid2'
  next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => { // ...middlewares operador rast = junta em um array chamado 'middlewares'
  const execPasso = indice => {
    middlewares && indice < middlewares.length ? middlewares[indice](ctx, () => execPasso(indice + 1)) : false
  }
  execPasso(0)
}

const ctx = {}

exec(ctx, passo1, passo2, passo3)

console.log(ctx)

const ctxpasso2 = {} //mudando a ordem dos passos executados, mas de modo que eles continuem funcionando.
exec(ctxpasso2, passo2, passo1, passo3 )

console.log(ctxpasso2)

const ctxpasso3 = {}

exec(ctxpasso3, passo3, passo1, passo2) //note que o passo3, ao fazer inidice < middlewares.length  da falso. Por isso, ele só executa o seu passo

console.log(ctxpasso3)