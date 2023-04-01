import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateuserForm";
const form = () => {
    const flag=true;
return(
    <div className="container mx-auto py-6">

 {flag ?   <AddUserForm/>:<UpdateUserForm/>}
    </div>
)
};

export default form;
