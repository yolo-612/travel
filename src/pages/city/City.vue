<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hot"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>      
</template>

<script>
import CityHeader from "./components/Header"
import CitySearch from "./components/Search"
import CityList from "./components/List"
import CityAlphabet from "./components/Alphabet"
import axios from "axios"

export default {
  name: 'Home',
  components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
     
  },
  data (){
      return {
          cities:{},
          hot:[]      
      }
      
  },
  methods:{
      getCityInfo(){
          axios.get("../../../static/mock/city.json")
            .then(this.getCityInfoSucc)
      },
      getCityInfoSucc(res){
          res=res.data
          if(res.ret&&res.data){
              const data=res.data
              this.hot=data.hotCities
              this.cities=data.cities
          }
      }
      
  },


  mounted () {
      this.getCityInfo()
  }
}
</script>

<style >

</style>
