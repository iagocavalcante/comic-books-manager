<template>
  <div id="app">
    <sidebar :active.sync="active"/>
    <div id="nav">
      <span @click="showSidebar"><i class="cursor fa fa-3x fa-bars"></i></span>
    </div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-xl="12" vs-xs="12">
        <router-view/>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  components: {
    Sidebar
  },
  data: () => ({
    active: false
  }),
  methods: {
    showSidebar () {
      this.active = !this.active
    }
  }
}
</script>


<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap')

*
  box-sizing border-box
  
body
  font-family 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
  margin 0
  padding 0
  background #f5f7fa

#nav
  position sticky
  top 0
  z-index 100
  display flex
  justify-content flex-end
  align-items center
  padding 15px 30px
  background white
  box-shadow 0 2px 8px rgba(0,0,0,0.08)
  
  .cursor
    color #2c3e50
    transition all 0.3s ease
    padding 8px
    border-radius 8px
    
    &:hover
      background #f0f0f0
      color #3498db

#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  min-height 100vh

.cursor
  cursor pointer
</style>
