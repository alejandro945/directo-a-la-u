import Swal from 'sweetalert2';

export default function AConfirmation(state,setState){
    const Modal = {
        title: 'Deseas confirmar tu asistencia?',
        text: "Creemos en tu palabra 😅!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmo!'
    }
    Swal.fire(Modal).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            setState(!state)
        }
    })
}
