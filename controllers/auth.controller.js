import argon2 from 'argon2';
import User from "../models/user.model.js"

export const login = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });

    if(!user) return res.status(404).json({message: "User not found"});

    const userMatch = await argon2.verify(user.password, req.body.password);
    if(!userMatch) return res.status(400).json({message: "Password is not valid"});
    req.session.userId = user.id;

    const data = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    };

    res.status(200).json(data);
};

export const me = async (req, res) => {
    if(!req.session.userId) {
        return res.status(400).json({message: "You dont already logged in"});
    }

    const user = await User.findOne({
        attributes: ['id', 'name', 'email', 'role'],
        where: {
            id: req.session.userId
        }
    })

    if(!user) return res.status(404).json({message: "User not found"});

    res.status(200).json(user);
};

export const logout = async (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            return res.status(400).json({message: "Logout failed"});
        }

        res.status(200).json({message: "Successfully logged out!"})
    })
};