const getAdminDetailsApi = async()=>{
    const api = API_LIST["GETADMINDETAILS"];
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
    const api = API_LIST["POSTADMINDETAILS"];
    const result = await ajax(REQUEST_TYPE["POST"],api,data);
    console.log(result);
    getAdminDetailsApi();
    
}

const showAdminDetails = (data)=>{
    
    $('#adminName').val(data.name)
    $('#sideNameProfile').html(data.name)

    $('#adminPnumber').val(data.phonenumber)
    $('#adminAdress').val(data.address)
    $('#adminEmail').val(data.email)
    $('#sideEmailProfile').html(data.email)
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