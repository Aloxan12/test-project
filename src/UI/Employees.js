import React, {useEffect} from "react";
import {setEmployeesT} from "../BLL/mainReducer";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Container, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Loading} from "./Loading";

const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
});
export const Employees = () => {
    const employees = useSelector(state => state.main.employees)
    const isLoading = useSelector(state => state.main.loading)
    const dispatch = useDispatch()
    const classes = useStyles();

    employees.sort((a, b) => a.lastName < b.lastName ? -1 : 1)

    useEffect(() => {
        dispatch(setEmployeesT())
    }, [dispatch])

    if (isLoading) {
        return <Loading />
    }

    return (
        <Grid item xs={12} sm={6} style={{margin: '50px auto',}}>
            <Container>
                <h2 style={{textAlign: 'center'}}>Список сотрудников</h2>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Id</b></TableCell>
                                <TableCell align="center"><b>ФИО</b></TableCell>
                                <TableCell align="center"><b>Дата рождения</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employees?.map(e => (
                                <TableRow key={e.id}>
                                    <TableCell scope='row'>{e.id}</TableCell>
                                    <TableCell align="center">
                                        <Link to={`/employees/worklog/${e.id}`}
                                              style={{textDecoration: 'none', color: '#3366FF'}}
                                        >{e.lastName} {e.firstName} {e.middleName}</Link>
                                    </TableCell>
                                    <TableCell align="center">
                                        <time
                                            dateTime={'dd.mm.yyyy'}>{e.birthDate.toString().split("-").reverse().join("-")}</time>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Grid>
    )
}
