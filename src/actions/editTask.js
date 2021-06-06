import { editTask } from "@/query"

export default async function(fields) {

    if(!fields.text) return "Text can`t be empty";
    
    let res = await editTask({ ...fields, token: localStorage.getItem("appToken") });

    if(res.data.status != "ok") return "Editing failed";
    return "";
}