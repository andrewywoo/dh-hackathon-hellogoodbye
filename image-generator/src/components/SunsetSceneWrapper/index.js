import React, { useState } from 'react';

import {MemoizedSunsetScene} from '../SunsetScene';

import './style.scss';

const SunsetSceneWrapper = () => {
    const [mdata, setmdata] = useState({});

    return (
        <div className="sunset-grid">
            <div className="sunset-grid__sunset-scene">
                <MemoizedSunsetScene setmdata={setmdata} />
            </div>
            <pre className="sunset-grid__metadata">
                {JSON.stringify(mdata, null, 4)}
            </pre>
        </div>
    );
};

export default SunsetSceneWrapper;
