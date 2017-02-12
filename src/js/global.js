/**
 * Created by Administrator on 2017/2/12.
 */
import  ApiConfig from "../config/APIConfig"
export default {
    install(vue){
        vue.prototype.APIConfig = ApiConfig;
    }
}