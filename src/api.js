import axios from "axios";
export function getList(){
    return axios({
        method: "get",
        url: "data/index"
    })
}   