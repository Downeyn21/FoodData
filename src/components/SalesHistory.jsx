import { Box, TableBody, TableCell, TableContainer, TableRow, TableHead, Table } from "@mui/material";
import { mockTransactions } from "./mockData";



function SalesHistory() {

    console.log("FUCKIN RIGHT HERE =>", mockTransactions)

    return ( 
        <Box>
            <TableContainer>
                <Table>
                    <TableHead>
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
                                return 
                                <TableRow>
                                    <TableCell>{Trans.txId}</TableCell>
                                    <TableCell>{Trans.user}</TableCell>
                                    <TableCell>{Trans.date}</TableCell>
                                    <TableCell>{Trans.cost}</TableCell>
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