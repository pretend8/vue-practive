<template>
  <div class="app-wrapper">
    <!--cebianlan-->
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <div>
        <Navbar />
      </div>
      <AppMain />
    </div>
    <!--tingbu-->
    <!--content-->
  </div>
</template>

<script>
import { AppMain, Sidebar, Navbar } from './components'

export default {
  name: 'Index',
  components: {
    AppMain,
    Sidebar,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
    .app-wrapper {
        height: 100%;
        width: 100%;
        border: 1px solid red;
        position: relative;
    }
</style>
