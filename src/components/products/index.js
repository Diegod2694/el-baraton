import React, { Component } from 'react';
import Card from './ProductCard'
import ControlBar from './ControlBar'
import './styles.scss';

class Products extends Component {
  state = {
    filterByAvailability: '',
    filterByAvailabilityOptions: [
      {
        label: 'Todos',
        value: '',
      },
      {
        label: 'Disponibles',
        value: true,
      },
      {
        label: 'No disponibles',
        value: false,
      },
    ],
    filterByRange: '',
    filterByRangeOptions: [
      {
        label: 'Todos',
        value: '',
      },
      {
        label: 'Menores 5000',
        value: 1,
      },
      {
        label: 'Entre 5000 y 10000',
        value: 2,
      },
      {
        label: 'Entre 10000 y 15000',
        value: 3,
      },
      {
        label: 'Mayores a 15000',
        value: 4,
      },
    ],
    filterByQuantity: '',
    filterByQuantityOptions: [
      {
        label: 'Todos',
        value: '',
      },
      {
        label: 'Menores 100',
        value: 1,
      },
      {
        label: 'Entre 100 y 500',
        value: 2,
      },
      {
        label: 'Mayores a 500',
        value: 3,
      },
    ],
    sortByAvailability: '',
    sortByAvailabilityOptions: [
      {
        label: 'Sin Orden',
        value: '',
      },
      {
        label: 'Disponibles primero',
        value: true,
      },
      {
        label: 'No disponibles primero',
        value: false,
      },
    ],
    sortByRange: '',
    sortByRangeOptions: [
      {
        label: 'Sin Orden',
        value: '',
      },
      {
        label: 'De mayor a menor',
        value: true,
      },
      {
        label: 'De menor a mayor',
        value: false,
      },
    ],
    sortByQuantity: '',
    sortByQuantityOptions: [
      {
        label: 'Sin Orden',
        value: '',
      },
      {
        label: 'De mayor a menor',
        value: true,
      },
      {
        label: 'De menor a mayor',
        value: false,
      },
    ],
  }

  handleChange = ( event ) => {
    this.setState( {
      [event.target.name]: event.target.value,
    } )
  }

  filterByAvailability = ( data ) => {
    const { filterByAvailability } = this.state
    switch (filterByAvailability) {
      case true:
        return data.filter( e => e.available === true )
      case false:
        return data.filter( e => e.available === false )
      default:
        return data
    }
  }

  filterByRange = ( data ) => {
    const { filterByRange } = this.state
    const stringToNumber = ( str ) => parseInt(str.substr(1,str.length).replace(",", ""))
    switch (filterByRange) {
      case 1:
        return data.filter( e => stringToNumber( e.price ) < 5000)
      case 2:
        return data.filter( e => stringToNumber( e.price ) >= 5000 && stringToNumber( e.price ) < 10000 )
      case 3:
        return data.filter( e => stringToNumber( e.price ) >= 10000 && stringToNumber( e.price ) < 15000 )
      case 4:
        return data.filter( e => stringToNumber( e.price ) > 15000 )
      default:
        return data
    }
  }

  filterByQuantity = ( data ) => {
    const { filterByQuantity } = this.state
    switch (filterByQuantity) {
      case 1:
        return data.filter( e => e.quantity < 100 )
      case 2:
        return data.filter( e => e.quantity >= 100 && e.quantity < 500 )
      case 3:
        return data.filter( e => e.quantity > 500 )
      default:
        return data
    }
  }

  sortByAvailability = ( data ) => {
    const { sortByAvailability } = this.state
    switch (sortByAvailability) {
      case true:
        const sortAvailableFirst = [...data].sort((a,b) => b.available - a.available )
        return sortAvailableFirst
      case false:
        const sortAvailableLast = [...data].sort((a,b) => a.available - b.available )
        return sortAvailableLast
      default:
        return data
    }
  }

  sortByRange = ( data ) => {
    const { sortByRange } = this.state
    const stringToNumber = ( str ) => parseInt(str.substr(1,str.length).replace(",", ""))
    switch (sortByRange) {
      case true:
        const sortBiggestFirst = [...data].sort((a,b) => stringToNumber( b.price ) - stringToNumber( a.price ) )
        return sortBiggestFirst
      case false:
        const sortBiggestLast = [...data].sort((a,b) => stringToNumber( a.price ) - stringToNumber( b.price ) )
        return sortBiggestLast
      default:
        return data
    }
  }

  sortByQuantity = ( data ) => {
    const { sortByQuantity } = this.state
    switch (sortByQuantity) {
      case true:
        const sortBiggestFirst = [...data].sort((a,b) => b.quantity - a.quantity )
        return sortBiggestFirst
      case false:
        const sortBiggestLast = [...data].sort((a,b) => a.quantity - b.quantity )
        return sortBiggestLast
      default:
        return data
    }
  }

  transformData = () => {
    const { data } = this.props
    const filteredData = this.filterByQuantity(this.filterByRange( this.filterByAvailability( data ) ))
    const sortedData = this.sortByQuantity(this.sortByRange( this.sortByAvailability( filteredData ) ))
    return sortedData
  }

  render() {
    const transformedData = this.transformData()
    return (
      <div className="Products">
        <ControlBar handleChange={this.handleChange} data={this.state} />
        {
          transformedData.length === 0
            ? (
              <div className="Products-empty-list">
                <h2> Seleccione un articulo en el menu </h2>
              </div>
            )
            : (
              transformedData.map( product =>
                <Card key={product.id} data={product} addToCart={this.props.addToCart}/>
              )
            )
        }
      </div>
    )
  }
}

Products.propTypes = {
  
};

export default Products