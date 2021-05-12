const getDepartDetailsApi = async()=>{
    const api = API_LIST["GETDEPARTMENTPROFILEDETAILS"];
    const result = await ajax(REQUEST_TYPE["GET"],api,{});
    console.log(result);
    if(result && result.status == "success"){
        showDepartDetails(result.data);
    }
    else{
        console.log(result.status);
    }
}
const departDetailsPostAPI = async(data)=>{
    const api = API_LIST["POSTDEPARTMENTPROFILEDETAILS"];
    const result = await ajax(REQUEST_TYPE["POST"],api,data);
    console.log(result);
    getDepartDetailsApi();
    
}

const showDepartDetails = (data)=>{
    console.log('hello',data.department_name);
    $('#dName').val(data.department_name)
    $('#sideNameProfile').html(data.department_name);
    $('#dNumber').val(data.phonenumber)
    $('#dEmail').val(data.department_id)
    $('#sideEmailProfile').html(data.department_id)
   $('#dCity').val(data.city)
 $('#adminPinCode').val(data.pincode)
   $('#dCountry').val(data.country)
  $('#dState').val(data.state)

   


}

const SaveAllTheDepartmentDetails = ()=>{
    const result = {}
    result.name = $('#dName').val()
    result.phonenumber = $('#dNumber').val()
    result.email = $('#dEmail').val()
    result.city = $('#dCity').val()
    result.pincode = $('#dPin').val()
    result.country = $('#dCountry').val()
    result.state = $('#dState').val()
    console.log(result);
    if(result)
    {
       departDetailsPostAPI(result);
    }
    else
    {
        console.log("didn't find details");
    }
    
}

const clicks = ()=>{
    $("#dSubmitDetailsButton").click(()=>{
        console.log("hello");
        SaveAllTheDepartmentDetails();
        // clrDetails();
    });
   
}

// const clrDetails = ()=>{
//     $('#adminName').val("")
//     $('#adminPnumber').val("")
//     $('#adminAdress').val("")
//     $('#adminEmail').val("")
//  $('#adminEducation').val("")
//  $('#adminDateOfBirth').val("")
//    $('#adminCity').val("")
//  $('#adminPinCode').val("")
//    $('#adminCountry').val("")
//   $('#adminState').val("")
// }

$(document).ready(()=>{
    getDepartDetailsApi();
    clicks();
})