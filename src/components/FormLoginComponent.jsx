import React from 'react';

export default class FormLogin extends React.Component {
    constructor(){
        super()
        this.state = {
            username: 'Adam Ghirvan',
            score: [100, 80, 90],
            emailUser: '',
            passwordUser: ''
        }
    }

    getUsername(){
        return this.state.username;
    }

    changeUsername = () => {
        let collectionScore = this.state.score;
        let newScore = 100;
        collectionScore.push(newScore);
        this.setState({
            score: collectionScore
        });
    }

    handleInput = (data) => {
        this.setState({
            emailUser: data.target.value
        })
    }



    handleSubmitForm = (data) => {
        data.preventDefault();
    }


    render(){
        return(
            <>
                {/* <h1>{this.state.score}</h1>
                <button onClick={this.changeUsername}>Berubah</button>
                <ul>{
                    this.state.score.map(data => (
                        <li>{data}</li>  
                    ))    
                }</ul> */}
                <form onSubmit={e => this.handleSubmitForm(e)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={e => this.handleInput(e)} aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type='submit' className="btn btn-primary">Submit</button>
                </form>
                <h1>{}</h1>
            </>
        )
    }
}