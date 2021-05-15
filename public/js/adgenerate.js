
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
// const adGenerateRecordApi = async(data)=>{
//     const api = API_LIST["GETTEACHERRECORDGENERATE"];
//     const result = await ajax(REQUEST_TYPE["GET"],api,data);
//     console.log(result);
//     if(result && result.status == "success"){
//         successfull('Department added Successfully!!!')
//     }
//     else{
//         somethingWentWrong();
//         console.log(result.status);
//     }
// }


const getUserInputValues =()=>{
    const dataObj = {}
    // dataObj.admin_id = localStorage.getItem("USER");
    $('#rtype').each(function(){
        dataObj.recordType = $(this).val();
    });
    $('#ryear').each(function(){
        dataObj.recordYear = $(this).val();
    });
    dataObj.department_name = $("#departmentAddGenerate").val();
    if(checkValidation(dataObj)){
        window.localStorage.setItem("DEPARTMENT_NAME",dataObj.department_name);
        window.localStorage.setItem("RECORD_TYPE",dataObj.recordType);
        window.localStorage.setItem("RECORD_YEAR",dataObj.recordYear);

        window.location.href="/viewGenerate"
        // adGenerateRecordApi(dataObj);
    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const loadAddGenerateClicks = ()=>{
    $('#GenerateSubmitButtonId').unbind();
    $('#GenerateSubmitButtonId').click(()=>{
        getUserInputValues();
    });
} 

$(document).ready(()=>{
    loadAddGenerateClicks()
})