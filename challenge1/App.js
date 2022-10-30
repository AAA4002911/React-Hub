import React from 'react';
import Header from './Heading.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
    return (
        <div id="main">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));