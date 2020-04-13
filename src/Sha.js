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

        const url = "http://127.0.0.1:8080/sha"; 
        const requestOptions = {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, promise: this.state.text })
        };
        
        fetch(url, requestOptions)
            .then(res => res.json())
            .then(data => {
                this.setState({ result: data.sha })
            })
        
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
                        <ShaList result={this.state.result}/>
                    </div>
                </form>
            </div>
        )
    }

    componentDidMount(){
        // const url = "http://127.0.0.1:8080/sha";
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(e => console.log(e))



        // const id =  Date.now().toString()
 
        // const requestOptions = {
        //     method: 'POST',
        //     // headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ id: id, promise: this.state.text })
        // };
        
        // fetch(url, requestOptions)
        //     .then(res => res.json())
        //     .then(result => console.log(result))
        //     .catch(e => console.log(e));

    }
}

export default Sha