var app = new Vue({
      el: '#app',
      data: {
        message: 'Hello World',
        Job: 'Flexer'
      }
    });

    var app2 = new Vue({    
        el: '#app-2',
        data: {
            message: 'you loaded ths page on' + new Date().toLocaleDateString()
        }
    });