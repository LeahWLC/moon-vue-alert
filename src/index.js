import MAlert from './Alert.vue'
import Api from './api.js'

const Plugin = (app, options = {}) => {
  let methods = Api(options)
  app.$malert = methods
  app.config.globalProperties.$malert = methods
}

MAlert.install = Plugin

export default MAlert