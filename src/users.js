import UserForm from "./userforms";
import UsersTable from "./UsersTable";
import { Box } from "@mui/material";

const users = [
    {
        id:1,
        name: 'Jane',
    },
    {
        id:2,
        name: 'Jhone',
    }
];

const Users = () => {
return(
    <Box
        sx={{
            width: 'calc(100%-100px)',
            margin: 'auto',
            marginTop: '100px',
            marginLeft: '100px',
            marginRight: '100px'

        }}
    >
        <UserForm/>
        <UsersTable rows={users}/>
    </Box>
);
}
export default Users;
