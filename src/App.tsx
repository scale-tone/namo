import React from 'react';
import styled from '@emotion/styled';

import { AppBar, Box, Grid, MenuItem, Select, TextField, Toolbar, Typography, Button, IconButton, LinearProgress } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';

export default function App() {

    const [inProgress, setInProgress] = React.useState(false);
    const [completed, setCompleted] = React.useState(false);

    return (<>
        <TopAppBar position="static" className="app-bar">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>

                <Box width={5} />

                <img src={`logo.png`} height="50px"></img>

                <Box width={10} />

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    NaMo v3.11
                </Typography>

                <IconButton color="inherit">
                    <AccountCircleIcon />
                </IconButton>

            </Toolbar>
        </TopAppBar>

        <AppBar position="static" color="inherit">
            <Toolbar>

                <RunButton
                    variant="contained"
                    size="large"

                    onClick={() => {
                        setInProgress(true);
                        setTimeout(() => {
                            setInProgress(false);
                            setCompleted(true);
                        }, 2000);
                    }}
                >
                    Run
                </RunButton>

                {inProgress && <ProgressBar sx={{ flexGrow: 1 }} />}

            </Toolbar>
        </AppBar>

        <Grid container spacing={1}>

            <Grid item xs={3}>
                <DivWithPadding>
                    <Select fullWidth value="AA6082">
                        <MenuItem value={'AA6082'}>AA6082</MenuItem>
                        <MenuItem value={'AA6083'}>AA6083</MenuItem>
                    </Select>
                </DivWithPadding>
            </Grid>

            <Grid item xs={9}>
            </Grid>

            <Grid item xs={2}>

                <Grid container>

                    <Grid item xs={6}>
                        <DivWithPadding>
                            <TextField value="0.99" />
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={6}>
                        <DivWithPadding>
                            <InputLabel>Si [wt%]</InputLabel>
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={6}>
                        <DivWithPadding>
                            <TextField value="0.98" />
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={6}>
                        <DivWithPadding>
                            <InputLabel>Fe [wt%]</InputLabel>
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={6}>
                        <DivWithPadding>
                            <TextField value="0.97" />
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={6}>
                        <DivWithPadding>
                            <InputLabel>Cu [wt%]</InputLabel>
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={6}>
                        <DivWithPadding>
                            <TextField value="0.96" />
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={6}>
                        <DivWithPadding>
                            <InputLabel>Mn [wt%]</InputLabel>
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={6}>
                        <DivWithPadding>
                            <TextField value="0.95" />
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={6}>
                        <DivWithPadding>
                            <InputLabel>Mg [wt%]</InputLabel>
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={6}>
                        <DivWithPadding>
                            <TextField value="0.94" />
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={6}>
                        <DivWithPadding>
                            <InputLabel>Cr [wt%]</InputLabel>
                        </DivWithPadding>
                    </Grid>

                </Grid>

            </Grid>

            <Grid item xs={4}>

                <GridWithTopPadding container>

                    <Grid item xs={5}>
                        <DivWithPadding>
                            <TextField value="185" />
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={7}>
                        <DivWithPadding>
                            <InputLabel>Ageing Temperature [°C]</InputLabel>
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={5}>
                        <DivWithPadding>
                            <TextField value="0.5" />
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={7}>
                        <DivWithPadding>
                            <InputLabel>Post Extrusion Strain [%]</InputLabel>
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={5}>
                        <DivWithPadding>
                            <TextField value="200" />
                        </DivWithPadding>
                    </Grid>
                    <Grid item xs={7}>
                        <DivWithPadding>
                            <InputLabel>Post Extrusion Quench [°C/s]</InputLabel>
                        </DivWithPadding>
                    </Grid>

                </GridWithTopPadding>

            </Grid>

            <Grid item xs={6}>

                {!inProgress && completed &&
                    <XYPlot
                        width={500}
                        height={500}>
                        <HorizontalGridLines />
                        <LineSeries
                            data={[
                                { x: 1, y: 10 },
                                { x: 2, y: 5 },
                                { x: 3, y: 15 }
                            ]} />
                        <XAxis />
                        <YAxis />
                    </XYPlot>
                }

            </Grid>

        </Grid>

    </>);
}

const GridWithTopPadding = styled(Grid)({
    paddingTop: 100
})


const InputLabel = styled(Typography)({
    paddingTop: 15
})

const DivWithPadding = styled.div({
    paddingTop: 20,
    paddingLeft: 20
})

const ProgressBar = styled(LinearProgress)({
    height: 10,
    marginLeft: 40,
    marginRight: 20
})

const RunButton = styled(Button)({
    width: 200
})

const TopAppBar = styled(AppBar)({
    backgroundColor: '#444D55'
})
