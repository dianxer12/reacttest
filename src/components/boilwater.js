import React from 'react'
import {TemperatureScale} from '../util/constants.js'

class Boilwater extends React.Component{
    render(){
        return (
             <p> The water will {this.props.tempa>100?' boil' : ' not boil'}!</p>
        );
    }
}

class Calc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scale: 'c',
            temperature:''
        }
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    }

    static TemperatureConvert(){
        return {
            [TemperatureScale.CELSIUS](temperature){
               return Math.round(1000*((temperature - 32) * 5 / 9));
            },
            [TemperatureScale.FAHRENHEIT](temperature){
                return Math.round(1000*((temperature * 9 / 5) + 32)/1000);
            }
                 
        }
    }

    handleFahrenheitChange(tempa){
        this.setState({scale:'f',temperature:tempa});
        if(isNaN(parseFloat(tempa))&&tempa!=='')
            throw new Error('wrong value entered in the Fahrenheit field, need to be a number!')
    }

    handleCelsiusChange(tempa){
        this.setState({scale:'c',temperature:tempa});
        if(isNaN(parseFloat(tempa))&&tempa!=='')
            throw new Error('wrong value entered in the Celsius field, need to be a number!')
        
    }

    tryConvert(temperature,scale){
        let tempa = Number.parseFloat(temperature)
        if(Number.isNaN(tempa)) return '';
        console.log(Calc.TemperatureConvert());
        return Calc.TemperatureConvert()[scale](temperature,scale);
    }

    render(){
        const temperature = this.state.temperature;
        const cel = this.state.scale === 'c' ? this.state.temperature : this.tryConvert(temperature,TemperatureScale.CELSIUS);
        const fah = this.state.scale === 'f' ? this.state.temperature : this.tryConvert(temperature,TemperatureScale.FAHRENHEIT);
        return (
            <form>
                <div className="form-group row">
                    <label  className="col-sm-2 col-form-label">Celsius</label>
                    <div className="col-sm-10">
                        <TemperatureInput scale="c" temperature={cel} onHandleTemperature={this.handleCelsiusChange}/>
                    </div>
                </div>
                <div className="form-group row"> 
                    <label  className="col-sm-2 col-form-label">Fahrenheit</label>
                    <div className="col-sm-10">
                        <TemperatureInput  scale="p" temperature={fah} onHandleTemperature={this.handleFahrenheitChange}/>
                    </div>
                </div>
                <div>    
                     <Boilwater tempa={cel} />
                </div>
            </form>           
        );
    }
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onHandleTemperature(e.target.value);
    }

    render(){
        const tempa = this.props.temperature;
        return (
                <input className="form-control" type='text' value={tempa} onChange={this.handleChange}/>
        );
    }
}

export {TemperatureInput,Boilwater,Calc};