const crypto = require('crypto'); // metodo para gerar texto aleatorio
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX'); //gera um id
    
    await connection('ongs').insert({ //aguarda esse codigo terminar
        id,
        name,
        email,
        whatsapp,
        city,
        uf,

    })
    

    return response.json({id}); 
    }
};