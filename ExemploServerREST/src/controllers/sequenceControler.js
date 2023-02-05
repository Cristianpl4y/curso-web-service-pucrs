exports.get = (req, res, next) => {
    res.status(200).send('Essa é uma rota GET!');
};

exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Essa é uma rota GET com ID! ${id}`);
};


exports.post = (req, res, next) => {
    res.status(201).send('Essa é uma rota POST!');
};

exports.put = (req, res, next) => {
    console.log(req.body)
    let id = req.body.id;
    res.status(201).send(`Essa é uma rota PUT com ID! --> ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Essa é uma rota DELETE com ID! --> ${id}`);
};

