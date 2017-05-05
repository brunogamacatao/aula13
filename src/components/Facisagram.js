import React from 'react';
import { Link } from 'react-router';

class Facisagram extends React.Component {
  render() {
    return (
        <div>
            <h1>
                <Link to="/">Facisagram</Link>
            </h1>
            {React.cloneElement(this.props.children, this.props)}
        </div>
    );
  }
}

export default Facisagram;
