<template>
    <div class="menu-wrapper">
      <template v-for="item in routes">
        <el-submenu>
          <template slot="title">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <template v-for="child in item.children">
            <sidebar-item v-if="child.children && child.children.length>0" :routes="[child]"></sidebar-item>
            <el-menu-item>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{item.name}}</span>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </div>
</template>

<script>
    export default {
      name: "sideBarItem",
      props: {
        routes: {
          type: Array
        }
      }
    }
</script>

<style scoped>

</style>
