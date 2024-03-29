import express from 'express';
import productRouter from './routers/productRouter';
import userRouter from './routers/userRouter';
import orderRouter from './routers/orderRouter';
import loginRouter from './routers/loginRouter';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

// app.use((err, res) => {
//   res.status(500).send(err);
// });

export default app;
