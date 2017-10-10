import React from 'react'

class Boilwater extends React.Component{
    render(){
        return (
             <p> The water will {this.props.tempa>100?' boil' : ' not boil'}!</p>
        );
    }
}

class Calc extends React.Component{
    render(){
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="c" />
            </div>
        );
    }
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature : 0,
        }
        this.handleTempaInput = this.handleTempaInput.bind(this);
    }
    handleTempaInput(e){
        this.setState({
            temperature: e.target.value
        })
    }
    render(){
        const tempa = this.state.temperature;
        return (
            <div>
                <input type='text' value={this.state.temperature} onChange={this.handleTempaInput}/>
                <Boilwater tempa={tempa} />
            </div>
        );
    }
}

export {TemperatureInput,Boilwater,Calc};