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
    CHECKAUTH:`${API_SERVER}sec/checkauthFromFront/`,
    ADMINHOEPAGE: `${API_SERVER}adminhome/`,
    POSTDEPARTMENTADD:`${API_SERVER}department/departmentAdd/`,
    POSTDEPARTMENTREMOVE:`${API_SERVER}department/removeDepartment/`,
    GETALLDEPARTMENTS:`${API_SERVER}department/viewDepartment/`

}