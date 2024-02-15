import express from 'express';
import bodyParser from "body-parser";
import { users } from '../model/index.js';
import { verifyAToken } from '../middleware/AuthenticateUser.js';


const userRouter = express.Router()
// Fetch users
userRouter.get('/',(req, res)=>{
    try{
        users.fetchUsers(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        })
    }
 })