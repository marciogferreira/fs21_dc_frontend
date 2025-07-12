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
    info: (msg) => {
        swal({
            title: "Atenção!",
            text: msg,
            icon: "info",
        });
    },
}

export default Message;