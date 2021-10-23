import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




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

function Mydata() {
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
        <div>
            {
                myData.map((Element)=>{
                    return(
                        <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 1000 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell  align="right">id</StyledTableCell>
                                    <StyledTableCell align="right">Rank</StyledTableCell>
                                    <StyledTableCell align="right">symbol</StyledTableCell>
                                    <StyledTableCell align="right">name</StyledTableCell>
                                    <StyledTableCell align="right">supply</StyledTableCell>
                                    <StyledTableCell align="right">max Supply</StyledTableCell>
                                    <StyledTableCell align="right">marketCapUsd</StyledTableCell>
                                    <StyledTableCell align="right">volume(24HR)</StyledTableCell>
                                    <StyledTableCell align="right">priceUsd</StyledTableCell>
                                    <StyledTableCell align="right">changePercent24Hr</StyledTableCell>
                                    <StyledTableCell align="right">vwap24Hr</StyledTableCell>
                                    <StyledTableCell align="right">explorer</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                    </StyledTableCell>
                                        <StyledTableCell>{Element.id}</StyledTableCell>
                                        <StyledTableCell>{Element.rank}</StyledTableCell>
                                        <StyledTableCell>{Element.symbol}</StyledTableCell>
                                        <StyledTableCell>{Element.name}</StyledTableCell>
                                        <StyledTableCell>{Element.supply}</StyledTableCell>
                                        <StyledTableCell>{Element.maxSupply}</StyledTableCell>
                                        <StyledTableCell>{Element.volumeUsd24Hr}</StyledTableCell>
                                        <StyledTableCell>{Element.priceUsd}</StyledTableCell>
                                        <StyledTableCell>{Element.changePercent24Hr}</StyledTableCell>
                                        <StyledTableCell>{Element.vwap24Hr}</StyledTableCell>
                                        <StyledTableCell>{Element.explorer}</StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    )
                })
            }
        </div>
    )
}

export default Mydata;
