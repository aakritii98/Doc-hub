const checkValidationDepartment = (data)=>{
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
const signInApiDepartment = async(data)=>{
    const api = API_LIST["DEPARTMENTSIGNIN"];
    const result = await ajax(REQUEST_TYPE["POST"],api,data);
    if(result && result.status == "success"){
        window.localStorage.setItem("TOKEN",result.token);
        window.localStorage.setItem('DEPARTMENT',result.department.department_id);
        window.location.href='/depart';
    }
    else{
        errorsMsg(result.status,result.message);
        console.log(result.status);
    }
}

const getUserInputValuesSignInDepartment =()=>{
    const dataObj = {}
    dataObj.department_id = $("#departmentEmailInputId").val();
    dataObj.department_password = $("#departmentPasswordInputId").val();
    if(checkValidationDepartment(dataObj)){
        signInApiDepartment(dataObj);
    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const loadDepartmentSignInClicks = ()=>{
    $('#signInDepartmentSubmitButtonId').unbind();
    $('#signInDepartmentSubmitButtonId').click(()=>{
        getUserInputValuesSignInDepartment()
    });
} 

$(document).ready(()=>{
    loadDepartmentSignInClicks()
})