import { app } from "./backend/controller/routes/app";
import { userRouter } from "./backend/controller/routes/UserRouter"
import { productRouter } from "./backend/controller/routes/ProductRouter";
import { purchaseRouter } from "./backend/controller/routes/PurchaseRouter"

app.use('/user/', userRouter)
app.use('/product/', productRouter)
app.use('/purchase/', purchaseRouter)