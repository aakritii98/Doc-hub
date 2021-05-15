
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
        successfull('Department Deleted SuccessFully!!!!')
    }
    else{
        error();
        console.log(result.status);
    }
}


const getUserInputValues =()=>{
    const dataObj = {}
    dataObj.department_id = $("#departmentId").val();
    if(checkValidation(dataObj)){
        confirmAlert(departmentRemoveApi,dataObj);
    }
    else{
        console.log("details are not filled properly,try again...");
    };
}
const getUserInputV =()=>{
    const dataObj = {}
    dataObj.department_id = $("#form34RemoveD").val();
    if(checkValidation(dataObj)){
        confirmAlert(departmentRemoveApi,dataObj);
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

    $('#removeDId').unbind();
    $('#removeDId').click(()=>{
        getUserInputV();
    });
} 

$(document).ready(()=>{
    loadDepartmentAddClicks()
})