const checkauthAPI = async()=>{
    const api = API_LIST['CHECKDEPARTMENT'];
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
                checkauthAPI();
            }
            else{
                window.location.href='/'
            } 
}

$(document).ready(()=>{
     checkToken();
})