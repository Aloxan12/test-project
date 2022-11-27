import { mockFetch } from "./mock-fetch";

export function getEmployees() {
    return mockFetch("/employees");
}

export function getWorklog() {
    return mockFetch("/employees/worklog");
}
