import Slider from '../components/slider/Slider'
import Advantage from '../components/advantage/Advantage';
import Blognewstop from '../components/blognews-top/Blognewstop';
import Blognewsbot from '../components/blognews-bot/Blognewsbot';
import Clothers from '../components/clothes/Clothers';
import Subscribe from '../components/subscribe/Subscribe';


function Home() {
    
    return (
        <>
            <Slider/>
            <Advantage />
            <div className='clothes' data-test-id={`clothes-women`}>
                <Clothers 
                    title = 'women`s'
                    productType = 'women'
                    
                />  
            </div>
            <div className='clothes' data-test-id={`clothes-men`}>
                <Clothers 
                    title = 'men`s'
                    productType = 'men'
                    
                />
            </div>
            <Blognewstop />
            <Subscribe />
            <Blognewsbot />
        </>
        
    )
}

export default Home;