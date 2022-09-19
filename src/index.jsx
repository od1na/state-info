import React, { Component } from "react";

class Inputs extends Component {
    state = {
        name: ``,
        surname: ``,
        email: ``,
        info: { name: ``, surname: ``, email: ``, }
    }
    render() {
        let OnChangefirstly = ({target:{value, name}}) => {
            this.setState({ [name]: value})
        }
        let OnChangesecond = ({ target: { value, name } }) => {
            this.setState(
                {
                    info: { ...this.state.info, [name]: value }
                }
            )
        }

        return (
            <div>
                <div>
                    <h1>Registration</h1>
                    <div>
                        <h2>firstname: {this.state.firstname} </h2>
                        <h2>lastname:  {this.state.lastname} </h2>
                        <h2>email:  {this.state.email} </h2>
                    </div>
                    <div>
                        <input type="text" onChange={OnChangefirstly} placeholder="firstname" name='firstname' />
                        <input type="text" onChange={OnChangefirstly} placeholder="lastname" name='lastname' />
                        <input type="email" onChange={OnChangefirstly} placeholder="email" name='email' />
                    </div>
                </div>
                <br /><br /><hr/>




                <div>
                    <h1 >Registration second</h1>
                    <div>
                        <h2>name: {this.state.info.name} </h2>
                        <h2>surname:  {this.state.info.surname} </h2>
                        <h2>email:     {this.state.info.email} </h2>
                    </div>
                    <div>
                        <input type="text" onChange={OnChangesecond} placeholder="Name" name='name' />
                        <input type="text" onChange={OnChangesecond} placeholder="Surname" name='surname' />
                        <input type="email" onChange={OnChangesecond} placeholder="email" name='email' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Inputs;