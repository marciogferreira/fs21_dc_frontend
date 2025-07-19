import swal from 'sweetalert';

const Message = {
    success: (msg) => {
        swal({
            title: "Sucesso",
            text: msg,
            icon: "success",
        });
    },
    error: (msg) => {
        swal({
            title: "Oops!",
            text: msg,
            icon: "error",
        });
    },
    errorCallBack: (msg, callBack) => {
        swal({
            title: "Oops!",
            text: msg,
            icon: "error",
        }).then(() => {
            callBack();
        });
    },
    info: (msg) => {
        swal({
            title: "Atenção!",
            text: msg,
            icon: "info",
        });
    },
    confirmation: (msg, callBack) => {
        swal({
            title: "Atenção",
            text: msg,
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                   callBack()
                }
            });
    }
}

export default Message;