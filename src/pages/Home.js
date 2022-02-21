import Slider from '../components/slider/Slider'
import Advantage from '../components/advantage/Advantage';
import Blognewstop from '../components/blognews-top/Blognewstop';
import Blognewsbot from '../components/blognews-bot/Blognewsbot';
import Clothers from '../components/clothes/Clothers';
import Subscribe from '../components/subscribe/Subscribe';



export const gender = {
    men: 'men',
    women: 'women'
}

function Home() {
    
    return (
        <>
            <Slider/>
            <Advantage />
            <div className='clothes' data-test-id={`clothes-${gender.women}`}>
                <Clothers 
                    title = {gender.women}
                />  
            </div>
            <div className='clothes' data-test-id={`clothes-${gender.men}`}>
                <Clothers 
                    title = {gender.men}
                />
            </div>
            <Blognewstop />
            <Subscribe />
            <Blognewsbot />
        </>
        
    )
}

export default Home;