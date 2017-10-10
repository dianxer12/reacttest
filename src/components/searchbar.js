import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : '',
            onlyProduct : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setSearchCondition = this.setSearchCondition.bind(this);
    }

    setSearchCondition(event){
        event.persist();
        this.setState(function(prevState, props) {
            console.log('start debugging, and event.target is after adding persist ',event);
            return {
              value: event.target.value
            };
          });
    }

    handleSubmit(event){
        console.log('hello, a form is submitted with value: ' , this.state.value  , ' and option ' , this.state.onlyProduct);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" value={this.state.value} onChange={this.setSearchCondition} className="form-control" id="searchstock" aria-describedby="emailHelp" placeholder="Search..." />
                    <small id="searchhelp" className="form-text text-muted">type in any words you want to search.</small>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" value={this.state.onlyProduct}/>
                        {this.props.description}
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export {SearchBar};
