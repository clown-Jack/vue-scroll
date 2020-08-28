<template>
  <div class="scroll">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <a :href="item.href">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop,Vue } from "vue-property-decorator";
import axios from 'axios';
@Component
export default class VueScroll extends Vue {
  public list = [];
  private mounted(){
    axios.get("/data.json").then(res=>{
      this.list = res.data.data
    })
  }
}
</script>
<style lang="stylus" scoped>
ul
  list-style-type none
  padding 0

li
  margin 0 10px

a
  color #42b983
</style>