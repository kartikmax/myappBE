import jwt from 'jsonwebtoken';
const JWT_SECERET = "techHelps"

const fetchuser = (req,res,next) =>{
    // get the user fro  the jwt token and id to request object

    const token  = req.header('auth-token');
    if(!token){
        res.status(401).send({'error': 'Please Authenticate Using a valid token'})
    }

    try {
        const data = jwt.verify(token,JWT_SECERET)
        req.user = data.user
        next();
        
    } catch (error) {
        res.status(401).send({'error': 'Please Authenticate Using a valid token'})        
    }
    }


export default fetchuser;