import axios from "axios";
import { baseUrl } from './config'
function getHomePage(qrCode) {
    return axios.get(baseUrl +'/app/mock/64/api/v1/homePage');
}
export { 
    getHomePage
}