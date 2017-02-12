import vue from "vue";
import ElementUI from 'element-ui'
import  memberNav from "./../component/member/navBar.vue"

import vueRouter from "vue-router"
import  {routerConfig}  from  "../config/routerConfig"
import  vueResource from "vue-resource"
import global from "./global"
import  vuex from "vuex"

import 'element-ui/lib/theme-default/index.css'


vue.use(ElementUI)
vue.use(vueRouter)
vue.use(vueResource)
vue.use(global)
vue.use(vuex)
vue.component("member-nav",memberNav);
import  store from "../store/vuexConfig"



new vue({
    el:".container",
    router:routerConfig,
    store:store.vuex_config()
})