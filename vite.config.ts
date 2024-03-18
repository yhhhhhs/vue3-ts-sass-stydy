import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //配置sass
  css: {
    preprocessorOptions: {
   scss: {
        /**如果引入多个文件，可以使用
       * '@import "@/assets/scss/globalVariable1.scss";
       * @import"@/assets/scss/globalVariable2.scss";'
      **/
        additionalData: '@import "../assets/css/globalVar.scss";',
      }
    }
  },

})
