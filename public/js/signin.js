const checkValidation = (data)=>{
    if(data.email ==''){
        return false;
    }
    else if(data.password ==''){
        return false;
    }
    else {
        return true;
    }
}
const signInApi = async(data)=>{
    const api = API_LIST["SIGNIN"];
    const result = await ajax(REQUEST_TYPE["POST"],api,data);
    console.log(result);
    if(result && result.status == "success"){
        window.localStorage.setItem("TOKEN",result.token);
        window.localStorage.setItem('USER',result.user.email)
        window.location.href='/adminhome';
    }
    else{
        errorsMsg(result.status,result.message);
        console.log(result.status);
    }
}

const getUserInputValuesSignInAdmin =()=>{
    const dataObj = {}
    dataObj.email = $("#adminEmailInputId").val();
    dataObj.password = $("#adminPasswordInputId").val();
    if(checkValidation(dataObj)){
        signInApi(dataObj);
    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const loadSignInClicks = ()=>{
    $('#signInAdminSubmitButtonId').unbind();
    $('#signInAdminSubmitButtonId').click(()=>{
        getUserInputValuesSignInAdmin()
    });
} 

$(document).ready(()=>{
    loadSignInClicks()
})