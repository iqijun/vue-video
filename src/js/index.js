import vue from "vue";
import ElementUI from 'element-ui'
import  memberNav from "./../component/member/navBar.vue"

import vueRouter from "vue-router"
import  {routerConfig}  from  "./config/routerConfig"

import 'element-ui/lib/theme-default/index.css'


vue.use(ElementUI)
vue.use(vueRouter)
vue.component("member-nav",memberNav);




new vue({
    el:".container",
    router:routerConfig
})