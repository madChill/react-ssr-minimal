import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { key } from '../../appStore';
import { mapDispatchToProps, mapStateToProps } from './redux';
import useDebounce from '../../components/debound';
// import { fetchList} from "./effect";

const Home = (props) => {
    const [searchTerm, setsearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);
    useEffect(() => {}, [debouncedSearchTerm]);
    console.log(props, '===props===');
    const homeData = props[key.HOME];
    return (
        <div>
            <h1>This is home page11</h1>
            <ul>
                {homeData.data && homeData.data.map((e) => <li>{e.name}</li>)}
            </ul>
            <button
                onClick={() => {
                    // alert('from client');
                    // setsearchTerm('test');
                }}
            >
                Search11
            </button>
        </div>
    );
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default withConnect(Home);
