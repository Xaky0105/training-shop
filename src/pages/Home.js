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
            <div className='clothes' data-test-id={`clothes-${filter.women}`}>
                <Clothers 
                    title = {filter.women}
                />  
            </div>
            <div className='clothes' data-test-id={`clothes-${filter.men}`}>
                <Clothers 
                    title = {filter.men}
                />
            </div>
            <Blognewstop />
            <Subscribe />
            <Blognewsbot />
        </>
        
    )
}

export default Home;