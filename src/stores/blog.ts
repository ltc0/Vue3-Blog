import { BlogInfo } from "./types/index";
import { defineStore } from "pinia"
import { getBlog } from '@/http/request'
const useBlogStore = defineStore("useBlogStore", {
  state: (): BlogInfo => ({
    userId: 0,
    title: '',
    body: '',
  }),
  actions: {
    getBlog() {
      return new Promise(
        (resolve, reject) => {
          getBlog().then((res) => {
            this.userId = res.data.userId;
            this.title = res.data.title;
            this.body = res.data.body;
            resolve(res)
          }).catch((err) => {
            reject(err)
          })
        }
      )
    }
  }
  

  });


export default useBlogStore;