import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './styles.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function CustomSelect (props) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={`${props.name}-helper`}>{props.title}</InputLabel>
      <Select
        value={props.value}
        onChange={props.handleChange}
        input={<Input name={props.name} id={`${props.name}-helper`} />}
      >
        {
          props.options.map(( option, i ) => <MenuItem key={i} value={option.value}>{option.label}</MenuItem>)
        }
      </Select>
    </FormControl>
  )
}

function ControlBar(props) {
  return(
    <div className="ControlBar">
      <div className="ControlBar-row">
        <CustomSelect
          title="Filtrar por disponibilidad"
          name="filterByAvailability"
          value={props.data.filterByAvailability}
          handleChange={props.handleChange}
          options={props.data.filterByAvailabilityOptions}
        />
        <CustomSelect
          title="Filtrar por rango"
          name="filterByRange"
          value={props.data.filterByRange}
          handleChange={props.handleChange}
          options={props.data.filterByRangeOptions}
        />
        <CustomSelect
          title="Filtrar por cantidad"
          name="filterByQuantity"
          value={props.data.filterByQuantity}
          handleChange={props.handleChange}
          options={props.data.filterByQuantityOptions}
        />
      </div>
      <div className="ControlBar-row">
        <CustomSelect
          title="Ordenar por disponibilidad"
          name="sortByAvailability"
          value={props.data.sortByAvailability}
          handleChange={props.handleChange}
          options={props.data.sortByAvailabilityOptions}
        />
        <CustomSelect
          title="Ordenar por rango"
          name="sortByRange"
          value={props.data.sortByRange}
          handleChange={props.handleChange}
          options={props.data.sortByRangeOptions}
        />
        <CustomSelect
          title="Ordenar por cantidad"
          name="sortByQuantity"
          value={props.data.sortByQuantity}
          handleChange={props.handleChange}
          options={props.data.sortByQuantityOptions}
        />
      </div>
    </div>
  )
}

export default ControlBar