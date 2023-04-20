import React, {useState, useEffect} from 'react';

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    //if you find saved value in local storage with key name, then return that saved value from local storage
    if(savedValue) return savedValue;
    // useState initialValue can also be a function in that case, call the function else return inital value
    if(initialValue instanceof Function) return initialValue()
    // if no saved value return initial value
    return initialValue
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(()=> {
        return getSavedValue(key, initialValue)
    });
    
    useEffect(()=>{
        console.log("please check local storage for key as name & value as", value)
        localStorage.setItem(key, JSON.stringify(value))
    },[value])
    
    return [value, setValue];
}