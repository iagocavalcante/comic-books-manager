export const notifications = {
  methods: {
    showNotification(title, text, color) {
      this.$vs.notify({
        title: title,
        text: text,
        color: color
      })
    }
  }
}