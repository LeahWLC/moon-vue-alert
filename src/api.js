import MAlert from './Alert.vue'
import mount from './utils/mount-component'

const Api = (globalOptions = {}) => {
  return {
    alert(message, options = {}) {
      let localOptions
      if (typeof message == 'string') {
        localOptions = { message, ...options }
      } else {
        localOptions = { ...message, ...options }
      }
      const c = mount(MAlert, {
        props: { ...globalOptions, ...localOptions}
      })
      return c
    },
    clear() {

    },
    success() {

    },
    error() {

    },
    info() {

    },
    warning() {

    },
    confirm() {

    },
    prompt() {

    }
  }
}

export default Api