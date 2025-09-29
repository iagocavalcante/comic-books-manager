<template>
  <div class="comic-section">
    <h1 class="section-title">📚 To Be Read</h1>
    <div v-if="comicBooks.length === 0" class="empty-state">
      <p>No comic books to read yet. Add some!</p>
    </div>
    <vs-row vs-justify="flex-start" class="comic-grid">
      <vs-col class="comic-col" type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-lg="4" vs-sm="6" vs-xs="12" :key="comicBook._id" v-for="comicBook in comicBooks">
        <div class="comic-card-wrapper">
          <div class="comic-card" @click="toggleDetails(comicBook._id)">
            <div class="card-image-container">
              <img :src="comicBook.image || 'https://via.placeholder.com/300x450?text=No+Image'" :alt="comicBook.title" class="comic-cover">
              <div class="image-overlay"></div>
              <span class="comic-badge unread">Unread</span>
            </div>
            <div class="card-info-overlay">
              <h3 class="comic-title">{{comicBook.title}}</h3>
              <p class="comic-meta">
                <span class="meta-item">{{publisher(comicBook)}}</span>
                <span class="meta-separator">•</span>
                <span class="meta-item">{{formatDate(comicBook.published_date)}}</span>
              </p>
            </div>
            <div class="card-details" :class="{ 'show': expandedCard === comicBook._id }">
              <div class="details-content">
                <div class="comic-saga">
                  <strong>Saga:</strong> {{comicBook.saga}}
                </div>
                <p class="comic-description">{{comicBook.description}}</p>
                <div class="comic-stats">
                  <div class="stat-item" v-if="comicBook.pages">
                    <i class="material-icons">library_books</i>
                    <span>{{comicBook.pages}} pages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-actions">
            <button @click.stop="editComicBook(comicBook)" class="action-btn edit-btn" title="Edit">
              <i class="material-icons">edit</i>
            </button>
            <button class="action-btn favorite-btn" title="Favorite">
              <i class="material-icons">favorite</i>
            </button>
            <button class="action-btn read-btn" title="Mark as read">
              <i class="material-icons">{{comicBook.read ? 'turned_in' : 'turned_in_not'}}</i>
            </button>
          </div>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'ReadComicBooks',
  props: {
    comicBooks: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      expandedCard: null
    }
  },
  methods: {
    publisher ( comicBook ) {
      return (comicBook.publisher && comicBook.publisher.length > 0) ? comicBook.publisher[0].name : 'Unknown'
    },
    editComicBook(comicBook) {
      this.$emit('edit', comicBook)
    },
    formatDate(date) {
      if (!date) return 'N/A'
      const d = new Date(date)
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
    },
    toggleDetails(id) {
      this.expandedCard = this.expandedCard === id ? null : id
    }
  }
}
</script>


<style lang="stylus" scoped>
.comic-section
  padding 20px
  width 100%

.section-title
  font-size 2rem
  font-weight 700
  color #2c3e50
  margin-bottom 30px
  text-align left
  padding-bottom 15px
  border-bottom 3px solid #3498db

.empty-state
  text-align center
  padding 60px 20px
  color #95a5a6
  font-size 1.2rem

.comic-grid
  margin 0 -15px

.comic-col
  padding 15px
  margin-bottom 30px
  
@media (min-width: 1200px)
  .comic-col
    padding 20px

.comic-card-wrapper
  width 100%
  display flex
  flex-direction column
  gap 12px

.comic-card
  position relative
  width 100%
  aspect-ratio 2/3
  border-radius 20px
  overflow hidden
  cursor pointer
  background white
  box-shadow 0 8px 24px rgba(0,0,0,0.12)
  transition all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
  
  &:hover
    transform translateY(-4px)
    box-shadow 0 12px 32px rgba(0,0,0,0.18)
    
  &:hover .comic-title
    color #667eea

.card-image-container
  position relative
  width 100%
  height 65%
  border-radius 20px 20px 0 0
  overflow hidden
  background linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%)
  
.comic-cover
  width 100%
  height 100%
  object-fit cover
  transition transform 0.3s ease
  
.comic-card:hover .comic-cover
  transform scale(1.05)

.comic-badge
  position absolute
  top 16px
  right 16px
  padding 8px 16px
  border-radius 24px
  font-size 0.75rem
  font-weight 700
  text-transform uppercase
  letter-spacing 0.8px
  box-shadow 0 4px 12px rgba(0,0,0,0.15)
  z-index 2
  
  &.unread
    background #667eea
    color white

.card-info-overlay
  position relative
  padding 20px
  background white
  height 35%
  display flex
  flex-direction column
  justify-content center
  
.comic-title
  font-size 1.1rem
  font-weight 700
  color #2c3e50
  margin 0 0 10px 0
  line-height 1.4
  display -webkit-box
  -webkit-line-clamp 2
  -webkit-box-orient vertical
  overflow hidden
  transition color 0.3s ease

.comic-meta
  display flex
  align-items center
  gap 6px
  font-size 0.8rem
  color #7f8c8d
  margin 0
  flex-wrap wrap
  
.meta-item
  font-weight 500
  
.meta-separator
  opacity 0.5
  font-weight 700

.card-details
  position absolute
  top 100%
  left 0
  right 0
  background white
  box-shadow 0 8px 24px rgba(0,0,0,0.15)
  border-radius 0 0 12px 12px
  max-height 0
  overflow hidden
  transition all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
  z-index 3
  
  &.show
    max-height 400px

.details-content
  padding 20px
  
.comic-saga
  font-size 0.9rem
  color #6c757d
  margin-bottom 12px
  padding 8px 12px
  background #f8f9fa
  border-radius 6px
  border-left 3px solid #667eea
  
  strong
    color #495057
    font-weight 600

.comic-description
  font-size 0.88rem
  line-height 1.6
  color #495057
  margin 12px 0
  
.comic-stats
  margin-top 12px
  display flex
  gap 12px
  
.stat-item
  display flex
  align-items center
  gap 6px
  font-size 0.85rem
  color #6c757d
  
  i
    font-size 18px
    color #667eea

.card-actions
  display flex
  justify-content center
  gap 10px
  padding 8px
  
.action-btn
  width 48px
  height 48px
  border-radius 12px
  border none
  cursor pointer
  display flex
  align-items center
  justify-content center
  transition all 0.2s ease
  box-shadow 0 4px 12px rgba(0,0,0,0.08)
  
  i
    font-size 22px
  
  &:hover
    transform translateY(-2px)
    box-shadow 0 6px 20px rgba(0,0,0,0.15)
  
  &:active
    transform translateY(0)
  
  &.edit-btn
    background linear-gradient(135deg, #667eea 0%, #764ba2 100%)
    color white
  
  &.favorite-btn
    background linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
    color white
  
  &.read-btn
    background linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
    color white

@media (max-width: 768px)
  .comic-title
    font-size 1rem
  
  .comic-meta
    font-size 0.75rem
    
  .action-btn
    width 40px
    height 40px
    
    i
      font-size 18px
</style>
