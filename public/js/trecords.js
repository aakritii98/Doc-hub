
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
    }
    else{
        somethingWentWrong();
        console.log(result.status);
    }
}

const getInputValuesAddTeacherDetails = (recordType)=>{
    const dataObj = {}
    dataObj.record_type = recordType;
    dataObj.research_title = $("#rtitle8 ").val();
    dataObj.research_fundingAgency = $("#amt8").val();
    dataObj.research_amount = $("#rname8").val();
    if(checkValidationAddReasearch(dataObj)){
            AddTeacherRecordsDetailsAPI(dataObj);
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
        getInputValuesAddTeacherDetails("research");
    })

}

$(document).ready(() => {
    loadclicks();
})