const checkValidationTeacher = (data)=>{
    if(data.teacher_id ==''){
        return false;
    }
    else if(data.teacher_password ==''){
        return false;
    }
    else {
        return true;
    }
}
const signInApiTeacher = async(data)=>{
    const api = API_LIST["TEACHERSIGNIN"];
    const result = await ajax(REQUEST_TYPE["POST"],api,data);
    if(result && result.status == "success"){
        window.localStorage.setItem("TOKEN",result.token);
        window.localStorage.setItem('TEACHER',result.teacher.teacher_id);
        window.location.href='/teacher';
    }
    else{
        errorsMsg(result.status,result.message);
        console.log(result.status);
    }
}

const getUserInputValuesSignInTeacher =()=>{
    const dataObj = {}
    dataObj.teacher_id = $("#teacherEmailInputId").val();
    dataObj.teacher_password = $("#teacherPasswordInputId").val();
    if(checkValidationTeacher(dataObj)){
        signInApiTeacher(dataObj);
    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const loadTeacherSignInClicks = ()=>{
    $('#signInTeacherSubmitButtonId').unbind();
    $('#signInTeacherSubmitButtonId').click(()=>{
        getUserInputValuesSignInTeacher()
    });
} 

$(document).ready(()=>{
    loadTeacherSignInClicks()
})