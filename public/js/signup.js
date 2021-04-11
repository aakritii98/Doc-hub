
const checkValidation = (data)=>{
    if(data.name ==''){
        return false;
    }
    else if(data.email ==''){
        return false;
    }
    else if(data.institute==''){
        return false;
    }
    else if(data.password !=data.confirmPassword){
        return false;
    }
    else {
        return true;
    }
}
const signUpApi = async(data)=>{
    const api = API_LIST["SIGNUP"];
    const result = await ajax(REQUEST_TYPE["POST"],api,data);
    console.log(result);
    if(result && result.status == "success"){
        window.localStorage.setItem("TOKEN",result.token);
    }
    else{
        console.log(result.status);
    }
}

const getUserInputValues =()=>{
    const dataObj = {}
    dataObj.name = $("#signUpNameId").val();
    dataObj.email = $("#signUpEmaiId").val();
    dataObj.institute = $("#signUpInstitudeNameId").val();
    dataObj.password = $("#signUpPasswordId").val();
    dataObj.confirmPassword = $("#signUpConfirmPassId").val();
    if(checkValidation(dataObj)){
        signUpApi(dataObj);
    }
    else{
        console.log("details are not filled properly,try again...");
    };
}

const loadSignupClicks = ()=>{
    $('#signUpSubmitButtonId').unbind();
    $('#signUpSubmitButtonId').click(()=>{
        console.log("clicked");
        getUserInputValues()
    });
} 

$(document).ready(()=>{
    loadSignupClicks()
})