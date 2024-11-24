import {useReducer} from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const SUBMIT_CHANGE = 'submit-change';

const reducer = (state, action) => {

    switch(action.type){
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case SUBMIT_CHANGE:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd:0
            }
        default:
            return state; //or maybe throw new Error?

    }
}

function CounterPage({initialCount}) {

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    }

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: SUBMIT_CHANGE
        });

    }

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value) || 0; //if NaN, then 0

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });
    }

    return <Panel className="m-3">
        <h1>Clicks: {state.count}</h1>
        <div className="flex flex-row gap-4">
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>


        <form className="mt-5">
            <label>
                Add total:
            </label><br/>
            <input onChange={handleInputChange} className="border border-gray-300 bg-gray-30 p-1 m-3"
                   value={state.valueToAdd || ""} type="number"/>
            <Button onClick={handleSubmit}>Add Total</Button>
        </form>
    </Panel>
}

export default CounterPage;