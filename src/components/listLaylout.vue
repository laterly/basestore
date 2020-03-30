<template>
    <div class="list">
        <div class="titile">一大两小</div>
        <div class="list-layout-box">
          <div class="list-box" v-for="(item,index) in products" :key="index">
            <div class="img-box">
              <img v-lazy="item.image" lazy="loading" class="img-block"/>
            </div>
            <div class="des">{{item.name}}</div>
            <div class="flex buy-box">
              <div class="price">￥{{item.price}}</div>
              <div class="buy"></div>
            </div>
          </div>
         
        </div>
        <div class="more border">查看更多</div>
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
  .list-layout-box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between ;
    box-sizing:border-box;
    padding:0 .3rem;

  }

  .list-layout-box > .list-box{
    width:3.35rem;
    height:5.3rem;
    background:#fff;
    margin-top:.2rem;
    .img-box{
      height:3.26rem;
    }
    .des{
      font-size:.24rem;
      line-height:.32rem;
      box-sizing:border-box;
      padding:0 .07rem;
      margin-top:.16rem;
      overflow: hidden;  
       text-overflow: -o-ellipsis-lastline;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;  
      height:.64rem;
      text-overflow: ellipsis;
    }
    .buy-box{
      justify-content: space-between ;
      margin-top:.16rem;
      padding:0 .08rem 0 .12rem;
      .price{
        font-size:.24rem;
        line-height:.46rem;
        color:rgba(201,70,42,1);
      }
      .buy{
        width:.46rem;
        height:.46rem;
        border-radius:100%;
        background:url('../img/gouwuche.png') rgba(255,75,52,1) no-repeat center center;
        background-size:.3rem .3rem;
      } 
    }
  }

  .list-layout-box > .list-box:nth-child(3n+1){
   flex: 0 1 100%;
   height:6.68rem;
   margin-top:0;
   .img-box{
      height:3.87rem;
    }
    .des{
      font-size:.28rem;
      color:rgba(112,112,112,1);
      line-height:.37rem;
      box-sizing:border-box;
      padding:0 .08rem;
      margin-top:.21rem;
      overflow:hidden;
      text-overflow: -o-ellipsis-lastline;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      height:.74rem;
      -webkit-line-clamp: 2;  
      text-overflow: ellipsis;
    }
    .buy-box{
      margin-top:.65rem;
      padding:0 .26rem 0 .12rem;
    }
  }
  .more{
    width:6.9rem;
    height:.88rem;
    line-height:.88rem;
    background:rgba(255,255,255,1);
    border-radius:4px;
    margin:0 auto;
    font-size:.28rem;
    font-weight:400;
    color:rgba(112,112,112,1);
    text-align:center;
    margin-top:.3rem;
  }
</style>