<template>
  <ul class="news">
    <li v-for="item in news" v-bind:key="item.id">
        <input type="checkbox" @change="changeState(item)" :checked="item.del" />
        <del v-if="item.del">
            {{ item.name }}
        </del>
        <span v-else>
          {{ item.name }}
        </span>
    </li>
  </ul>
</template>

<script>
export default {
  data: function() {
    return {
      news: [
        {id:1, name:'习近平与德国总理举行会晤', del:false},
        {id:2, name: '英雄，就是普通人拥有一颗伟大的心！', del:false},
        {id:3, name: '热血MV！不老的《英雄赞歌》 我们家的报国故事', del:false},
        {id:4, name: '审计委员会首次会议，习近平提了哪些要求  新华社评', del:false},
        {id:5, name: '习近平要求构建这样的生态文明体系  央广时评', del:false}
      ]
    }
  },
  methods: {
    changeState(item) {
      item.del = !item.del
    }
  }
}
</script>

<style lang="stylus" scoped>
.news {
  list-style: none;
  text-align: left;

  li {
    list-style: none;
    del {
      color: grey;
    }
  }
}
</style>


