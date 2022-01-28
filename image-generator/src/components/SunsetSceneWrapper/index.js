import React, { useState } from 'react';

import {MemoizedSunsetScene} from '../SunsetScene';

const SunsetSceneWrapper = () => {
    const [mdata, setmdata] = useState({});

    return (
        <>
            <MemoizedSunsetScene setmdata={setmdata} />
            <code>{JSON.stringify(mdata)}</code>
        </>
    );
};

export default SunsetSceneWrapper;