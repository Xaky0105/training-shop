import Slider from '../components/slider/Slider'
import Advantage from '../components/advantage/Advantage';
import Blognewstop from '../components/blognews-top/Blognewstop';
import Blognewsbot from '../components/blognews-bot/Blognewsbot';
import Clothers from '../components/clothes/Clothers';
import Subscribe from '../components/subscribe/Subscribe';

const gender = {
    women: 'Women`s',
    men: 'Men`s'
}
function Home() {
    return (
        <>
            <Slider/>
            <Advantage />
            <Clothers 
                title = {gender.women}
            />  
            <Clothers 
                title = {gender.men}
            />
            <Blognewstop />
            <Subscribe />
            <Blognewsbot />
        </>
        
    )
}

export default Home;