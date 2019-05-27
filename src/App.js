import React, {Fragment} from 'react';
import {GlobalStyle} from './style'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <Fragment>
                <GlobalStyle>
                    <div>
                        hello
                    </div>
                    );
                </GlobalStyle>
            </Fragment>
        )

    }
}

App.propTypes = {};

export default App;