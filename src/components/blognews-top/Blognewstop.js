import Imgleft from './img/leftsidenews.jpg'
import Imgright from './img/rightsidenews.jpg'

function Blognewstop() {
    return (
        <div className="container">
            <div className="blog_news_top">
                <a href='/#' className="blog_news_top-item">
                    <div className='blog_news_top-title'>
                        <p>New Season</p>
                        <span>lookbook collection</span>
                    </div>
                    <img src={Imgleft} alt=''></img>
                </a>
                <a href='/#' className="blog_news_top-item">
                    <div className='blog_news_top-title'>
                        <p>Sale</p>
                        <span>Get UP to <span className='color-red'>50% off</span></span>
                    </div>
                    <img src={Imgright} alt=''></img>
                </a>
            </div>
        </div>
    )
}

export default Blognewstop