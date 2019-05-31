import React, {Fragment} from 'react';
import {Provider} from 'react-redux'
import {GlobalStyle,HelloWrapper} from './style'
import Header from './common/Header';
import store from "./store";
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <Header/>
                </Provider>
            </div>
        )

    }
}

App.propTypes = {};

export default App;