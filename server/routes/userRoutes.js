import { Router } from "express";
// Importing Controllers
import { userRegister } from "../controllers/userController.js";
import { userLogin } from "../controllers/userController.js";
import { checkenv } from "../controllers/userController.js";


function userRoutes () {
    const router = Router();
    router.get('/env',checkenv);

    router.post('/register',userRegister);

    router.post('/login',userLogin);
    

    return router;
};

export default userRoutes;