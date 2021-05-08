import React, {Component} from 'react';

class User extends Component {

    state = {
        users: [],
        isVisible: false,
        removed: false
    }

    render() {
      return (
        <div className = "col-md-8 mb-4">
            {
            !this.state.removed ?
            <div className = "card">

                <div className = "card-header d-flex justify-content-between" onClick={() => this.setState({isVisible: !this.state.isVisible})} style = {{alignItems: 'center'}}>
                   <h4 className = "d-inline">{this.props.data.name}</h4>
                   <i className = "fas fa-times" onClick={() => this.setState({removed: true})} style = {{cursor: "pointer", fontSize: 20}}></i>
                </div>

                {
                    this.state.isVisible ?

                    <div className = "card-body">
                        <p className = "card-text">{this.props.data.email}</p>
                        <p className = "card-text">{this.props.data.phone}</p>
                    </div>

                    :

                    null
                }


            </div>
            :
            null
            }
        </div>
      )
    }

  }

  export default User;
