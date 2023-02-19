import {Container} from "@mui/material";
import Paper from "@mui/material/Paper";
import Login from "./Login";
import styles from "./LoginPage.module.scss"

const LoginPage = () =>{

    return(
        <Container maxWidth={false} disableGutters={true}>
        <Paper className={styles.background}>
                <Login/>
            </Paper>
        </Container>
    )
}


export default LoginPage
