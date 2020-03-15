import React from 'react';

import Result from './Result';
import ComputateScreen from './ComputeScreen';

const screen = (props) => (
    <section className="screen">
        <Result>{props.val1 + props.operator + props.val2}</Result>
        <ComputateScreen>{props.result}</ComputateScreen>
    </section>
);

export default screen;