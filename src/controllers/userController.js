import { createUserService, deleteUserByIdService, getAllUsersService, getUserByIdService, updateUserByIdService } from "../models/userModel.js";

//Standardise response function
const handleResponse = (res, status, message, data=null) => {
    res.status(status).json({
        status, 
        message,
        data,
    })
}

export const createUser = async(req, res, next) => {
    const {name, email} = req.body;
    try {
        const newUser = await createUserService(name, email);
        handleResponse(res, 200, "User created successfully", newUser);
    } catch (error) {
        next(error);
    }
}

export const getAllUsers = async(req, res, next) => {
    try {
        const users = await getAllUsersService();
        handleResponse(res, 200, "Users fetched succesfully", users);
    } catch (error) {
        next(error);
    }
}

export const getUserById = async(req, res, next) => {
    const {id} = req.params;
    try {
        const user =await getUserByIdService(id);
        if(!user) {
            return handleResponse(res, 404, "User does not exist")
        }
         handleResponse(res, 200, "User fetched successfully", user);
    } catch (error) {
        next(error);
    }
}

export const updateUser = async(req, res, next)=> {
    const {id} = req.params;
    const {name, email} = req.body;

    try {
        const updatedUser = await updateUserByIdService(id, name, email);
        if(!updatedUser) {
            return handleResponse(res, 404, "User does not exist");
        }
        handleResponse(res, 200, "User updated successfully", updatedUser);
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async(req, res, next) => {
    const {id} = req.params;
    try {
        const deletedUser =await deleteUserByIdService(id);
        if(!deletedUser) {
            return handleResponse(res, 404, "No user to delete");
        }
        handleResponse(res, 200, "User deleted Successfully", deletedUser);
    } catch (error) {
        next(error);
    }
}