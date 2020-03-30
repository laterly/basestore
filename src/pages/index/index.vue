<template>
  <div class="index flex-column">
    <div v-for="(layoutItem,layoutIndex) in homePageData" :key="layoutIndex">
      <listLaylout v-if="layoutItem.layout==1" :products="layoutItem.products"></listLaylout>
      <slideLayout v-if="layoutItem.layout==2" :products="layoutItem.products"></slideLayout>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import listLaylout from "@/components/listLaylout.vue";
import slideLayout from "@/components/slideLayout.vue";
export default {
  data() {
    return {
      sarchValue: "111", //搜索的关键字
    };
  },
  components: {
    listLaylout,
    slideLayout
  },
  computed: {
    ...mapState(['homePageData'])
  },
  created() {
    this.$store.dispatch('getHomePageData');
  },
  methods: {
    getData(){
      console.log('dasd',this.homePageData);
    }
  }
};
</script>
<style lang="stylus" scoped>
 .index{
   padding-bottom:.6rem;
 }
</style>