import React, {Component} from "react";
import Form from "./Form";
import View from "./View";



class App extends Component {

    state = {
        firstname:'',
        lastname:'',
        telephone:''
    }

    inputHandler = (e) => {
this.setState({
    firstname : e.target.value
})
    }
    render() {
        return (
            <div>
                <Form change={this.inputHandler}/>
                <View></View>
                
            </div>
        );
    }
}

// export default App;