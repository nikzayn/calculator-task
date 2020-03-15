import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import Row from '../..//components/Row';
import Screen from '../../components/Screen/Screen';
import { btnClicked } from './actions';

function onClick(props) {
    return (value) => {
        props.dispatch(btnClicked(value))
    };
}

function Calculator(props) {
    return (
        <React.Fragment>
            <div className="calculator">
                <Screen val1={props.value.num1} val2={props.value.num2} operator={props.value.operator} result={props.value.result} />
                <div className="keypad">
                    <Row onClick={onClick(props)}>
                        <Button value={'C'} onClick={onClick(props)} />
                        <Button value={'+/-'} onClick={onClick(props)} />
                        <Button value={'%'} onClick={onClick(props)} />
                        <Button type="primary" value={'/'} onClick={onClick(props)} />
                    </Row>

                    <Row>
                        <Button value={'7'} onClick={onClick(props)} />
                        <Button value={'8'} onClick={onClick(props)} />
                        <Button value={'9'} onClick={onClick(props)} />
                        <Button value={'*'} onClick={onClick(props)} />
                    </Row>

                    <Row>
                        <Button value={'4'} onClick={onClick(props)} />
                        <Button value={'5'} onClick={onClick(props)} />
                        <Button value={'6'} onClick={onClick(props)} />
                        <Button value={'-'} onClick={onClick(props)} />
                    </Row>

                    <Row>
                        <Button value={'1'} onClick={onClick(props)} />
                        <Button value={'2'} onClick={onClick(props)} />
                        <Button value={'3'} onClick={onClick(props)} />
                        <Button value={'+'} onClick={onClick(props)} />
                    </Row>

                    <Row>
                        <Button value={'0'} onClick={onClick(props)} />
                        <Button value={'.'} onClick={onClick(props)} />
                        <Button value={'='} onClick={onClick(props)} />
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    value: state
})

export default connect(mapStateToProps)(Calculator);