import { redirect } from "react-router-dom";
import { deleteContact } from "../contact";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}


const Destroy = () => {
  return (
    <div>
      
    </div>
  )
}

export default Destroy;



