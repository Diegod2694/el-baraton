import React from 'react'
import './styles.scss'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    display: 'flex',
    justifyContent: 'center', 
    margin: 5,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const CartItem = ( { data, removeCartItem, onChangeText } ) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { name, price, available, quantity, id } = data
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {bull}{available ? 'Disponible' : 'No disponible'}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`Precio: ${price}`}
        </Typography>
        <TextField
          label="Cantidad"
          className={classes.textField}
          type="number"
          margin="normal"
          value={quantity}
          onChange={onChangeText( id )}
        />
      </CardContent>
      <CardActions>
        <Button onClick={() => removeCartItem( id )} size="small">Eliminar</Button>
      </CardActions>
    </Card>
  );
}

export default CartItem