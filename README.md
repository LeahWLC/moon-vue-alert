# Vue Alert

Vue.js alert/modal plugin for vue/vue 3

## Installation

# npm
npm install @moon/vue-alert
```

## Import

```js
// In you main.js
// ... considering that your app creation is here
import Malert from "@moon/vue-alert";

createApp(App).use(Malert).mount("#app");
```

## Usage

```js
this.$malert.alert(`I'm a malert`);
this.$malert.alert({
	title:"I am a title",
	text:"I am a malert"});