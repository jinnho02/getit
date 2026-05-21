import express from 'express';
import userRouter from './userRouter.js';

const router = express.Router();

router.use('/users', userRouter);
// 다른 라우터를 추가할 수 있습니다.

export default router;