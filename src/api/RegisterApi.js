import Axios from 'axios';

const BaseUrl = "http://localhost:56504/api/user-registration";

class RegisterApi {
    static Register(data, success, error) {
        Axios.post(BaseUrl, data)
        .then(success)
        .catch(error)
    }
}

export default RegisterApi;