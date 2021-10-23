import React,{useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Mydata from './Mydata';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


function Sec() {
    const [myData, setMyData] = React.useState([]);
useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
        .then((response) =>
            response.json())
        .then((json) => {
            console.log(json)
            setMyData(json.data)
        });
}, [])
console.log(myData)
    return (
        <>
        {
            myData.map((Element) => {
                return (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 1000 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell  align="right" >Rank</StyledTableCell>
                                    <StyledTableCell align="right">Name</StyledTableCell>
                                    <StyledTableCell align="right">Price</StyledTableCell>
                                    <StyledTableCell align="right">MarketCap</StyledTableCell>
                                    <StyledTableCell align="right">vwap(24HR)</StyledTableCell>
                                    <StyledTableCell align="right">supply</StyledTableCell>
                                    <StyledTableCell align="right">volume(24HR)</StyledTableCell>
                                    <StyledTableCell align="right">Chang(24Hr)</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                    </StyledTableCell>
                                        <StyledTableCell>{Element.rank}</StyledTableCell>
                                        <StyledTableCell>{Element.name}</StyledTableCell>
                                        <StyledTableCell>{Element.priceUsd}</StyledTableCell>
                                        <StyledTableCell>{Element.marketCapUsd}</StyledTableCell>
                                        <StyledTableCell>{Element.vwap24Hr}</StyledTableCell>
                                        <StyledTableCell>{Element.supply}</StyledTableCell>
                                        <StyledTableCell>{Element.volumeUsd24Hr}</StyledTableCell>
                                        <StyledTableCell>{Element.changePercent24Hr}</StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
            })
        }
</>
    );
}

export default Sec