import { toast } from 'react-toastify';

export const bulkUploadToastSuccess = () => {
    toast.success('Offers succesfully uploaded!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const bulkUploadToastFailure = () => {
    toast.error('Could not upload the offers', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}