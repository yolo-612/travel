export default{
    changeCity(state,city){ //mutations 中函数也有两个参数，一个是 state，后面的就是传入参数
          state.city=city
          try{
            localStorage.city=city
         }catch(e){}
    }
}