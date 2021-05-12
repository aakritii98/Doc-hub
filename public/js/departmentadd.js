
const checkValidation = (data)=>{
    if(data.department_name ==''){
        return false;
    }
    else if(data.department_id ==''){
        return false;
    }
    else if(data.department_password==''){
        return false;
    }
    else if(data.department_confirmPassword==''){
        return false;
    }
    else if(data.department_password !=data.department_confirmPassword){
        return false;
    }
    else {
        return true;
    }
}
const departmentAddApi = async(data)=>{
    const api = API_LIST["POSTDEPARTMENTADD"];
    const result = await ajax(REQUEST_TYPE["POST"],api,data);
    console.log(result);
    if(result && result.status == "success"){
        successfull('Department added Successfully!!!')
    }
    else{
        somethingWentWrong();
        console.log(result.status);
    }       
}


const getUserInputValues =()=>{
    const dataObj = {}
    dataObj.admin_id = localStorage.getItem("USER");
    dataObj.department_name = $("#deparmentNameDepartmentAddId").val();
    dataObj.department_id = $("#departmentIdDepartmentAddId").val();
    dataObj.department_password = $("#passwordDepartmentAddId").val();
    dataObj.department_confirmPassword = $("#confirmpassDepartmentAddId").val();
    if(checkValidation(dataObj)){
        departmentAddApi(dataObj);
    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const loadDepartmentAddClicks = ()=>{
    $('#DepartmentAddSubmitButtonId').unbind();
    $('#DepartmentAddSubmitButtonId').click(()=>{
        getUserInputValues();
    });
} 

$(document).ready(()=>{
    loadDepartmentAddClicks()
})