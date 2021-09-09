import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <div>
                <NavLink to={'/api/employees'}>Employees</NavLink>
            </div>
            <div>
                <NavLink to={'/api/employees/worklog'}>Worklog</NavLink>
            </div>
        </div>
    )
}
