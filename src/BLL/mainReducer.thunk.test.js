import {setEmployeesT, setWorklogTC} from "./mainReducer";
// import {getEmployees, getWorklog} from "../DAL/api";
// jest.mock("../DAL/api")

// const getEmployeesMock = getEmployees
// const getWorklogMock = getWorklog

//getEmployeesMock.mockReturnValue()
test('setEmployeesTC',async ()=>{
    const thunk = setEmployeesT();

    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(3)
})
test('setWorklogTC',async ()=>{
    const thunk = setWorklogTC();

    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(3)
})
