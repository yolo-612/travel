import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export default  new Vuex.Store({
    state:{
       city:"北京"
    },
    // actions:{
    //     changeCity(ctx,city){  
    //         //console.log(city)
    //         //ctx表示的是上下文，可以拿到commit方法
    //         ctx.commit("changeCity",city)
    //   }
    // },
    mutations:{ //mutations 中也有两个参数，一个是 state，后面的就是传入参数
        changeCity(state,city){
              state.city=city
        }
     }


 })

