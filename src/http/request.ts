import axios from "axios"

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

export function getBlog(){
    return instance.get("/posts")  
}