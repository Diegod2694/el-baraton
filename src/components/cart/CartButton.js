import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

function IconLabelButtons(props) {
  const classes = useStyles();

  return (
    <Button onClick={() => props.onClick()} variant="contained" color="primary" className={classes.button}>
      Comprar todo
      <AddShoppingCartIcon />
    </Button>
  );
}

export default IconLabelButtons;