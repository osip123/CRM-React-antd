
import axios from "axios"
import { useEffect, useState } from "react"

export const UseAuth = () => {

    const [user, setuser] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(json => console.log(json)) 
    })
}