import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  handleClick = () => {
    const newCount = this.state.counter + 1;

    this.setState({
      counter: newCount,
    });

    // execute the callback function that was passed in
    // and pass the newCount
    this.props.onClick(newCount);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Button</button>
      </div>
    );
  }
}

App.propTypes = {
  onClick: PropTypes.func
}

export default App;
