const animationSuccess = () => {
    Swal.fire({
        title: 'Custom animation with Animate.css',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}
const countDownAlert = () => {
    let timerInterval
    Swal.fire({
        title: 'Auto close alert!',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}

const githubFinder = () => {
    Swal.fire({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .catch(error => {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                })
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
            })
        }
    })
}

function success() {
    swal(
        'saved',
        'Your details have been saved',
        'success'
    )


};

function topRightAlert() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 3000
    })
}

function error() {
    swal(
        'Error!',
        'Please enter valid Details !',
        'error'
    )
};

function deleteDiv() {
    swal(

        'Deleted',
        'Your details have been deleted',
        'success'
    )


};

function successfull(title, msg) {
    swal(

        title,
        msg,
        'success'
    )


};

function congratulations(title, msg,cb) {
    swal(

        title,
        msg,
        'success'
    ).then((a, b) => { cb() })


};

function errorsMsg(title, msg) {
    swal(

        title,
        msg,
        'error'
    )


};
function somethingWentWrong(){
    swal('Failure','Something Went Wrong','error');
}

function errorsMsgWithCallback(title, msg, cb) {
    swal({
        title: title,
        text: msg,
        type: "error",
        timer: 5000,
        showConfirmButton: false
    }).then((a, b) => { cb() })


};

function infoMsg(title, msg) {
    swal(

        title,
        msg,
        'info'
    )


};

function confirmAlert(callback, data) {

    swal({
        title: 'Are you sure?',
        text: "It will permanently deleted !",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(function(isConfirm) {
        if (isConfirm.value == true) {
            callback(data)

        } else {

            return false
        }

    })


}

function confirmBlockAlert(callback, data) {

    swal({
        title: 'Are you sure?',
        text: "User will be blocked !",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, block user'
    }).then(function(isConfirm) {
        if (isConfirm.value == true) {
            callback(data)

        } else {

            return false
        }

    })


}

function confirmationFromUserAlert(text, confirmButtonText, callback) {

    swal({
        title: 'Are you sure?',
        text: text,
        type: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButtonText
    }).then(function(isConfirm) {
        if (isConfirm.value == true) {
            callback()

        } else {

            return false
        }

    })


}

function confirmationAlert(text, confirmButtonText, callback, data) {

    swal({
        title: 'Are you sure?',
        text: text,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButtonText
    }).then(function(isConfirm) {
        if (isConfirm.value == true) {
            callback(data)

        } else {

            return false
        }

    })


}

function customToast(text) {
    $.toast({
        text: text,
        bgColor: 'green',
        textColor: 'white',
        icon: 'success',
        position: 'top-right',
        loader: false,
        stack: false
    })
}