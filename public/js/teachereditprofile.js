const getAdminDetailsApi = async()=>{
    const api = API_LIST["GETTEACHERPROFILEDETAILS"];
    const result = await ajax(REQUEST_TYPE["GET"],api,{});
    console.log(result);
    if(result && result.status == "success"){
        showAdminDetails(result.result);
    }
    else{
        console.log(result.status);
    }
}
const adminDetailsPostAPI = async(data)=>{
    const api = API_LIST["POSTTEACHERPROFILEDETAILS"];
    const result = await ajax(REQUEST_TYPE["POST"],api,data);
    console.log(result);
    getAdminDetailsApi();
    
}

const showAdminDetails = (data)=>{
    console.log("hyyyyyyyy",data);
    $('#adminName').val(data.teacher_name)
    $('#sideNameProfile').html(data.teacher_name)

    $('#adminPnumber').val(data.phonenumber)
    $('#adminAdress').val(data.address)
    $('#adminEmail').val(data.teacher_id)
    $('#sideEmailProfile').html(data.teacher_id)
 $('#adminEducation').val(data.eduction)
 $('#adminDateOfBirth').val(data.dateofbirth)
   $('#adminCity').val(data.city)
 $('#adminPinCode').val(data.pincode)
   $('#adminCountry').val(data.country)
  $('#adminState').val(data.state)

   


}

const SaveAllTheAdminDEtails = ()=>{
    const result = {}
    result.name = $('#adminName').val()
    result.phonenumber = $('#adminPnumber').val()
    result.address = $('#adminAdress').val()
    result.email = $('#adminEmail').val()
    result.eduction = $('#adminEducation').val()
    result.dateofbirth = $('#adminDateOfBirth').val()
    result.city = $('#adminCity').val()
    result.pincode = $('#adminPinCode').val()
    result.country = $('#adminCountry').val()
    result.state = $('#adminState').val()

    console.log(result);
    if(result)
    {
       adminDetailsPostAPI(result);
    }
    else
    {
        console.log("didn't find details");
    }
    
}

const clicks = ()=>{
    $("#saveAdminProfile").click(()=>{
        console.log("hello");
        SaveAllTheAdminDEtails();
        clrDetails();
    });
   
}

const clrDetails = ()=>{
    $('#adminName').val("")
    $('#adminPnumber').val("")
    $('#adminAdress').val("")
    $('#adminEmail').val("")
 $('#adminEducation').val("")
 $('#adminDateOfBirth').val("")
   $('#adminCity').val("")
 $('#adminPinCode').val("")
   $('#adminCountry').val("")
  $('#adminState').val("")
}

$(document).ready(()=>{
    getAdminDetailsApi();
    clicks();
})