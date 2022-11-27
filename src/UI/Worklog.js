import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setWorklogTC} from "../BLL/mainReducer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {NavLink, useParams} from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import {makeStyles} from "@material-ui/core/styles";
import {Container, Grid} from "@material-ui/core";
import {Loading} from "./Loading";
import {markObj} from "../utils/changeColor";

const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
});

export const Worklog = () => {
    const {id} = useParams()
    const worklog = useSelector(state => state.main.worklog)
    const isLoading = useSelector(state => state.main.loading)
    const dispatch = useDispatch()
    const classes = useStyles();

    const items = markObj(worklog);

    const refactoredWorklog = worklog.map(item => {
        return items.some(el => el === item.id) ? {...item, color: 'red'} : {...item, color: 'black' }
    });

    const filtered = refactoredWorklog.filter(w => w.employee_id === +id)

    useEffect(() => {
        dispatch(setWorklogTC())
    }, [dispatch])

    if (isLoading) {
        return <Loading />
    }

    return (
        <Grid item xs={12} sm={6} style={{margin: '50px auto',}}>
            <Container>
                <NavLink to={'/employees'}
                         style={{display: 'inline-block', marginBottom: '30px', padding: '7px', border: '1px solid grey' ,textDecoration: 'none', color:'black'}}
                >Вернуться к списку сотрудников</NavLink>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Id Сотрудника</b></TableCell>
                                <TableCell align="right"><b>C (Время присутствия)</b></TableCell>
                                <TableCell align="right"><b>Дo (Время присутствия)</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filtered
                                .map(e => (
                                    <TableRow key={e.id}>
                                        <TableCell scope='row'>{e.employee_id}</TableCell>
                                        <TableCell align="right"><span>{e.from}</span></TableCell>
                                        <TableCell align="right"><span style={{ color: e.color }}>{e.to}</span></TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Grid>

    )
}
