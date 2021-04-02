import React from 'react';

class HelloMessage extends React.Component {
    handleClick() {
        alert('You clicked!1');
    }

    render() {
        return (
            <div>
                <div onClick={this.handleClick}>Hello {this.props.name}</div>
            </div>
        );
    }
}
// ReactDOM.render(<HelloMessage />, document.getElementById('react-root'));

export default HelloMessage;
