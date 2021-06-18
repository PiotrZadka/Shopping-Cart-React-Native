import axios from 'axios'

let singleton

export const getAxiosSingleton = () =>{
    if(!singleton){
        singleton = axios.create();  
    }
    return singleton
};