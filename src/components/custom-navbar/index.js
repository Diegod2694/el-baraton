import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class CustomNavbar extends Component {
  state = {
    searchingInputs: {}
  }

  onChange = ( event, id ) => {
    this.setState({
      searchingInputs: {
        [id]: event.target.value,
      }
    })
  }

  renderCategories = ( categories, onChange, searchingInputs, sublevelId = null ) => {
    const categoriesToMap = !searchingInputs[sublevelId] ? categories : categories.filter(e => {
      return e.name === searchingInputs[sublevelId]
    })
    return categories.map( ( category, i ) => {
      if ( !category.sublevels ) {
        if ( i === 0 ) {
          return (
            <>
              <input
                value={searchingInputs[sublevelId]}
                onChange={e => onChange( e, sublevelId )}
                type="text"
                placeholder="Buscar"
                className="mr-sm-2"
              />
              <NavDropdown.Item eventKey={category.id} key={category.id}>{category.name}</NavDropdown.Item>
            </>
          )
        }
        return (
          <NavDropdown.Item eventKey={category.id} key={category.id}>{category.name}</NavDropdown.Item>
        )
      }
      return (
        <NavDropdown key={category.id} title={category.name} id={category.id}>
          { this.renderCategories(category.sublevels, onChange, searchingInputs, category.id) }
        </NavDropdown>
      )
    })
  }

  handleSelect(eventKey) {
    const { selectId } = this.props
    selectId( parseInt( eventKey ) )
  }

  render() {
    const { searchingInputs } = this.state
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">El Baraton</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" onSelect={k => this.handleSelect(k)}>
            {this.renderCategories(this.props.categories, this.onChange, searchingInputs)}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

CustomNavbar.propTypes = {
  
};

export default CustomNavbar;