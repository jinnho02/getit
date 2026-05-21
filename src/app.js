import express from 'express';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    const { active, page } = req.query;
    res.json({
        message: "유저 정보",
        filters: {
            active: active,
            page: page
        }
    });
});

app.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: "POST 요청 성공",
        data: body
    });
});

app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});