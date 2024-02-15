import { config } from "dotenv";
config()
import { sign, verify} from "jsonwebtoken";

function createToken(user){
    return sign({
        emailAdd: user.emailAdd,

        userPwd: user.user.pwd
    },
    process.env.SECRET_KEY,
    {
        expireIn: '1h'
    }
    )
}

function verifyAToken(req, res, next){
    // Retrieve a token from the browser
      const token = req.headers['Authorization']
      if(token){
        if(verify(token, process.env.SECRET_KEY)){
            next()
        }else{
            res?.json({
                status: res.statusCode,
                msg:"Please provide the correct credentials."
            })
        }
      }else{
        res?.json({
            status: res.statusCode,
            msg: "Please login."
        })
      }
}
export{
    createToken,
    verifyAToken
}