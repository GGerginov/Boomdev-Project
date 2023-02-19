import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Avatar, Typography} from "@mui/material";
import styles from "./User.module.scss"

const User = ({avatar,name,size}) =>{

    return (
        <Container className={styles.userContainer}>
            <Grid container gap={1}>
                <Grid item>
                    <Avatar alt="Avatar" src={avatar} sx={{ width: {size}, height: {size} }}/>
                </Grid>
                <Grid item alignSelf={"center"}>
                    <Typography align={"center"} variant={"h4"}>{name}</Typography>
                </Grid>
            </Grid>
        </Container>
    )

}

export default User
