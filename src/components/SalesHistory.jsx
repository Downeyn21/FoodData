import { Box, TableBody, TableCell, TableContainer, TableRow, TableHead, Table } from "@mui/material";
import { mockTransactions } from "./mockData";
import { red } from "@mui/material/colors";
import { styled } from '@mui/material/styles';

const boxWrapper = {
    padding: 2,

}


const bigBucks = {
    bgcolor: "grey",
    overflow: "auto",
    maxHeight: "300px",
    padding: 1,
    border: '1px dashed'

}




function SalesHistory() {

    console.log("FUCKIN RIGHT HERE =>", mockTransactions)


    return ( 
        <Box sx={boxWrapper}>
            <TableContainer sx={bigBucks}>
                <Table>
                    <TableHead sx={{bgcolor: "darkgrey"}}>
                        <TableRow>
                            <TableCell>TxId</TableCell>
                            <TableCell>User</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            mockTransactions.map((Trans) => {
                                return <TableRow key={mockTransactions.indexOf(Trans)}>
                                    <TableCell >{Trans.txId}</TableCell>
                                    <TableCell >{Trans.user}</TableCell>
                                    <TableCell >{Trans.date}</TableCell>
                                    <TableCell >{Trans.cost}</TableCell>
                                </TableRow>
                                
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
     );
}

export default SalesHistory