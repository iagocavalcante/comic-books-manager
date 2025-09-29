<template>
  <div class="comic-books-container">
    <Dialog :activePrompt.sync="activePrompt" :editComicBook="selectedComicBook" @saved="onComicBookSaved"/>
    
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">📖 My Comic Books Collection</h1>
        <p class="page-subtitle">Manage and track your favorite comic books</p>
      </div>
      <vs-button @click="openCreateDialog" size="large" color="primary" icon="add" class="add-button">
        Add New Comic Book
      </vs-button>
    </div>

    <div v-if="!isLoad" class="loading-state">
      <p>Loading your collection...</p>
    </div>

    <div v-else class="comics-layout">
      <vs-row vs-justify="center">
        <vs-col vs-type="flex" vs-justify="center" vs-align="flex-start" vs-w="12" vs-lg="6" vs-xs="12">
          <read-comic-book :comicBooks="comicBooksRead" @edit="openEditDialog"/>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="flex-start" vs-w="12" vs-lg="6" vs-xs="12">
          <readed-comic-book :comicBooks="comicBooksReaded" @edit="openEditDialog"/>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog'
import ReadComicBook from '@/domains/comic-books/components/ReadComicBook'
import ReadedComicBook from '@/domains/comic-books/components/ReadedComicBook'
export default {
  name: 'ComicBooks',
  components: {
    ReadComicBook,
    ReadedComicBook,
    Dialog
  },
  props: {
    service: {
      required: true
    }
  },
  data: () => ({
    isLoad: false,
    comicBooksRead: [],
    comicBooksReaded: [],
    activePrompt: false,
    selectedComicBook: null
  }),
  mounted () {
    this.loadComicBooks()
  },
  methods: {
    loadComicBooks() {
      this.$service.getAll()
        .then(data => {
          this.isLoad = true
          this.comicBooksRead = [...data.data.filter(comicBook => comicBook.read === false)]
          this.comicBooksReaded = [...data.data.filter(comicBook => comicBook.read !== false)]
        })
        .catch(error => {
          console.log(error) //eslint-disable-line
        })
    },
    openCreateDialog() {
      this.selectedComicBook = null
      this.activePrompt = true
    },
    openEditDialog(comicBook) {
      this.selectedComicBook = comicBook
      this.activePrompt = true
    },
    onComicBookSaved() {
      this.selectedComicBook = null
      this.loadComicBooks()
    }
  }
}
</script>

<style lang="stylus" scoped>
.comic-books-container
  min-height 100vh
  background linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
  padding-bottom 40px

.page-header
  background white
  padding 30px 40px
  box-shadow 0 2px 10px rgba(0,0,0,0.1)
  display flex
  justify-content space-between
  align-items center
  margin-bottom 30px
  flex-wrap wrap
  gap 20px

.header-content
  flex 1
  min-width 250px

.page-title
  font-size 2.5rem
  font-weight 800
  color #2c3e50
  margin 0 0 8px 0
  line-height 1.2

.page-subtitle
  font-size 1.1rem
  color #7f8c8d
  margin 0

.add-button
  font-weight 600
  padding 12px 24px
  border-radius 8px
  box-shadow 0 4px 12px rgba(52, 152, 219, 0.3)
  transition all 0.3s ease
  
  &:hover
    transform translateY(-2px)
    box-shadow 0 6px 16px rgba(52, 152, 219, 0.4)

.loading-state
  text-align center
  padding 80px 20px
  font-size 1.3rem
  color #7f8c8d

.comics-layout
  max-width 1800px
  margin 0 auto
  padding 0 20px

@media (max-width: 768px)
  .page-header
    padding 20px
    flex-direction column
    align-items flex-start
    
  .page-title
    font-size 1.8rem
    
  .add-button
    width 100%
</style>

