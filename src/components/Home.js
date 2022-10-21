import { useEffect, useState } from 'react';
import axios from "axios";
import { CryptoState } from './ContextProvider';
import Slider from './Slider';

const Home = () => {
    const {currency} = CryptoState()
    return(
        <>
        <div className='flex flex-col items-center px-[5%] pt-8 h-[400px] bg-hero-pattern'>
            <h1 className="text-5xl font-semibold mb-2 text-center">CRYPTO SPY</h1>
            <p className='text-sm tracking-wide opacity-50 text-center'>Get All Details About Your Favorite Crypto Currency</p>
            <Slider />
        </div>
        </>
    )
}

export default Home;