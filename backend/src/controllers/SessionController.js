const User = require('../models/User')
//metodos dentro de um controller
//index - retorna uma listagem de sessões
//show - lita uma única sessão
//store - criar uma sessão
//update - atualiza uma sessão
//destroy - remove/deleta uma sessão
module.exports = {
    async store(req,res){
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email })
        }
        
        return res.json(user);
    }
}