var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })

  var app2 = new Vue({
      el: '#app2',
      data: {
          message: 'Esto es un mensaje tooltip',
      }
  })

  var app3 = new Vue({
    el: '#app3',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })
  
  var app5 = new Vue({
      el: '#app-5',
      data: {
          message: 'Hola me llamo Nelson'
      },
      methods: {
          reverseMessage : function () {
            this.message = this.message.split('').reverse().join('')
          }
      }
  })

  var app6 = new Vue({
      el: '#app-6',
      data: {
          message: 'Hello Vue!'
      }
  })

  Vue.component('list-item', {
      props: ['list'],
      template: '<li>{{ list.text }}</li>'
  })

  var app7 = new Vue({
      el: '#app-7',
      data: {
          bikeList: [
              {id:0,text:'Merida'},
              {id:1,text:'BH'},
              {id:2,text:'Trek'},
              {id:3,text:'Cannondale'},
          ]
      }
  })