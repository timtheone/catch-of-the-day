import React from 'react';
import { getFunName} from '../helpers';

class StorePicker extends React.Component {
    // Bind custom goToStore function to `this`.
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this)
    // }
   

    // goToStore(event) {
    //     console.log(this.myInput);

    //     event.preventDefault();
    // }

    myInput = React.createRef();
    // Another way to `bind` this to a function
    goToStore = (event) => {
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`)
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                { /* This is how comments are in JSX */}
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter a Store</h2>
                    <input 
                        type="text"
                        ref={this.myInput} 
                        required 
                        placeholder="Store Name" 
                        defaultValue={getFunName()}
                    />
                    <button type="submit">Visit Store</button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;