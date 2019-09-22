import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render () {
    return (
      <div className="input-group">
        <div className="input-group-btn" >
          <button
            type="button"
            onClick={this.switchGender.bind(this)}
            className="btn btn-default dropdown-toggle"
          >
            <i className={classnames('fa', {
              'fa-mars': this.state.gender === 'M',
              'fa-venus': this.state.gender === 'F'
            })} ></i>
          </button>
        </div>
        <input
          type="text"
          autoFocus="true"
          className={classnames('form-control', styles.addFriendInput)}
          placeholder="Type the name of a friend to be added"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      gender: 'M'
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }
  switchGender(){
    this.setState({ gender: this.state.gender==='M'?'F':'M' });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addFriend(name, this.state.gender);
      this.setState({ name: '', gender: 'M' });
    }
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
