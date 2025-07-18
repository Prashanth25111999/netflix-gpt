export const validateData = (email, password, name) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    const isNameValid = name ? /^[a-zA-Z]+$/.test(name) : true;

    if (!isEmailValid) return "Please Enter Valid Email ID";
    if (!isPasswordValid) return "Please Enter Valid Password";
    if (!isNameValid) return "Please Enter Valid Name";

    return null;

}