import {Container} from "@mui/material";
import Login from "./Login";
import styles from "./LoginPage.module.scss"

const LoginPage = () => {

    return <Container className={styles.wrapper} maxWidth={false} disableGutters={true}>
        <Login/>
    </Container>

}


export default LoginPage
