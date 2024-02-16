import express from 'express'
import path from 'path'

//create express app
const app = express()
const router = express.Router()
app.use (
    router,express.static('./static')
    )
const port = +process.env.PORT || 5000

//router
router.get('^/$|/express',display, (req, res)=>{
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
      
})
// router.get('/About', (req, res)=>{
//     res.json({
//         status: res.statusCode, 
//         msg: 'About Page'
//     })
// })
// app.get('*', (req, res)=>{
//     res.status(200).json({
//         status: 404, 
//         msg: '404 Page'
//     })
// })
app.listen(port)



//middleware
function display(req, res, next){
    console.log("hello there");
    next()
}