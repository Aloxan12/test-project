import {Worklog} from "./UI/Worklog";
import {Employees} from "./UI/Employees";
import {Redirect, Route, Switch} from "react-router-dom";
import AppFC from "./UI/AppFC";


export const routes = [
    {
        id: 'Main',
        path: '/',
        exact: true,
        component: AppFC
    },
    {
        id: 'Employees',
        path: '/employees',
        exact: true,
        component: Employees
    },
    {
        id: 'Employees',
        path: 'test-project',
        component: <Redirect to={'/employees'}  />
    },
    {
        id: 'Worklog',
        path: '/employees/worklog/:id',
        exact: true,
        component: Worklog
    }
];

export const getRouteConfig = (id) => {
    const route = routes.find(route => route.id === id);

    if(route) {
        const { component, ...rest } = route;

        return rest;
    }
}

export const Routes = () => {
    return (
        <Switch>
            { routes.map(route => {
                const { id, ...props } = route;
                return (
                    <Route key={id} {...props} />
                )
            })}
        </Switch>
    )
}
