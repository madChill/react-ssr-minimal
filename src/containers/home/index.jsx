import React, { useState, useEffect } from 'react'

import useDebounce from "../../components/debound"

// import { fetchList} from "./effect";

export default () => {
    const [searchTerm, setsearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);
    useEffect(() => {
        alert(searchTerm)
    }, [debouncedSearchTerm])

    return <div>
        <h1>This is home page</h1>
        <input></input>
        <button onClick={() => setsearchTerm("test")}>Search</button>
    </div>

}