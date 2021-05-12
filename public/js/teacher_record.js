
let recordarray = [];

const showTeacherRecords = () => {
  let html = ``
  recordarray.forEach(record => {
    if (record.record_type == "research") {
      html = `${html} <div class="col-sm-4">
            <div class="card text-dark bg-light">
            <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
              <div class="card-body ">
    
                <!--Starting list group here -->
                    <div class="list-group"></a>
                      <span >${record.research_title}</span>
                      <span >${record.research_fundingAgency}</span>
                     <span >${record.research_amount}</span>
                 </div>
                  <!--Ends here -->  
              </div>
              <div class="card-footer bg-secondary border-danger text-right">
              <a href="#" data-value="${record._id}" class="btn btn-info btn-sm deleteButtonClassSame">Delete</a> <a href="#" class="btn btn-success btn-sm">Edit</a>
              </div>
            </div>
          </div>`
    }
    else if (record.record_type == "conference") {
      html = `${html} <div class="col-sm-4">
            <div class="card text-dark bg-light">
            <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
              <div class="card-body ">
    
                <!--Starting list group here -->
                    <div class="list-group"></a>
                      <span >${record.conference_place}</span>
                      <span >${record.conference_date.slice(0, 10)}</span>
                     <span >${record.conference_details}</span>
                 </div>
                  <!--Ends here -->  
              </div>
              <div class="card-footer bg-secondary border-danger text-right">
              <a href="#" data-value="${record._id}" class="btn btn-info btn-sm deleteButtonClassSame">Delete</a> <a href="#" class="btn btn-success btn-sm">Edit</a>
              </div>
            </div>
          </div>`
    }
    else if (record.record_type == "symposia") {
      html = `${html} <div class="col-sm-4">
              <div class="card text-dark bg-light">
              <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
                <div class="card-body ">
      
                  <!--Starting list group here -->
                      <div class="list-group"></a>
                        <span >${record.symposia_nature}</span>
                        <span >${record.symposia_title}</span>
                       <span >${record.symposia_place}</span>
                       <span >${record.symposia_date.slice(0, 10)}</span>
                       <span >${record.symposia_details}</span>
                </div>
                    <!--Ends here -->  
                </div>
                <div class="card-footer bg-secondary border-danger text-right">
                <a href="#" data-value="${record._id}" class="btn btn-info btn-sm deleteButtonClassSame">Delete</a> <a href="#" class="btn btn-success btn-sm">Edit</a>
                </div>
              </div>
            </div>`
    }
    else if (record.record_type == "seminar") {
      html = `${html} <div class="col-sm-4">
              <div class="card text-dark bg-light">
              <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
                <div class="card-body ">
      
                  <!--Starting list group here -->
                      <div class="list-group"></a>
                        <span >${record.seminar_nature}</span>
                        <span >${record.seminar_title}</span>
                       <span >${record.seminar_place}</span>
                       <span >${record.seminar_date.slice(0, 10)}</span>
                       <span >${record.seminar_details}</span>
                </div>
                    <!--Ends here -->  
                </div>
                <div class="card-footer bg-secondary border-danger text-right">
                <a href="#" data-value="${record._id}" class="btn btn-info btn-sm deleteButtonClassSame">Delete</a> <a href="#" class="btn btn-success btn-sm">Edit</a>
                </div>
              </div>
            </div>`
    }
    else if (record.record_type == "publication") {
      html = `${html} <div class="col-sm-4">
              <div class="card text-dark bg-light">
              <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
                <div class="card-body ">
      
                  <!--Starting list group here -->
                      <div class="list-group"></a>
                        <span >${record.publication_nature}</span>
                        <span >${record.publication_title}</span>
                       <span >${record.publication_name}</span>
                       <span >${record.publication_date.slice(0, 10)}</span>
                </div>
                    <!--Ends here -->  
                </div>
                <div class="card-footer bg-secondary border-danger text-right">
                <a href="#" data-value="${record._id}" class="btn btn-info btn-sm deleteButtonClassSame">Delete</a> <a href="#" class="btn btn-success btn-sm">Edit</a>
                </div>
              </div>
            </div>`
    }
    else if (record.record_type == "book") {
      html = `${html} <div class="col-sm-4">
              <div class="card text-dark bg-light">
              <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
                <div class="card-body ">
      
                  <!--Starting list group here -->
                      <div class="list-group"></a>
                        <span >${record.book_type}</span>
                        <span >${record.book_title}</span>
                       <span >${record.book_auther}</span>
                       <span >${record.book_publisher}</span>
                       <span >${record.book_releaseDate.slice(0, 10)}</span>
  
                </div>
                    <!--Ends here -->  
                </div>
                <div class="card-footer bg-secondary border-danger text-right">
                <a href="#" data-value="${record._id}" class="btn btn-info btn-sm deleteButtonClassSame">Delete</a> <a href="#" class="btn btn-success btn-sm">Edit</a>
                </div>
              </div>
            </div>`
    }
    else if (record.record_type == "workshop") {
      html = `${html} <div class="col-sm-4">
              <div class="card text-dark bg-light">
              <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
                <div class="card-body ">
      
                  <!--Starting list group here -->
                      <div class="list-group"></a>
                        <span >${record.workshop_nature}</span>
                        <span >${record.workshop_title}</span>
                       <span >${record.workshop_place}</span>
                       <span >${record.workshop_date.slice(0, 10)}</span>
                       <span >${record.workshop_details}</span>
  
                </div>
                    <!--Ends here -->  
                </div>
                <div class="card-footer bg-secondary border-danger text-right">
                <a href="#" data-value="${record._id}" class="btn btn-info btn-sm deleteButtonClassSame">Delete</a> <a href="#" class="btn btn-success btn-sm">Edit</a>
                </div>
              </div>
            </div>`
    }
    else if (record.record_type == "academic_award") {
      html = `${html} <div class="col-sm-4">
              <div class="card text-dark bg-light">
              <div class="card-header bg-dark text-center text-light"><h4>${record.record_type}</h4></div>
                <div class="card-body ">
                  <!--Starting list group here -->
                      <div class="list-group"></a>
                        <span >${record.publication_nature}</span>
                        <span >${record.publication_title}</span>
                       <span >${record.publication_name}</span>
                       <span >${record.publication_date.slice(0, 10)}</span>
                </div>
                    <!--Ends here -->  
                </div>
                <div class="card-footer bg-secondary border-danger text-right">
                <a href="#" data-value="${record._id}" class="btn btn-info btn-sm deleteButtonClassSame">Delete</a> <a href="#" class="btn btn-success btn-sm">Edit</a>
                </div>
              </div>
            </div>`
    }
  });

  $("#recordDivParent").html(html);
  loadTRecordsClicks();
}

const getteacherrecordListApi = async () => {
  const api = API_LIST["GETTEACHERRECORD"];
  const result = await ajax(REQUEST_TYPE["GET"], api, {});
  console.log(result);

  if (result && result.status == "success") {
    console.log("successful");
    recordarray = result.data[0].teacher_records;
    console.log(recordarray);
    showTeacherRecords();
  }
  else {
    console.log(result.status);
  }

}

const deleteTeacherRecordAPI = async (data) => {
  const api = API_LIST["POSTTEACHERRECORDDELETE"];
  const result = await ajax(REQUEST_TYPE["POST"], api, data);
  console.log(result);

  if (result && result.status == "success") {
    console.log("successful");
    recordarray = result.teacher.teacher_records;
    // console.log(result);

    showTeacherRecords();
  }
  else {
    console.log(result.status);
  }
}

const loadTRecordsClicks = () => {
  $('.deleteButtonClassSame').unbind();
  $('.deleteButtonClassSame').click(function() {
    console.log("hhhh");
    let id = $(this).attr('data-value');
    console.log(id);
    let data = {
      _id:id,
    };
    deleteTeacherRecordAPI(data);
  });
}

$(document).ready(() => {
  console.log('hellloooo');
  getteacherrecordListApi();
  loadTRecordsClicks();
})