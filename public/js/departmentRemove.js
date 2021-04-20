
const checkValidation = (data)=>{
   if(data.department_id ==''){
        return false;
    }
    else {
        return true;
    }
}
const departmentRemoveApi = async(data)=>{
    const api = API_LIST["POSTDEPARTMENTREMOVE"];
    const result = await ajax(REQUEST_TYPE["POST"],api,data);
    console.log(result);
    if(result && result.status == "success"){
    }
    else{
        console.log(result.status);
    }
}


const getUserInputValues =()=>{
    const dataObj = {}
    dataObj.department_id = $("#departmentId").val();
    if(checkValidation(dataObj)){
        departmentRemoveApi(dataObj);
    }
    else{
        console.log("details are not filled properly,try again...");
    };
}

const loadDepartmentAddClicks = ()=>{
    $('#departmentRemoveSubmitButtonID').unbind();
    $('#departmentRemoveSubmitButtonID').click(()=>{
        getUserInputValues();
    });
} 

$(document).ready(()=>{
    loadDepartmentAddClicks()
})