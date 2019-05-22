<template>
    <el-menu mode="vertical" theme="dark" :default-active="$route.path" :collapse="" :router="true">
      <sidebar-item></sidebar-item>
    </el-menu>
</template>

<script>
  import SidebarItem from './SidebarItem'
    export default {
      name: "Sidebar",
      components: {
        SidebarItem
      }
    }
</script>

<style scoped>

</style>
