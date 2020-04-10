import React from 'react'
import './Sha.css'
import ShaList from './ShaList'

class Sha extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: "write your promise", words: "", result: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }

        const id =  Date.now().toString()

        this.setState(state => ({
            words: state.text + id,
            text: ''
        }));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                        className="Sha-text-area" 
                        defaultValue={this.state.text} 
                        onChange={this.handleChange}
                    />
                    <div>
                        <button>Sha</button>
                    </div>
                    <div>
                        <ShaList words={this.state.words}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Sha