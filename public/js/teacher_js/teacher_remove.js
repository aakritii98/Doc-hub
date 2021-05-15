
const checkValidation = (data)=>{
    if(data.teacher_id ==''){
         return false;
     }
     else {
         return true;
     }
 }
 const teacherRemoveApi = async(data)=>{
     const api = API_LIST["REMOVETEACHERPOST"];
     const result = await ajax(REQUEST_TYPE["POST"],api,data);
     console.log(result);
     if(result && result.status == "success"){
         successfull('Teacher Deleted SuccessFully!!!!')
     }
     else{
         error();
         console.log(result.status);
     }
 }
 
const getUserInputValuesTeacher =()=>{
    const dataObj = {}
    dataObj.teacher_id = $("#teacherId").val();
    if(checkValidation(dataObj)){
        confirmAlert(teacherRemoveApi,dataObj);
    }
    else{
        console.log("details are not filled properly,try again...");
    };
}
const getUserInputValuesT =()=>{
    const dataObj = {};
    dataObj.teacher_id = $("#form34TteacherRemove").val();
    console.log( dataObj.teacher_id);
    if(checkValidation(dataObj)){
        confirmAlert(teacherRemoveApi,dataObj);
    }
    else{
        console.log("details are not filled properly,try again...");
    };
}


const loadTeacherAddClicks = ()=>{
    $('#teacherRemoveSubmitButtonID').unbind();
    $('#teacherRemoveSubmitButtonID').click(()=>{
        getUserInputValuesTeacher();
    });

    $('#removeFromPopup').unbind();
    $('#removeFromPopup').click(()=>{
        getUserInputValuesT();
    });
} 

$(document).ready(()=>{
    loadTeacherAddClicks()
})