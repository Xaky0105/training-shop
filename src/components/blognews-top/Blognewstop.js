import Imgleft from './img/leftsidenews.jpg'
import Imgright from './img/rightsidenews.jpg'

function Blognewstop() {
    return (
        <div class="container">
            <div className="blog_news_top">
                <div className="blog_news_top-item">
                    <img src={Imgleft}></img>
                </div>
                <div className="blog_news_top-item">
                    <img src={Imgright}></img>
                </div>
            </div>
        </div>
    )
}

export default Blognewstop