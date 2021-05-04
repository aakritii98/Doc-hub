const loadclicks = ()=>{
    $('.sideBarClass').unbind();
    $('.sideBarClass').click(function(){
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

    });
}

$(document).ready(()=>{
    loadclicks();
})