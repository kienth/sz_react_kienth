import React, { useState, useReducer, useEffect, useRef, useLayoutEffect, createContext, useMemo, useCallback } from 'react'
import Axios from 'axios'
import { Center, Container, FlexDirection } from '../App.style'
import axios from 'axios'
import { Button } from './Button'
import { Login } from './Login'
import { User } from './User'
import { Child } from './Child'

// Axious is a lightweight HTTP client bases on the $http service within Angular. js v1. x
// and is similar to the native JavaScript Fetch API. Axios is promise-based, which gives you
// the abilitiy to take advantage of JavaScript's async and await for more readable
// asynchronous code.
const AxiousTutorial = () => {

    const getJoke = () => {
        Axios.get("https://reqres.in/api/products/"+Math.floor(Math.random() * 9)).then((response) => {
            console.log(response);
        })

        fetch("https://reqres.in/api/products/"+Math.floor(Math.random() * 9)).then((response) => response.json()).then((data) => {
            console.log(data);
        })
    }
    return (
        <Center>
            Hello Youtube
            <button onClick={getJoke}>Get Joke Right Now</button>
        </Center>
    );
}

// useState is a Hook that allows you to have state variables in functional components.
// You pass the initial state to this function and it returns a variable with the current state value
// (not necessarily the initial state) and another function to update this value.
const StateTutorial = () => {
    const [counter, setCounter] = useState(0);
    
    const increment = () => {
        setCounter(counter + 1);
    }
    return (
        <Center>
             {counter} <button onClick={increment}>Increment</button>
        </Center>
    );
}

const StateTutorial2 = () => {
    const [inputValue, setInputValue] = useState("Pedro");

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }
    
    return (
        <Center>
            <input placeholder="enter something..." onChange={onChange} />
            {inputValue}
        </Center>
    );
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1, showText: state.showText}
        case 'toggleShowText':
            return {count: state.count , showText: !state.showText}
        default:
            return state
    }

}

// useReducer is usually preferable to useState when you have complex state logic that
// involves multiple sub-values or when the next state depends on the previous one.
// useReducer also lets you optimize performance for components that trigger deep updates
// becuase you can pass dispatch down instead of callbacks.
const ReducerTutorial = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});

    return (
        <Center>
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({type: "INCREMENT"})
                dispatch({type: "toggleShowText"})
            }}>Click Here</button>
            {state.showText && <p>This is a text</p>}
        </Center>
    )
}

// The useEffect Hook allows you to perform side effects in your components. Some
// examples of side effects are: fetching data, directly updating the DOM, and timers
// useEffect accepts two arguments. The second argument is optional, useEffect (<function>, <dependency>)
const EffectTutorial = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => { 
                setData(response.data[0].email)
                console.log("API WAS CALLED");
            });
    }, [count])

    return (
        <Center>
            <FlexDirection flexDirection="column">
                Hello World 
                <h1>{data}</h1>
                <h1>{count}</h1>
                <button onClick={() => {setCount(count + 1)}}>
                    Click
                </button>
            </FlexDirection>
            
        </Center>
    )
}

// The useRef is a hook that allows to directly create a reference to the DOM element in
// the functional component. Syntax: const refContainer = useRef(initialValue); The useRef
// returns a mutable ref object. This object has a property called.
const RefTutorial = () => {

    const inputRef = useRef(null);

    const onClick = () => {
        console.log(inputRef.current.value)
        inputRef.current.focus()
        inputRef.current.value = '';
    }

    return (
        <Container>
            <h1>Pedro</h1>
            <input type="text" placeholder='Ex...' ref={inputRef} />
            <button onClick={onClick}>Change Name</button>        
        </Container>
    );
}


// useLayoutEffect. The signature is identical to useEffect, but it fires synchronously after all
// DOM mutations. Use this to read layout from the DOM and synchronously re-render.
// Updates scheduled inside useLayoutEffect will be flushed synchronously, before the 
// browser has a chance to paint.
const LayoutEffectTutorial = () => {

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, [])

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, [])

    return (
        <div className="test">
            <input type="text" value="PEDRO" ref={inputRef} style={{width: 400, height: 200}} />
        </div>
    );
}


// useImperativeHandle allows you to pass values and functions from a Child component
// back up to a Parent using a ref. From there, the Parent can either use it itself or pass it to
// another Child. Note that you can only pass a ref as a prop to a child that wraps its
// component in forwardRef


const ImperativeHandleTutorial = () => {
    const buttonRef = useRef(null);
    return (
        <div>
            <button onClick={() => {buttonRef.current.alterToggle()}}>Button From Parent</button>
            <Button ref={buttonRef}/>
        </div>
    );
}


// "useContext" hook is used to create common data that can be accessed throughout the 
// component hierarchy without passing the props down manually to each level. Context
// defined will be available to all the child components without involving "porps".

export const AppContext = createContext(null);

const ContextTutorial = () => {
    const [username, setUsername] = useState("");

    return (
        <AppContext.Provider value={{username, setUsername}}>
            <Login /> <User />
        </AppContext.Provider>
    )
}

// React has a built-in hook called useMemo that allows you to memoize expensive
// functions so that you can avoid calling them on every render. You simple pass in a
// function and an array of inputs and useMemo will only recompute the memoized value when
// one of the inputs has changed.

const MemoTutorial = () => {

    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data);
        })
    }, []);

    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if(currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log("THIS WAS COMPUTED");
        return longestName;
    }

    const getLongestName = useMemo(() => findLongestName(data), [data]);

    return (
        <div>
            <div>{getLongestName}</div>

            <button onClick={() => {
                setToggle(!toggle);
            }}>
                {""}
                Toggle
            </button>
            {toggle && <h1> toggle </h1>}
        </div>
    )
    
}

// The useCallback hook is used when you have a component in which the child is 
// rerendering again and again without need. Pass an inline callback and an array of
// dependencies. useCallback will return a memoized version of the callback that only
// changes if one of the dependencies has changed
const CallBackTutorial = () => {

    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Yo, pls sub to the channel!");

    const returnComment = useCallback(() => {
        return data;
    }, [data])
    return (
        <div>
            <Child returnComment={returnComment} />
            <button onClick={() => {
                setToggle(!toggle)
            }}>

                {" "}
                Toggle
            </button>
            {toggle && <h1> toggle </h1>}
        </div>
    );
}
 
 
export default CallBackTutorial;