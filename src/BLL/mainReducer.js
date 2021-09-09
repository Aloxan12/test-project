import {getEmployees, getWorklog} from "../DAL/api";

const initialState = {
    loading: false,
    employees: [],
    worklog: []
}

export const setEmployees =(employees)=>({type: 'SET-EMPLOYEES', employees})
export const setWorklog =(worklog)=>({type: 'SET-WORKLOG', worklog})
export const isLoading =  (isLoading) => ({type: "IS-LOADING", isLoading})

const actions = setEmployees | setWorklog | isLoading

export const mainReducer =(state = initialState, action = actions)=>{
    switch (action.type){
        case 'IS-LOADING':{
            return {...state, loading: action.isLoading}
        }
        case 'SET-EMPLOYEES':{
            return {...state, employees: action.employees}
        }
        case 'SET-WORKLOG':{
            return {...state, worklog: action.worklog }
        }
        default:
            return state
    }
}

export const setEmployeesT = () => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        let data = await getEmployees().then(res => res)
        dispatch(setEmployees(data))
        dispatch(isLoading(false))
    }
}
export const setWorklogTC = () => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        let data = await getWorklog().then(res => res)
        dispatch(setWorklog(data))
        dispatch(isLoading(false))
    }
}
