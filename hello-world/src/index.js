var app = new Vue({
  el: '#app',
  data: {
    message: 'Reverse this message'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
