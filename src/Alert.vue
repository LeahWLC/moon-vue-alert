<template>
  <div class="m-alert-bg">
    <div class="m-alert-container">
      <div class="m-alert-title" v-text="title"></div>
      <div class="m-alert-body" v-text="text"></div>
      <div class="m-alert-buttons">
        <button class="m-alert-buttons-confirm" @click="close()">确定</button>
        <button class="m-alert-buttons-cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'m-alert',
    props: {
      title: {
        type: String,
        default:''
      },
      text: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'default'
      }
    },
    data() {
      return {
        parentNode: null
      }
    },
    beforeMount() {
      this.createParents()
    },
    mounted() {
      this.showAlert()
    },
    methods: {
      createParents() {
        this.parentNode = document.querySelector('.m-alert-container')
        if(!this.parentNode) {
          this.parentNode = document.createElement('div')
          this.parentNode.className = 'm-alert-container'
        }

        const container = document.body
        container.appendChild(this.parentNode)
      },
      removeElement(el) {
        if (typeof el.remove !== 'undefined') {
          el.remove()
        } else {
          el.parentNode.removeChild(el)
        }
      },
      showAlert() {
        this.parentNode.insertAdjacentElement('afterbegin', this.$el)
      },
      close(){
        this.removeElement(this.$el)
      }
    },
    computed: {

    },
    beforeUnmount() {
      this.close()
    }
  }
  
</script>

<style lang="scss" scoped>
  .m-alert-bg{
    display:flex;
    position: absolute;
    z-index: 9999;
    top:0;
    left:0;
    right:0;
    bottom:0;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background-color:rgba(0,0,0,0.4);
    transition:background-color .1s;
    overflow-y:auto;
  }
  .m-alert-container{
    display:flex;
    position: relative;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    width: 32em;
    max-width: 90%;
    padding: 1.25em;
    border: none;
    border-radius: 5px;
    background: #fff;
    font-family: inherit;
    font-size: 1rem;
  }
  .m-alert-title, .m-alert-body{
    position: relative;
    max-width: 100%;
    margin: 0 0 .4em;
    padding: 0;
    color: #595959;
    font-size: 1.875em;
    font-weight: 600;
    text-align: center;
    text-transform: none;
    word-wrap: break-word;
  }
  .m-alert-body{
    font-size: 1.275em;
    font-weight: 400;
  }
  .m-alert-buttons {
    display: flex;
    z-index: 1;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 1.25em auto 0;
    padding: 0 1.6em;
    .m-alert-buttons-confirm {
      border: 0;
      border-radius: .25em;
      background: #2778c4;
      color: #fff;
      font-size: 1.0625em;
    }
    .m-alert-buttons-cancel {
      display:none;
    }
  }
</style>