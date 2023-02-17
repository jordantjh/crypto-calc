import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import { styled } from '@mui/joy/styles';

const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.vars.palette.text.tertiary,
  }));

const MainApp = () => {
    return (
        <div style={{backgroundColor: "orange", width: "780px"}}>
            <h1>Throttle Calculator</h1>
            
            <Stack spacing={2} sx={{width: '100%'}}>
                <Item style={{backgroundColor:"green"}}>Row 1</Item>
                <Item>Row 2</Item>
                <Item>Row 3</Item>
            </Stack>
        </div>
    );
}

export default MainApp;