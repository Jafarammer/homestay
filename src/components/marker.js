import React, {Component} from 'react';
import './marker.css';

class Marker extends Component {
    render() {
        let classes = "marker";
        if (this.props.selected) {
            classes += " selected";
        }
        return(
            <div className={classes}>
                {this.props.texttt} rb
            </div>
        )
    }
}

export default Marker;