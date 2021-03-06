import React from 'react'
import {TemperatureScale} from '../util/constants.js'

class Boilwater extends React.Component{
    render(){
        let currentTemperature = this.props.tempa
        return (
             <p> The water will {currentTemperature>=100 ? 'boil' : 'not boil'}!</p>
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
                <div>
                    <label>{this.props.label}</label>
                    <input className="form-control" type='text' value={tempa} onChange={this.handleChange}/>
                </div>
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
            return ''
        
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
        const testArrays = [
            {label:'fahrenheit',scale:'f',temperature:cel,onHandleTemperature:this.handleFahrenheitChange},
            {label:'celsius',scale:'c',temperature:fah,onHandleTemperature:this.handleCelsiusChange}
        ]
        return (
            <form>
                {
                    testArrays.map((v) => (
                        <TemperatureInput key={v.label} {...v} />
                    ))
                }
                {/* <div className="form-group row">
                    <label  className="col-sm-2 col-form-label">Celsius</label>
                    <div className="col-sm-10">
                        <TemperatureInput {...this.state}onHandleTemperature={this.handleCelsiusChange}/>
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
                </div> */}
            </form>           
        );
    }
}

export {TemperatureInput,Boilwater,Calc};