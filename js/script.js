new Vue({
    el: '#app',
    data: {
      items: dataItems, 
      currentIndex: 0,
      showDesc: true
    },
    computed: {
      currentItem() {
        return this.items[this.currentIndex];
      }
    },
    methods: {
      toggle() {
        this.showDesc = !this.showDesc;
      },
      nextItem() {
        if (this.currentIndex < this.items.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      },
      prevItem() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.items.length - 1; 
        }
      }
    }

  });