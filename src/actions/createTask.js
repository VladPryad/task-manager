import { validationCheck } from "@/actions/utils";
import { createTask } from "@/query"

export default async function(fields) {
    let validationResults = validationCheck(fields);

    if(!validationResults.isValid) return validationResults.message;
    
    let res = await createTask(fields);

    if(res.data.status != "ok") return "Creation failed";
    return "Creation succeed";
}