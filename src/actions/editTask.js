import { editTask } from "@/query"

export default async function(fields) {

    if(!fields.text) return "Text can`t be empty";

    let token = localStorage.getItem("appToken");
    if(!token) return "Please log in";
    
    let res = await editTask({ ...fields, token });

    if(res.data.status != "ok") return "Editing failed";
    return "";
}