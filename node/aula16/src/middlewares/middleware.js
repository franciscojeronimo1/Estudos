exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local'
    next()
}

exports.outroMidleware = (req, res, next) => {
    next()
}