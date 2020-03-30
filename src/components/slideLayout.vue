<template>
    <div class="slide">
        <div class="titile">横向滑动</div>
        <div class="slide-box">
            <div class="slide-box-item" v-for="(item,index) in products" :key="index">
                <div class="slide-each">
                    <div class="slide-img">
                        <img v-lazy="item.image" lazy="loading" class="img-block"/>
                    </div>
                    <div class="slide-des">{{item.name}}.</div>
                    <div class="price">￥{{item.price}}<span class="del-price">￥{{item.retailPrice}}</span></div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
  props:{
      products:{
          type:Array,
          default:[]
      }
  },
  data() {
    return {
      
    };
  },
  created() {
      console.log('products',this.products);
  },
  methods: {
    
  }
};
</script>
<style lang="stylus" scoped>
 .titile{
    margin-top:1.13rem;
    font-size:.36rem;
    font-weight:bold;
    text-align:center;
    color:rgba(255,44,44,1);
    margin-bottom:.2rem;
  }
  .slide-box {
  overflow-y: hidden;
  overflow-x: scroll;
  padding-right: .3rem;
  padding-left: .3rem;
  font-size: 0;
  white-space: nowrap;
}
 .slide-box-item {
  display:inline-block;
  margin-left: .2rem;
  background-color:#fff;
  width:2.6rem;
}
.slide-box-item:first-child{
    margin-left: 0;
}
.slide-each {
  width:2.6rem;
  height:4.8rem;
  .slide-img{
    height:2.6rem;
  }
  .slide-des{
    font-size:.24rem;
    color:rgba(112,112,112,1);
    padding:0 0.17rem 0 0.03rem;
    box-sizing:border-box;
    white-space: normal;
    margin-top:.15rem;
    overflow: hidden;  
    -webkit-line-clamp: 2;  
     text-overflow: -o-ellipsis-lastline;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    height:.64rem;
    text-overflow: ellipsis;
  }
  .price{
      font-size:.24rem;
      font-weight:400;
      line-height:.32rem;
      color:rgba(201,70,42,1);
      padding-left:.2rem;
      margin-top:.48rem;
      box-sizing:border-box;
      .del-price{
          text-decoration:line-through;
          font-size:.24rem;
          font-weight:400;
          line-height:.32rem;
          color:rgba(220,220,220,1);
          padding-left:0.05rem;
      }
  }
}

</style>