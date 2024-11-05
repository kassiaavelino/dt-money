import { Sumary } from "../Sumary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashbord () {
    return(
        <Container>
            <Sumary />
            <TransactionsTable />
        </Container>

    );
}