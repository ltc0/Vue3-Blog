import useBlogStore from "./blog";


const useStore = () => ({

    blog: useBlogStore(),

  });
  
  export default useStore;
  