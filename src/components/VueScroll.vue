<template>
  <div class="scroll">
    <ul ref="list">
      <li v-for="(item,index) in lists" :key="index">
        <a :href="item.href" v-if="index+10>=num">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { listenerScroll } from "@/utils";
import axios from "axios";
@Component
export default class VueScroll extends Vue {
  public list = [];
  public lists = [];
  public num: any = -1;
  public timer = null;
  public doc = document.documentElement;
  private mounted() {
    axios.get("/data.json").then((res) => {
      this.list = res.data.data;
      this.lists = this.list.slice(0, 35);
    });
    listenerScroll(
      this.doc,
      this.$refs.list,
      () => {
        this.lists = this.lists.concat(this.list.slice(0, 35));
      },
      (num) => {
        this.num = num;
      }
    );
  }
}
</script>

<style lang="stylus" scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #e8f3fe;
  margin: 10px;
  color: #7dbcfc;
}
</style>
