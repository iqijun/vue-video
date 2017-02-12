/**
 * Created by Administrator on 2017/2/12.
 */
import  vue from  "vue";
export  default {

    state:{
        navBars:{}
    },
    mutations:{
        setData(state,{key,data}) {

            state[key] = data;
        }
    },
    actions:{
        loadData(context,{url,key}){
            vue.http.get(url).then(res=>{
                context.commit("setData",{key:key,data:res.body});
            },res=>{

            })
        }
    }

}