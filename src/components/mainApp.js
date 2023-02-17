import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

// Icons
import CalculateIcon from '@mui/icons-material/Calculate';
import { fontSize } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    elevation: 0,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const MainApp = () => {
    const [curEntryPrice, setCurEntryPrice] = React.useState(0);
    const [curQty, setCurQty] = React.useState(0);
    const [curThrottlePrice, setCurThrottlePrice] = React.useState(0);
    const [curThrottleQty, setCurThrottleQty] = React.useState(0);
    const [resAvgEP, setResAvgEP] = React.useState(0);
    const [resultText, setResultText] = React.useState('');
    const [resultFigure, setResultFigure] = React.useState('');

    const calcThrottleQuantity = () => {
        /* Calculate how much to throttle at a given price to achieve at the desired resulting average entry price */
        const cq = Number(curQty);
        const raep = Number(resAvgEP);
        const caep = Number(curEntryPrice);
        const tp = Number(curThrottlePrice);
        
        const tq = (cq * (raep - caep)) / (tp-raep);
        setResultText("Throttle Quantity");
        setResultFigure(tq);
    }

    const calcRAEP = () => {
        /* Calculat the resulting average entry price */
        const cq = Number(curQty);
        const caep = Number(curEntryPrice);
        const tp = Number(curThrottlePrice);
        const tq = Number(curThrottleQty);

        const raep = ( (caep*cq) + (tp*tq) ) / (cq + tq);
        setResultText("Resulting Avg Entry Price");
        setResultFigure(raep);
    }

    return (
        <Paper elevation={12} style={{width: "780px", padding:"60px 35px", marginTop:"-160px", background: "#d6ae7b", color: '#917400', fontSize:'128%'}}>
            <h1 style={{marginBottom:"-1px"}}>Throttle Calculator</h1><br/><br/>
            
            <Stack spacing={2} style={{backgroundColor:'#d6ae7b'}}>
                <Item elevation={0} style={{backgroundColor:'#d6ae7b'}}>
                    <Grid container spacing={1} sx={{flexGrow:1}} >
                        <Grid xs={6}>
                            <label style={{marginRight:'6px'}}>Current Entry Price</label>
                            <Input size="sm" sx={{input: {textAlign:'center'}}} placeholder={curEntryPrice} onChange={(event) => setCurEntryPrice(event.target.value)} />
                        </Grid>
                        <Grid xs={6}>
                            <label style={{marginRight:'6px'}}>Current Quantity</label>
                            <Input size="sm" sx={{input: {textAlign:'center'}}} placeholder={curQty} onChange={(event) => setCurQty(event.target.value)} />
                        </Grid>
                    </Grid>
                </Item>
                <Item elevation={0} style={{backgroundColor:'#d6ae7b'}}>
                    <Grid container spacing={1} sx={{flexGrow:1}} >
                        <Grid xs={6}>
                            <label style={{marginRight:'6px'}}>Throttle Price</label>
                            <Input size="sm" sx={{input: {textAlign:'center'}}} placeholder={curThrottlePrice} onChange={(event) => setCurThrottlePrice(event.target.value)} />
                        </Grid>
                        <Grid xs={6}>
                            <label style={{marginRight:'6px'}}>Throttle Quantity</label>
                            <Input size="sm" sx={{input: {textAlign:'center'}}} placeholder={curThrottleQty} onChange={(event) => setCurThrottleQty(event.target.value)} />
                        </Grid>
                    </Grid>
                </Item>
                <Item elevation={0} style={{backgroundColor:'#d6ae7b'}}>
                    <Grid container spacing={1} sx={{flexGrow:1}} >
                        <Grid xs={6}>
                            <label style={{marginRight:'6px'}}>Resulting Average Entry Price</label>
                            <Input size="sm" sx={{input: {textAlign:'center'}}} placeholder={resAvgEP} onChange={(event) => setResAvgEP(event.target.value)} />
                        </Grid>
                        <Grid xs={6}>
                            {resultText}: <span style={{fontSize:'160%'}}>{resultFigure}</span>
                        </Grid>
                    </Grid>
                </Item>
                <Item elevation={0} style={{backgroundColor:'#d6ae7b'}}>
                <Stack style={{paddingTop:'8px'}} direction="row" spacing={2}>
                    <Button variant="contained" style={{backgroundColor:'#005C46'}} startIcon={<CalculateIcon />} onClick={() => calcThrottleQuantity()}>
                        Throttle Quantity
                    </Button>
                    <Button variant="contained" style={{backgroundColor:'#005C46'}} startIcon={<CalculateIcon />} onClick={() => calcRAEP()}>
                        Resulting Average Entry Price
                    </Button>
                </Stack>
                </Item>
            </Stack>
        </Paper>
    );
}

export default MainApp;