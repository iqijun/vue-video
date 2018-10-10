/**
 * Created by xingguishuai on 2017-02-08.
 */
import  videoUpload from "./../component/member/videoUpload.vue"
import  memberIndex from  "./../component/member/memberIndex.vue"
import  vList from  "./../component/member/vList.vue"
import VueRouter from "vue-router"


export  const routerConfig=new VueRouter({
    routes: [
        {path:"/",component:memberIndex,name:"memberIndex",
            children:[
                 {path:"/vUp",component:videoUpload,name:"vUp"},
                 {path:"/vList",component:vList,name:"vList"}
            ]
        }
    ]
});
