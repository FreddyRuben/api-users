
const User = require('../schemas/user.schema')

async function getUsers(req, res){
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.send(err);
    }
}

async function getUser(req, res){
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }
    catch(err){
        res.send(err);
    }
}

async function saveUser(req, res){
    try{
        const user = new User();
        user.user_name = req.body.user_name;
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.age = req.body.age
        await user.save();
        res.status(200).json({"msg": "user saved successfully", user});
        }
    catch(err){
        res.send(err);
    }
}

async function editUser(req, res){
    try{
        const {id} = req.params
        const user = await User.findByIdAndUpdate(id, {
            user_name: req.body.user_name,
            first_name: req.body.first_name,
            last_name: req.body.last_name
        }, {new: true});
        res.status(200).json({msg:"user updated successfully", user});
    }
    catch(err){
        res.send(err)
    }
}

async function deleteUser(req, res){
    try{
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        res.status(200).json({msg: "user deleted successfully", user});
    }
    catch(err){
        res.send(err);
    }
}


module.exports = {
    getUsers,
    getUser,
    saveUser,
    editUser,
    deleteUser
}