let departmentlistArray = [];

const showAllDepartmentsList = (data)=>{
    let html =``;
    departmentlistArray = data;
    data.forEach(d => {
        html = `${html} <div  class="col-md-4 col-sm-6 col-12">
        <div class="container cardClass">
            <h2 id="secondary"> ${d.department_name}</h2>
            <h2 style="font-size: medium;" >${d.department_id}</h2>
            <img src="../image/depart.png" alt="Teacher" height="200">
        </div>
    </div>`
        
    });
    $("#departmentCardsParentID").html(html);

}

const showAllDepartmentsListSearch = (data)=>{
    console.log("mai chala");
    let html =``;
    data.forEach((d,i) => {
        if(d!=-1){
            html = `${html} <div  class="col-md-4 col-sm-6 col-12">
            <div class="container cardClass">
                <h2 id="secondary"> ${departmentlistArray[i].department_name}</h2>
                <h2 style="font-size: medium;" >${departmentlistArray[i].department_id}</h2>
                <img src="../image/depart.png" alt="Teacher" height="200">
            </div>
        </div>`
        }
       
        
    });
    $("#departmentCardsParentID").html(html);

}
const getAllDepartmentsListApi = async()=>{
    const api = API_LIST["GETALLDEPARTMENTS"];
    const result = await ajax(REQUEST_TYPE["GET"],api,{});
    console.log(result);
    if(result && result.status == "success"){
        showAllDepartmentsList(result.data);
    }
    else{
        console.log(result.status);
    }
}
const getSearchVal =(inputval)=>{
    let arr = [];
    departmentlistArray.forEach((ll)=>{
        let name = ll.department_name.toLowerCase();
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
            showAllDepartmentsListSearch(arr);
        },100)
    })
    $("#searchboxId").focusout(()=>{
        showAllDepartmentsList(departmentlistArray);
    })
}
$(document).ready(()=>{
    getAllDepartmentsListApi();
    userGestures();
})