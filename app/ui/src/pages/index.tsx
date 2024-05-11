import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Slider from '@mui/material/Slider';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import theme from '../theme/theme';

export default function Detail() {
  const [open, setOpen] = useState(false);
  const [betAmount, setBetAmount] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState('');

  const games = [
    {
      imageUrl: 'https://source.unsplash.com/random/800x600?baseball',
      description: 'New York Yankees vs Boston Red Sox',
      odds: { yankees: 0.6, redsox: 0.4 },
    },
    {
      imageUrl: 'https://source.unsplash.com/random/800x600?baseball',
      description: 'Los Angeles Dodgers vs San Francisco Giants',
      odds: { dodgers: 0.55, giants: 0.45 },
    },
  ];

  const handleOpen = (team: string) => {
    setOpen(true);
    setSelectedTeam(team);
  };

  const handleClose = () => {
    setOpen(false);
    setBetAmount(0);
  };

  const handleBetAmount = (event: any) => {
    setBetAmount(event.target.value);
  };

  const handleBetSubmit = () => {
    //
    console.log(`Bet ${betAmount} on ${selectedTeam}`);
    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: 'bold', // 太くする
                  color: 'white', // 色を変える
                }}
              >
                ZK-Bet
              </Typography>
              <Button color="inherit">Games</Button>
              <Button color="inherit">Standings</Button>
              <Button color="inherit">Stats</Button>
              <Button color="inherit">Account</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ m: 10 }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Upcoming Games
          </Typography>
          <Grid container spacing={2}>
            {games.map((game, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia component="img" />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {game.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body1">Odds:</Typography>
                      <Box sx={{ ml: 2, width: 200 }}>
                        <Slider
                          value={[
                            game.odds.yankees !== undefined
                              ? game.odds.yankees
                              : 0,
                            game.odds.redsox !== undefined
                              ? game.odds.redsox
                              : 0,
                          ]}
                          valueLabelDisplay="auto"
                          disabled
                        />
                      </Box>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleOpen('yankees')}
                      >
                        Bet on Yankees
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{ ml: 2 }}
                        onClick={() => handleOpen('redsox')}
                      >
                        Bet on Red Sox
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Place Your Bet</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Bet Amount"
              type="number"
              fullWidth
              value={betAmount}
              onChange={handleBetAmount}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleBetSubmit}>Bet</Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
