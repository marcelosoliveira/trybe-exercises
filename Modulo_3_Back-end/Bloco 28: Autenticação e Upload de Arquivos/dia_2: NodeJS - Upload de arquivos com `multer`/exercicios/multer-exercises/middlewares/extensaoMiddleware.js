const extensaoMiddleware = (req, res, next) => {
    const { originalname } = req.file;
    const extensao = originalname.substr(originalname.length - 3);

    if (extensao !== 'png') return res.status(403).send(
      { error: { message: "Extension must be `png`" } });
    
    return next();
}

module.exports = extensaoMiddleware;
