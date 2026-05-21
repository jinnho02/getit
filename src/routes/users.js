import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {
    const { active, page } = req.query;
    res.json({
        message: "User List",
        filters: {
            active: active,
            page: page
        }
    });
});

userRouter.post('/', (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({
        message: "User Created",
        data: {
            name: name,
            email: email
        }
    });
});

export default userRouter;