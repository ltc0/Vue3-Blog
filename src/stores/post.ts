import { PostIndex } from "@/stores/types/PostIndex";
import { defineStore } from "pinia"
import axios from "axios"
//import {getPost} from "@/http/getPost";
//const folderPath = 'public/blog_store/数据结构.json'
const usePostStore = defineStore("usePostStore", {
    state: (): PostIndex => ({
      id: "" ,
      section: "",
      title: "",
      date: "",
      description: '',
      url: '',
    }),

    actions: {
        async fetchMdFiles(folderPath: string) {
            return new Promise(
              (resolve, reject) => {
                axios.get(folderPath).then((res) => {
                  console.log(res)
                  resolve(res)
                }).catch((err) => {
                  reject(err)
                })
                }
            )
        }
    }
    }
    );
  
  
export default usePostStore;