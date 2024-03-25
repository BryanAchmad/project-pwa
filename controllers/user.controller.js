import { hash } from "argon2";
import Users from "../models/user.model.js"

export const get = async (req, res) => {
    const list = await Users.findAll();

    return res.status(200).json(list);
}

export const getOne = async (req, res) => {
    const data = await Users.findOne({
        attributes:['id','name','email','role'],
        where: {id: req.params.id}
    });

    console.log(data);

    if(!data) return res.status(404).json({message: "User not found"});

    return res.status(200).json(data);
}

export const create = async (req, res) => {
    const {name, email, password, role} = req.body;
    if(!email || !password || !role)  {
        return res.status(400).json({message: "Missing fields. All fields cannot be empty"});
    }

    try{
        const passwordHash = await hash(password)
        const createUser = await Users.create({ name, email, password:passwordHash, role});
        return res.status(200).json(createUser)
    } catch (e) {
        console.log(e.message)
        return res.status(500).json({message: "error while creating user, error: " + e.message})
    }
}

export const update = async (req, res) => {
    const user = await Users.findOne({
        where: {
            id: req.params.id
        }
    });

    const {name, email} = req.body
    try{
        await Users.update({
            name: name, 
            email: email
        }, {
            where: {
                id: user.id
            }
        })
        
        return res.status(200).json({message: "success to update data"});
    } catch (e) {
        return res.status(400).json({message: "Failed to update data, with error: " + e.message})
    }
}

export const deleteUser = async (req, res) => {
    const user = await Users.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    try {
        await Users.destroy({
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "User successfully Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
