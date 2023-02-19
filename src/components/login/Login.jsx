
import styles from "./Login.module.scss"
import {InputAdornment, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Login = ()=>{


    return <div className={styles['login-form']}>

        <TextField InputProps={{
            startAdornment: <InputAdornment position="start"><EmailIcon/></InputAdornment>,
        }}/>
        <TextField InputProps={{
            startAdornment: <InputAdornment position="start"><LockIcon/></InputAdornment>,
        }}/>

        <Button variant={'contained'} size={"large"} className={styles.button}>Login</Button>
    </div>

}

export default Login
