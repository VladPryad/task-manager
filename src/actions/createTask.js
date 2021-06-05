import { isValid } from "@/actions/utils";
import { createTask } from "@/query"

export default function(fields) {
    if(!isValid(fields)) throw new Error("email is not valid")
    
    let res = createTask(fields);
    return res;
}