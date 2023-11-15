import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [
      {
        id: 4,
        restaurantName: 'Greek God\'s Eatery',
        description: 'Mediterranean Cuisine ',
        tags: ['Vegan'],
        price: '$5.99',
        image: '',
      },
      {
        id: 4,
        restaurantName: 'Sicilian Pizzeria',
        description: 'Pizza ',
        tags: [],
        price: '$3.99',
        image: '',
      },
      {
        id: 4,
        restaurantName: 'Mark\'s Meat and Bread',
        description: 'Sandwhiches',
        tags: [],
        price: '$5.99',
        image: '',
      },
      {
        id: 4,
        restaurantName: 'Carribean Breeze',
        description: 'Carribean Cuisine',
        tags: ['Allergies'],
        price: '$7.99',
        image: '',
      },
      {
        id: 4,
        restaurantName: 'Sally\'s Salad ',
        description: 'Salads',
        tags: ['Vegan'],
        price: '$5.99',
        image: '',
      },
      {
        id: 4,
        restaurantName: 'Hibachi Spot',
        description: 'Japanese Cuisine',
        tags: [],
        price: '$7.99',
        image: '',
      },
    // Add more objects for additional cards
  ];
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();





export default function UserPage() {
  return (
    <main>
    <Box
    sx={{
      bgcolor: '#FFFFFF', // White background color
      py: 16, // Padding on the top and bottom
      textAlign: 'center', // Center align text
    }}
  >
    <Typography variant="h3" color="#40325c">
      Welcome to Culinary Cache
    </Typography>
    <Typography variant="subtitle1" color="#40325c">
      Your one-stop to contribute and avoid food waste while saving money!
    </Typography>
  </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Link
                to={{
                  pathname: `/payment/${card.id}`,
                  state: { cardData: card }, // Pass the card data as state
                }}
                style={{ textDecoration: 'none' }} // Optional: Remove the default link styles
              >
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  {/* Replace 'card.image' with your image URL */}
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%', // 16:9
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.restaurantName}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    {card.tags.map((tag) => (
                      <Button key={tag} size="small">
                        {tag}
                      </Button>
                    ))}
                    <Button size="small">Price: {card.price}</Button>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

