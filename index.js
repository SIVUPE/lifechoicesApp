import { userRouter, express } from "./Controllers/UserController.js";
import { productRouter } from "./Controllers/ProductsController.js";
import { cookieParser} from "cookie-parser";
import { errorHandling} from "./middleware/ErrorHandling.js";
import path from "path";
import { config } from "dotenv";
config()

const app = express()
const port = +process.env.PORT || 5000

app.use((req, res, next)=>{
    res.header("Access-control-Allow-Origin","*");
    res.header("Access-control-Allow-Credentials","true");
    res.header("Access-control-Allow-Methods","*");
    res.header("Access-control-Allow-Methods","*");
    res.header("Access-control-Allow-Headers","*");
    res.header("Access-control-Allow-Headers","Authorization");
    next();
})
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser(),
    cors()
)
app.get('^/$|/lifechoices', (req, res)=>{
    res.status(200).sendFile(path.join(_dirname, './static/html/index.html'))
})
app.use('/users',userRouter)
app.use('/products', productRouter)
app.use(errorHandling)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})