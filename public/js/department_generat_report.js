
const checkValidation = (data) => {
    if (data.department_name == '') {
        return false;
    }
    else if (data.department_id == '') {
        return false;
    }
    else if (data.department_password == '') {
        return false;
    }
    else if (data.department_confirmPassword == '') {
        return false;
    }
    else if (data.department_password != data.department_confirmPassword) {
        return false;
    }
    else {
        return true;
    }
}
const adGenerateRecordApi = async () => {
    const api = API_LIST["GETALLTEACHERS"];
    const result = await ajax(REQUEST_TYPE["GET"], api, {});
    console.log(result);
    if (result && result.status == "success") {
        console.log('Teacher Data fetched Successfuly!!!');
        getUserInputValues(result);
    }
    else {
        somethingWentWrong();
        console.log(result.status);
    }
}



const showTeacherRecordsGenerateReport = (teacherRecords,recordType,year) => {
    let html = ``
    teacherRecords.forEach(record => {
      if (record.record_type == "research" && recordType=="research") {
        html = `${html} <div class="col-sm-4">
              <div class="card text-dark bg-light">
              <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
                <div class="card-body ">
      
                  <!--Starting list group here -->
                      <div class="list-group"></a>
                      <span >${record.teacher_name}</span>
                        <span >${record.research_title}</span>
                        <span >${record.research_fundingAgency}</span>
                       <span >${record.research_amount}</span>
                   </div>
                    <!--Ends here -->  
                </div>
                
              </div>
            </div>`
      }
      else if (record.record_type == "conference"  && recordType=="conference"  && record.conference_date.slice(0,4)==year) {
        html = `${html} <div class="col-sm-4">
              <div class="card text-dark bg-light">
              <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
                <div class="card-body ">
      
                  <!--Starting list group here -->
                      <div class="list-group"></a>
                      <span >${record.teacher_name}</span>

                        <span >${record.conference_place}</span>
                        <span >${record.conference_date.slice(0, 10)}</span>
                       <span >${record.conference_details}</span>
                   </div>
                    <!--Ends here -->  
                </div>
                
              </div>
            </div>`
      }
      else if (record.record_type == "symposia"  && recordType=="symposia" && record.symposia_date.slice(0,4)==year) {
        html = `${html} <div class="col-sm-4">
                <div class="card text-dark bg-light">
                <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
                  <div class="card-body ">
        
                    <!--Starting list group here -->
                        <div class="list-group"></a>
                        <span >${record.teacher_name}</span>

                          <span >${record.symposia_nature}</span>
                          <span >${record.symposia_title}</span>
                         <span >${record.symposia_place}</span>
                         <span >${record.symposia_date.slice(0, 10)}</span>
                         <span >${record.symposia_details}</span>
                  </div>
                      <!--Ends here -->  
                  </div>
                </div>
              </div>`
      }
      else if (record.record_type == "seminar"  && recordType=="seminar" && record.seminar_date.slice(0,4)==year) {
        html = `${html} <div class="col-sm-4">
                <div class="card text-dark bg-light">
                <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
                  <div class="card-body ">
        
                    <!--Starting list group here -->
                        <div class="list-group"></a>
                        <span >${record.teacher_name}</span>

                          <span >${record.seminar_nature}</span>
                          <span >${record.seminar_title}</span>
                         <span >${record.seminar_place}</span>
                         <span >${record.seminar_date.slice(0, 10)}</span>
                         <span >${record.seminar_details}</span>
                  </div>
                      <!--Ends here -->  
                  </div>
                </div>
              </div>`
      }
      else if (record.record_type == "publication"  && recordType=="publication" && record.publication_date.slice(0,4)==year) {
        html = `${html} <div class="col-sm-4">
                <div class="card text-dark bg-light">
                <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
                  <div class="card-body ">
        
                    <!--Starting list group here -->
                        <div class="list-group"></a>
                        <span >${record.teacher_name}</span>

                          <span >${record.publication_nature}</span>
                          <span >${record.publication_title}</span>
                         <span >${record.publication_name}</span>
                         <span >${record.publication_date.slice(0, 10)}</span>
                  </div>
                      <!--Ends here -->  
                  </div>
        
                </div>
              </div>`
      }
      else if (record.record_type == "book"  && recordType=="book" && record.book_releaseDate.slice(0,4)==year) {
        html = `${html} <div class="col-sm-4">
                <div class="card text-dark bg-light">
                <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
                  <div class="card-body ">
        
                    <!--Starting list group here -->
                        <div class="list-group"></a>
                        <span >${record.teacher_name}</span>

                          <span >${record.book_type}</span>
                          <span >${record.book_title}</span>
                         <span >${record.book_auther}</span>
                         <span >${record.book_publisher}</span>
                         <span >${record.book_releaseDate.slice(0, 10)}</span>
    
                  </div>
                      <!--Ends here -->  
                  </div>
                </div>
              </div>`
      }
      else if (record.record_type == "workshop"  && recordType=="workshop" && record.workshop_date.slice(0,4)==year) {
        html = `${html} <div class="col-sm-4">
                <div class="card text-dark bg-light">
                <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
                  <div class="card-body ">
        
                    <!--Starting list group here -->
                        <div class="list-group"></a>
                        <span >${record.teacher_name}</span>

                          <span >${record.workshop_nature}</span>
                          <span >${record.workshop_title}</span>
                         <span >${record.workshop_place}</span>
                         <span >${record.workshop_date.slice(0, 10)}</span>
                         <span >${record.workshop_details}</span>
    
                  </div>
                      <!--Ends here -->  
                  </div>
            
                </div>
              </div>`
      }
      else if (record.record_type == "academic_award"  && recordType=="academic_award" && record.award_date.slice(0,4)==year) {
        html = `${html} <div class="col-sm-4">
                <div class="card text-dark bg-light">
                <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
                  <div class="card-body ">
                    <!--Starting list group here -->
                        <div class="list-group"></a>
                        <span >${record.teacher_name}</span>

                          <span >${record.publication_nature}</span>
                          <span >${record.publication_title}</span>
                         <span >${record.publication_name}</span>
                         <span >${record.publication_date.slice(0, 10)}</span>
                  </div>
                      <!--Ends here -->  
                  </div>
                </div>
              </div>`
      }
    });
  
    $("#recordDivParent").html(html);
    // loadTRecordsClicks();
  }






const getUserInputValues = (result) => {

    let recordType = window.localStorage.getItem("RECORD_TYPE");
    let recordYear = window.localStorage.getItem('RECORD_YEAR');
    console.log(result,recordType);
    // let teacherData = result.data.filter((d)=>{
    //     return d.department_name == department_name;
    // })
    let teacherRecords = [];
    result.data.forEach((d)=>{
        d.teacher_records.forEach((rec)=>{
            rec.teacher_name = d.teacher_name;
            teacherRecords.push(rec);
        })
    })
    console.log(teacherRecords,'hgksjhsk');
    showTeacherRecordsGenerateReport(teacherRecords,recordType,recordYear);
}



$(document).ready(() => {
    adGenerateRecordApi();
})