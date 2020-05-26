<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        
    </div>
       
</template>

<script>
import CityHeader from "./components/Header"
import CitySearch from "./components/Search"


export default {
  name: 'Home',
  components:{
      CityHeader,
      CitySearch
     
  },
  data (){
      return {
        
      }
      
  },
  methods:{
      
  },


  mounted () {
     
  }
}
</script>

<style >

</style>
