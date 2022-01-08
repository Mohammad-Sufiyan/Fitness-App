var  axios=require('axios');


exports.getProfile=(userID)=>{
    // create a promise for the axios request
    const promise = axios.get(process.env.BASE_URL+'/api/user/profile/'+userID)
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data)
    // return it
    return dataPromise
   
 }

