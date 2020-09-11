import Vue from 'vue';
import App from './App';
import api from './api/index';
import NoteItem from "./components/noteItem/note.vue";
import Uparse from './components/gaoyia-parse/parse.vue';
Vue.component('Uparse', Uparse); // 富文本显示组件
Vue.component('NoteItem', NoteItem)
Vue.prototype.$api = api;
Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
  ...App
})
app.$mount()
