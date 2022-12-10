const userModel = require('../model/userModel');
const { checkBody, checkName, checkPhone, checkEmail, checkpassword} = require('../validation/validation');
const jwt = require('jsonwebtoken');

//--------------------------create customer
const createUse = async (req, res) => {
    try {
        const {name, email, phone, password } = req.body;

        //------------------------------ validation
        if (checkBody(req.body)) return res.status(400).send({ message: 'please provide data' });
        if (!name) return res.status(400).send({ message: 'please provide userName' });
        if (!email) return res.status(400).send({ message: 'please provide email' });
        if (!phone) return res.status(400).send({ message: 'please provide phone' });
        if (!password) return res.status(400).send({ message: 'please provide password' });
        if (!checkName(name)) return res.status(400).send({ message: 'please provide valid Firstname' });
        if (!checkEmail(email)) return res.status(400).send({ message: 'please provide valid email' });
        if (!checkPhone(phone)) return res.status(400).send({ message: 'please provide valid phone' });
        if (!checkpassword(password)) return res.status(400).send({ message: 'password should be  8 to 15 only and a to z , A to Z ' });

     
        //---------------------DB call
        const uniqueEmail = await userModel.findOne({ email });
        const uniquePhone = await userModel.findOne({ phone });

        if (uniqueEmail) return res.status(400).send({ message: 'please provide unique email' });
        if (uniquePhone) return res.status(400).send({ message: 'please provide unique phone' });

        const data = await userModel.create(req.body);

        res.status(201).send({ message: data });

    } catch (error) { return res.status(500).send({ message: error }) }
}

const login = async (req,res) => {
    try {
        const { email, password } = req.body;

        if (!email) return res.status(400).send({ message: 'please provide email' });
        if (!checkEmail(email)) return res.status(400).send({ message: 'please provide valid email' });

        const data = await userModel.findOne({email , password});

        if(!data) return res.status(400).send({ message: 'Invaild credentials' });

       let token =  jwt.sign({_id:data._id},'skhdgbfiudasgh');

        return res.status(200).send({ message: data ,token});

    } catch (error) { return res.status(500).send({ message: error }) }
}

//--------------------------get customer
const getUser = async (_, res) => {
    try {
        const data = await userModel.find();

        if (data.length === 0) return res.status(404).send({ message: 'not data Found' });

        return res.status(200).send({ message: data });

    } catch (error) { return res.status(500).send({ message: error }) }
}



module.exports = { createUse, getUser,login}