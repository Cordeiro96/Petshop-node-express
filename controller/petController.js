const petModel = require('../model/pet');

const petController = {
    index: (req, res) => {
        res.send(petModel.listarPets());
    },
    add: (req, res) => {
        let novoPet = req.params;

        petModel.adicionarPet(novoPet);
        res.send(`Opa, ${novoPet.nome} foi adicionado com sucesso!`);
    },
    buscar: (req, res) => {
        let pets = petModel.buscarPet(req.params.nome);
        if(pets.length > 0) {
            res.send(`${pets.length} Pets com o nome ${req.params.nome}`)
        } else {
            res.send(`Nenhum pet encontrado com o nome ${req.params.nome}`)
        }
    }
}

module.exports = petController;