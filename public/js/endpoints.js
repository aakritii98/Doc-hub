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
    

    ADMINHOEPAGE: `${API_SERVER}adminhome/`,
    POSTDEPARTMENTADD:`${API_SERVER}adminActions/departmentAdd/`,
    POSTDEPARTMENTREMOVE:`${API_SERVER}adminActions/removeDepartment/`,
    GETALLDEPARTMENTS:`${API_SERVER}adminActions/viewDepartment/`,

    ADDTEACHERPOST:`${API_SERVER}departmentActions/teacheradd/`,


    DEPARTMENTSIGNIN:`${API_SERVER}departmentLogin/departmentsignin/`,

}