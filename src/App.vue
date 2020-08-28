<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
     <div class="infinite-list" v-infinite-scroll="load" style="overflow:auto;height:200px">
        <ElementScroll :count="count"/>
     </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import VueScroll from './components/VueScroll.vue';
import ElementScroll from './components/ElementScroll';

@Component({
  components: {
    // VueScroll,
    ElementScroll
  },
})
export default class App extends Vue {
    public count = [1, 2, 3, 4, 4, 5];
    public num = 0;
    /**
     * load
     */
    public load() {
        this.count.push(this.num++)
    }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
ul
  list-style-type none
  padding 0

li
  margin 0 10px

a
  color #42b983

.infinite-list-item
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px;
    color: #7dbcfc;
</style>
