const checkAdminAPI = async()=>{
    const api = API_LIST['CHECKADMIN'];
    try {
        const result = await ajax(REQUEST_TYPE["GET"],api,{});
        console.log(result);
        if(!result || !(result.status=="success")){
            window.location.href='/';
        }     
    } catch (error) {
        if(error.statusText == "Unauthorized"){
            localStorage.clear();
            window.location.href='/';
        }
        console.log(error);
    }       
   
}
const checkToken=()=>{
    let token = localStorage.getItem("TOKEN");
            if (token && token.length > 12) {
                checkAdminAPI();
            }
            else{
                window.location.href='/'
            } 
}

$(document).ready(()=>{
     checkToken();
})