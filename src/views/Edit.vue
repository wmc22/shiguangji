<template>
    <div>
         <van-nav-bar title="地址信息" left-text="返回" left-arrow @click-left="onClickLeft"/>
        <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
    </div>

    
</template>
<script>
export default {
    name:'edit',
    data() {
        return {
        areaList,
      searchResult: []
        }
    },
    methods: {
        onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    },
    onClickLeft(){
        
    }
    },
}
</script>
<style lang="" scoped>
    
</style>