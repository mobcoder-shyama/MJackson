import environments from "./enviroments.json";
let env_index = 0

export default (() => {
 
  return {
     //Dashboard
      'HOME_LIST_DATA':environments[env_index].BaseUrl+"search?term=",
    }

})()