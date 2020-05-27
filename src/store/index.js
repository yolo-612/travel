import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import mutations from "./mutations"

Vue.use(Vuex)



export default  new Vuex.Store({
    state,
    // actions:{
    //     changeCity(ctx,city){  
    //         //console.log(city)
    //         //ctx表示的是上下文，可以拿到commit方法
    //         ctx.commit("changeCity",city)
    //   }
    // },
    mutations
 })

