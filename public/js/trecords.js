
const checkValidationAddReasearch = (data)=>{
    if(data.research_title ==''){
        return false;
    }
    else if(data.research_fundingAgency ==''){
        return false;
    }
    else if(data.research_amount==''){
        return false;
    }
    else {
        return true;
    }
}


const AddTeacherRecordsDetailsAPI = async(data)=>{
    const api = API_LIST["ADDTEACHERRECORDS"];
    const result = await ajax(REQUEST_TYPE["POST"],api,data);
    console.log(result);
    if(result && result.status == "success"){
        successfull('Record Added Successfully!!!')
        hidevalues();
    }
    else{
        somethingWentWrong();
        console.log(result.status);
    }
}


const getInputValuesAddTeacherDetail1= (recordType)=>{
    const dataObj = {}
    dataObj.record_type = recordType;
    dataObj.research_title = $("#rtitle8 ").val();
    dataObj.research_fundingAgency = $("#amt8").val();
    dataObj.research_amount = $("#rname8").val();
    if(checkValidationAddReasearch(dataObj)){
            AddTeacherRecordsDetailsAPI(dataObj);
            console.log("success");

    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const getInputValuesAddTeacherDetail2 = (recordType)=>{
    const dataObj = {}
    dataObj.record_type = recordType;
    dataObj.conference_place = $("#rplace2 ").val();
    dataObj.conference_date = $("#rdate2").val();
    dataObj.conference_details = $("#rdetails2").val();

    $("#rnature2").each(function()
  {
    dataObj. conference_nature=$(this).val();
  });
  $("#rtitle2").each(function()
  {
    dataObj.conference_title=$(this).val();
  });
   
    if(checkValidationAddReasearch(dataObj)){
            AddTeacherRecordsDetailsAPI(dataObj);
            console.log("success");

    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const getInputValuesAddTeacherDetail3 = (recordType)=>{
    const dataObj = {}
    dataObj.record_type = recordType;

    $("#rnature3").each(function()
  {
    dataObj.symposia_nature=$(this).val();
  });
  $("#rtitle3").each(function()
  {
    dataObj.symposia_title=$(this).val();
  });
    dataObj.symposia_place = $("#rplace3 ").val();
    dataObj.symposia_date = $("#rdate3").val();
    dataObj.symposia_details = $("#rdetails3").val();
    if(checkValidationAddReasearch(dataObj)){
            AddTeacherRecordsDetailsAPI(dataObj);
            console.log("success");

    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const getInputValuesAddTeacherDetail4 = (recordType)=>{
    const dataObj = {}
    dataObj.record_type = recordType;

    $("#rnature5").each(function()
  {
    dataObj.seminar_nature=$(this).val();
  });
  $("#rtitle5").each(function()
  {
    dataObj.seminar_title=$(this).val();
  });
    dataObj.seminar_place = $("#rplace5 ").val();
    dataObj.seminar_date = $("#rdate5").val();
    dataObj.seminar_details = $("#rdetails5").val();
    if(checkValidationAddReasearch(dataObj)){
            AddTeacherRecordsDetailsAPI(dataObj);
            console.log("success");

    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const getInputValuesAddTeacherDetail5 = (recordType)=>{
    const dataObj = {}
    dataObj.record_type = recordType;

    $("#rnature6").each(function()
  {
    dataObj.workshop_nature=$(this).val();
  });
  $("#rtitle6").each(function()
  {
    dataObj.workshop_title=$(this).val();
  });
    dataObj.workshop_place = $("#rplace6 ").val();
    dataObj.workshop_date = $("#rdate6").val();
    dataObj.workshop_details = $("#rdetails6").val();
    if(checkValidationAddReasearch(dataObj)){
            AddTeacherRecordsDetailsAPI(dataObj);
            console.log("success");

    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const getInputValuesAddTeacherDetail6 = (recordType)=>{
    const dataObj = {}
    dataObj.record_type = recordType;

    $("#jnature1").each(function()
  {
    dataObj.publication_nature=$(this).val();
  });
 
    dataObj.publication_title = $("#jtitle7 ").val();
    dataObj.publication_name = $("#jname7").val();
    dataObj.publication_date= $("#jdate7").val();
    if(checkValidationAddReasearch(dataObj)){
            AddTeacherRecordsDetailsAPI(dataObj);
            console.log("success");

    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const getInputValuesAddTeacherDetail7 = (recordType)=>{
    const dataObj = {}
    dataObj.record_type = recordType;

    $("#btype4").each(function()
  {
    dataObj.book_type=$(this).val();
  });
 
    dataObj.book_title = $("#bname4").val();
    dataObj.book_auther = $("#bauthor4").val();
    dataObj.book_publisher= $("#bpub4").val();
    dataObj.book_releaseDate= $("#bdate4").val();

    if(checkValidationAddReasearch(dataObj)){
            AddTeacherRecordsDetailsAPI(dataObj);
            console.log("success");

    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const getInputValuesAddTeacherDetail8 = (recordType)=>{
    const dataObj = {}
    dataObj.record_type = recordType;

    $("#atitle1").each(function()
  {
    dataObj. award_title=$(this).val();
  });
 
    dataObj.award_date = $("#adate1 ").val();
    dataObj.award_details= $("#adetails1").val();
   
    if(checkValidationAddReasearch(dataObj)){
            AddTeacherRecordsDetailsAPI(dataObj);
            console.log("success");
    }
    else{
        error();
        console.log("details are not filled properly,try again...");
    };
}

const loadclicks = () => {
    $('.sideBarClass').unbind();
    $('.sideBarClass').click(function () {
        $('#adResearchDivParentId').hide();
        $('#confrenceAddDivId').hide();
        $('#symposiaAddDivId').hide();
        $('#seminarAddDivId').hide();
        $('#workshopAddDivId').hide();
        $('#publicationsAddDivId').hide();
        $('#awardAddDivId').hide();
        $('#teacherbookAddDivId').hide();
        let id = $(this).attr('data-value');
        $(`#${id}`).show();
        console.log(id);
        switch (id) {
            case 'publicationsAddDivId':
                $('body').css({ "background-color": "blueviolet" });
                break;
            case 'confrenceAddDivId':
                $('body').css({ "background-color": "rgb(240, 54, 85)" });
                break;
            case 'adResearchDivParentId':
                $('body').css({ "background-color": "rgb(60, 179, 163)" });
                break;
            case 'symposiaAddDivId':
                $('body').css({ "background-color": "rgb(87, 30, 139)" });
                break;
            case 'seminarAddDivId':
                $('body').css({ "background-color": "rgb(24, 155, 199)" });
                break;
            case 'workshopAddDivId':
                $('body').css({ "background-color": "rgb(223, 147, 6)" });
                break;
            case 'awardAddDivId':
                $('body').css({ "background-color": "rgb(60, 179, 163)" });
                break;
            case 'teacherbookAddDivId':
                $('body').css({ "background-color": "blueviolet" });
                break;
            default:
                $('body').css({ "background-color": "#f2f2f2" });
                break;
        }

    });

    $('#researchAddSubmitButtonId').unbind();
    $('#researchAddSubmitButtonId').click(()=>{
        getInputValuesAddTeacherDetail1("research");
    })
    $('#conferenceAddSubmitButtonId').unbind();
    $('#conferenceAddSubmitButtonId').click(()=>{
        getInputValuesAddTeacherDetail2("conference");
    })
    $('#symposiaAddSubmitButtonId').unbind();
    $('#symposiaAddSubmitButtonId').click(()=>{
        getInputValuesAddTeacherDetail3("symposia");
    })
    $('#seminarAddSubmitButtonId').unbind();
    $('#seminarAddSubmitButtonId').click(()=>{
        getInputValuesAddTeacherDetail4("seminar");
    })
    $('#workshopAddSubmitButtonId').unbind();
    $('#workshopAddSubmitButtonId').click(()=>{
        getInputValuesAddTeacherDetail5("workshop");
    })
    $('#publicationsAddSubmitButtonId').unbind();
    $('#publicationsAddSubmitButtonId').click(()=>{
        getInputValuesAddTeacherDetail6("publication");
    })
    $('#bookAddSubmitButtonId').unbind();
    $('#bookAddSubmitButtonId').click(()=>{
        getInputValuesAddTeacherDetail7("book");
    })
    $('#awardAddSubmitButtonId').unbind();
    $('#awardAddSubmitButtonId').click(()=>{
        getInputValuesAddTeacherDetail8("academic_award");
    })



}


const hidevalues = ()=>{
    $("#rtitle8 ").val(" ");
     $("#amt8").val(" ");
     $("#rname8").val(" ");
     $("#rnature2").each(function()
        {
               $(this).val(" ");
        });
     $("#rtitle2").each(function()
        {
             $(this).val(" ");
        });
             $("#rplace2 ").val(" ");
             $("#rdate2").val(" ");
             $("#rdetails2").val(" ");
     $("#rnature5").each(function()
        {
               $(this).val(" ");
        });
     $("#rtitle5").each(function()
        {
             $(this).val(" ");
        });
             $("#rplace5 ").val(" ");
             $("#rdate5").val(" ");
             $("#rdetails5").val(" ");
             $("#rnature6").each(function()
             {
                    $(this).val(" ");
             });
          $("#rtitle6").each(function()
             {
                  $(this).val(" ");
             });
                  $("#rplace6 ").val(" ");
                  $("#rdate6").val(" ");
                  $("#rdetails6").val(" ");
     $("#rnature3").each(function()
             {
                    $(this).val(" ");
             });
     $("#rtitle3").each(function()
             {
                  $(this).val(" ");
             });
                  $("#rplace3 ").val(" ");
                  $("#rdate3").val(" ");
                  $("#rdetails3").val(" ");     
                  
                  $("#jnature1").each(function()
                  {
                   $(this).val(" ");
                  });
                 
                   $("#jtitle7 ").val(" ");
               $("#jname7").val(" ");
                 $("#jdate7").val(" ");

                 $("#btype4").each(function()
                 {
              $(this).val(" ");
                 });
                
                 $("#bname4 ").val(" ");
               $("#bauthor4").val(" ");
                   $("#bpub4").val(" ");
                   $("#bdate4").val(" ");

                   $("#atitle1").each(function()
                   {
                $(this).val(" ");
                   });
                  
                   $("#adate1 ").val(" ");
                  $("#adetails1").val(" ");
                   
             
}

$(document).ready(() => {
    loadclicks();
})