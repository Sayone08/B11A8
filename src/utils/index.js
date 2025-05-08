import toast from "react-hot-toast";

export const getAppointment = () => {
    const appointments = localStorage.getItem('Appointments');
    if (appointments) 
        return JSON.parse(appointments);
    return [];
};

export const bookAppointment = lawyer => {
    const appointments = getAppointment();

    const alreadyBooked = appointments.find(app => app.id === lawyer.id);
    if (alreadyBooked) {
        toast.error('Appointment already scheduled for today!');
        return false;  
    }

    const updatedAppointments = [...appointments, lawyer];
    toast.success(`Appointment scheduled for Lawyer ID ${lawyer.name} successfully`);
    localStorage.setItem('Appointments', JSON.stringify(updatedAppointments));
    return true;
};


export const removeAppointment = (id) => {
    const appointments = getAppointment();
    const remaining = appointments.filter(lawyer => lawyer.id !== id);
    toast.error('Appointment Canceled');
    localStorage.setItem('Appointments', JSON.stringify(remaining));
};