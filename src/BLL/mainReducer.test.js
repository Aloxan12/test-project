import {isLoading, mainReducer, setEmployees, setWorklog} from "./mainReducer";

let state= {
    loading: false,
    employees: [],
    worklog: []
}

test('set employees', () => {
    let action = setEmployees([{
        id: 4,
        firstName: "Алоис",
        lastName: "Альцгеймер",
        middleName: "Эдуардович",
        birthDate: "1864-06-14",
        phone: "+15559665599"
    },
        {
            id: 5,
            firstName: "Авиценна",
            lastName: "Сина",
            middleName: "Абу Али Ибн",
            birthDate: "980-08-23",
            phone: "+15559171855"
        },])

    let newState = mainReducer(state, action)
    expect(newState.employees.length).toBe(2)
})


test('set worklog', () => {
    let action = setWorklog([{
        id: 2,
        employee_id: 1,
        from: "2021-03-04 06:55:01",
        to: "2021-03-04 08:13:10"
    },
        {
            id: 3,
            employee_id: 1,
            from: "2021-03-04 09:11:45",
            to: "2021-03-04 10:55:34"
        },])

    let newState = mainReducer(state, action)
    expect(newState.worklog.length).toBe(2)
})
test('is loading', () => {
    let action = isLoading(true)

    let newState = mainReducer(state, action)
    expect(newState.loading).toBe(true)
})
