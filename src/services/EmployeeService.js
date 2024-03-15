import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees/All';
const REST_API_SAVE_URL = 'http://localhost:8080/api/employees/saveReact'

export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL);
}

export const createEmployee = (employee) => axios.post(REST_API_SAVE_URL, employee)