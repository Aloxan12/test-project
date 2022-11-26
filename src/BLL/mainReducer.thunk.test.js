import {setEmployeesT, setWorklogTC} from "./mainReducer";

test('setEmployeesT',async ()=>{
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
