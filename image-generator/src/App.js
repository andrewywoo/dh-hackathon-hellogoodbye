import React, { Fragment } from 'react';
import SunsetSceneWrapper from './components/SunsetSceneWrapper';

import './style.scss';

function App() {
    const renderSunsets = (count = 1) => {
        const elementsArr = new Array(count);
        elementsArr.fill(<SunsetSceneWrapper />);
        return elementsArr.map((element, i) => <Fragment key={i}>{element}</Fragment>);
    };

    return (
        <div className="image-generator-wrapper">
            <h1>Image Generator</h1>
            {renderSunsets(10)}
        </div>
    );
}

export default App;
