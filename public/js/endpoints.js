const API_SERVER = "http://localhost:3000/"

const REQUEST_TYPE = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    PATCH: "PATCH",
    OPTION: "OPTION"
}

const API_LIST = {

    SIGNUP : `${API_SERVER}auth/signup/`,
    SIGNIN : `${API_SERVER}auth/signin/`,

    CHECKDEPARTMENT:`${API_SERVER}sec/checkDepartmentFront/`,
    CHECKADMIN:`${API_SERVER}sec/checkAdminFront/`,
    CHECKTEACHER:`${API_SERVER}sec/checkTeacherFront/`,
    



    ADMINHOEPAGE: `${API_SERVER}adminhome/`,
    POSTDEPARTMENTADD:`${API_SERVER}adminActions/departmentAdd/`,
    POSTDEPARTMENTREMOVE:`${API_SERVER}adminActions/removeDepartment/`,
    GETALLDEPARTMENTS:`${API_SERVER}adminActions/viewDepartment/`,

    ADDTEACHERPOST:`${API_SERVER}departmentActions/teacheradd/`,
    REMOVETEACHERPOST:`${API_SERVER}departmentActions/teacherremove/`,
    GETALLTEACHERS:`${API_SERVER}departmentActions/teacher_view/`,

    DEPARTMENTSIGNIN:`${API_SERVER}auth/departmentsignin/`,
    TEACHERSIGNIN:`${API_SERVER}auth/teachersignin/`,

    GETTEACHERRECORD:`${API_SERVER}teacherActions/techerRecordGet/`,
    POSTTEACHERRECORDDELETE:`${API_SERVER}teacherActions/teacherRecordDelete/`,

    ADDTEACHERRECORDS:`${API_SERVER}teacherActions/teacherrecordadd/`,

    GETTEACHERRECORDGENERATE:`${API_SERVER}adminActions/techerRecordGenerate/`, 
    
    GETADMINDETAILS:`${API_SERVER}admin/getsdmindetails/`,
    POSTADMINDETAILS:`${API_SERVER}admin/postAdminDetails/`,

    GETDEPARTMENTPROFILEDETAILS:`${API_SERVER}departmentActions/getdepartdetails/`,
    POSTDEPARTMENTPROFILEDETAILS:`${API_SERVER}departmentActions/postdepartDetails/`,


    GETTEACHERPROFILEDETAILS:`${API_SERVER}teacherActions/getteacherdetails/`,
    POSTTEACHERPROFILEDETAILS:`${API_SERVER}teacherActions/postteacherDetails/`,


    GETALLTEACHERSADMIN:`${API_SERVER}adminActions/teacher_view_admin/`,

}