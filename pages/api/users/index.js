import connectMongo from '../../../database/conn';
import getUsers from '@/database/controller';

export default function handler(req,res){
    connectMongo().catch(()=>{
        res.status(405).json({error:"Error in connection"})
    })
   

    //type of request

    const {method} = req;

    switch(method){
        case "GET":
            getUsers(req,res)
            break;
        case "POST":
            res.status(200).json({method,methodname:"Post Method"})
            break;
        case "PUT":
                res.status(200).json({method,methodname:"Put Method"})
                break;
        case "DELETE":
            res.status(200).json({method,methodname:"Delete Method"})
            break;
        default:
            res.setHeader('Allow',['GET','POST','PUT','DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`)
             
    }
}