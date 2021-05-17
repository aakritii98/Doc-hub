let teacherlistArray = [];

const showAllteachersList = (data)=>{
    let html =``;
    teacherlistArray = data;
    data.forEach(d => {
        html = `${html} <div  class="col-md-4 col-sm-6 col-12">
        <div class="container cardClass">
            <h2 id="secondary"> ${d.teacher_name}</h2>
            <h2 style="font-size: medium;" >${d.teacher_id}</h2>
            <img src="../image/depart.png" alt="Teacher" height="200">
        </div>
    </div>`
        
    });
    $("#teacherCardsParentID").html(html);

}

const showAllteachersListSearch = (data)=>{
    console.log("mai chala");
    let html =``;
    data.forEach((d,i) => {
        if(d!=-1){
            html = `${html} <div  class="col-md-4 col-sm-6 col-12">
            <div class="container cardClass">
                <h2 id="secondary"> ${teacherlistArray[i].teacher_name}</h2>
                <h2 style="font-size: medium;" >${teacherlistArray[i].teacher_id}</h2>
                <img src="../image/depart.png" alt="Teacher" height="200">
            </div>
        </div>`
        }
       
        
    });
    $("#teacherCardsParentID").html(html);

}
const getAllteachersListApi = async()=>{
    // let token = localStorage.getItem("TOKEN");

    const api = API_LIST["GETALLTEACHERSADMIN"];
    const result = await ajax(REQUEST_TYPE["GET"],api,{});
    console.log(result);
    if(result && result.status == "success"){
        showAllteachersList(result.data);
    }
    else{
        console.log(result.status);
    }
}
const getSearchVal =(inputval)=>{
    let arr = [];
    teacherlistArray.forEach((ll)=>{
        let name = ll.teacher_name.toLowerCase();
        let inp = inputval.toLowerCase();
        let res =name.search(inp);
        arr.push(res);
    })
    return arr;
}

const userGestures=()=>{
    console.log('hello');
    $("#searchButtonId").click(function(){
        let inputval = $("#searchboxId").val();
        console.log(inputval);
        let arr = getSearchVal(inputval);
        console.log(arr); 
        setTimeout(()=>{
            showAllteachersListSearch(arr);
        },100)
    })
    $("#searchboxId").focusout(()=>{
        showAllteachersList(teacherlistArray);
    })
}
$(document).ready(()=>{
    getAllteachersListApi();
    userGestures();
})