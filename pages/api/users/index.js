import connectMongo from '../../../database/conn';
import  { postUsers,getUsers, UpdateUsers, DeleteUsers,} from '@/database/controller';

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
            postUsers(req,res)
            break;
        case "PUT":
               UpdateUsers(req,res)
                break;
        case "DELETE":
               DeleteUsers(req,res)
            break;
        default:
            res.setHeader('Allow',['GET','POST','PUT','DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`)
             
    }
}