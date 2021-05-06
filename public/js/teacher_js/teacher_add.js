
const checkValidation = (data)=>{
    if(data.department_name ==''){
        return false;
    }
    else if(data.department_id ==''){
        return false;
    }
    else if(data.teacher_name ==''){
        return false;
    }
    else if(data.teacher_id ==''){
        return false;
    }
    else if(data.teacher_password==''){
        return false;
    }
    else if(data.teacher_confirmPassword==''){
        return false;
    }
    else if(data.department_password !=data.department_confirmPassword){
        return false;
    }
    else {
        return true;
    }
}
const teacherAddApi = async(data)=>{
    const api = API_LIST["ADDTEACHERPOST"];
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


const getUserInputValuesTeacher =()=>{
    const dataObj = {}
    dataObj.department_id = localStorage.getItem("DEPARTMENT");
    dataObj.teacher_id=$("#teacherid").val();
    dataObj.teacher_name = $("#teachername").val();
    dataObj.department_name = $("#teacherdep").val();
    dataObj.teacher_password = $("#teacherpass").val();
    dataObj.teacher_confirmPassword = $("#conpass").val();
    console.log(dataObj);
    if(checkValidation(dataObj)){
        teacherAddApi(dataObj);
    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const loadTeacherAddClicks = ()=>{
    $('#teacherAddSubmitButtonId').unbind();
    $('#teacherAddSubmitButtonId').click(()=>{
        getUserInputValuesTeacher();
    });
} 

$(document).ready(()=>{
    loadTeacherAddClicks()
})