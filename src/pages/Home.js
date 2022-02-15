import Slider from '../components/slider/Slider'
import Advantage from '../components/advantage/Advantage';
import Blognewstop from '../components/blognews-top/Blognewstop';
import Blognewsbot from '../components/blognews-bot/Blognewsbot';
import Clothers from '../components/clothes/Clothers';
import Subscribe from '../components/subscribe/Subscribe';

import { filter } from '../constants/constant';

function Home() {
    return (
        <>
            <Slider/>
            <Advantage />
            <Clothers 
                title = {filter.women}
            />  
            <Clothers 
                title = {filter.men}
            />
            <Blognewstop />
            <Subscribe />
            <Blognewsbot />
        </>
        
    )
}

export default Home;