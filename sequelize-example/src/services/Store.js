const { Store } = require('../models');




const getAll = async (req, res) => {
    try {
        const Stores = await Store.findAll();
        res.status(200).json(Stores);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Data not found' });        
    }
}

const findById = async (req, res) => {
    try {
        const singleStore = await Store.findByPk(req.params.id);
        res.status(200).json(singleStore);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Data not found' }); 
    }
}

const create = async (req, res) => {
    try {
        const { name, description } = req.body;
        
        console.log(name, description);
        const { dataValues } = await Store.create({ name, description });
        return res.status(201).json(dataValues);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Data not found' }); 
    }
}


module.exports = {
    getAll,
    findById,
    create,
}