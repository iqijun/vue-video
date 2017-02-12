/**
 * Created by Administrator on 2017/2/12.
 */
import  vuex from "vuex";
import  ResModule from "./modules/resModule"

export  default {
    vuex_config:function () {
     return new vuex.Store({
            modules:{
                res:ResModule
            }
        })
    }
}
