import React, { useLayoutEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import Context from '../utils/context';

const Home = () => {
    const context = useContext(Context);

    useLayoutEffect(() => {
        context.assignShowNav(true);
    }, []);
    
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;
