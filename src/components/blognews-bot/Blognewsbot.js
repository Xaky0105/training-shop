import { Link } from 'react-router-dom'
import News1 from "../assets/img/blognews1.jpg"
import News2 from "../assets/img/blognews2.jpg"
import News3 from "../assets/img/blognews3.jpg"


function Blognewsbot() {
    return (
        <div className="container">
            <div className="blog_news_bot">
                <div className="blog_news_header">
                    <h2>LATEST FROM BLOG</h2>
                    <Link to='/#'>SEE ALL</Link>
                </div>
                <div className="blog_news_content">
                    <div className="blog_news_content-item">
                        <Link to='/#'><img src={News1} alt=''></img></Link>
                        <article className='article'>
                            <h3>The Easiest Way to Break</h3>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                            <div className='article_footer'>
                                <time className='article_footer_time' dateTime='2032-04-06'>April 06, 2032</time>
                                <Link to='/#' className='read_more'>Read more</Link>
                            </div>
                        </article>
                    </div>
                    <div className="blog_news_content-item">
                        <Link to='/#'><img src={News2} alt=''></img></Link>
                        <article className='article'>
                            <h3>Wedding Season</h3>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                            <div className='article_footer'>
                                <time className='article_footer_time' dateTime='2032-04-06'>April 06, 2032</time>
                                <Link to='/#' className='read_more'>Read more</Link>
                            </div>
                        </article>
                    </div>
                    <div className="blog_news_content-item">
                        <Link to='/#'><img src={News3} alt=''></img></Link>
                        <article className='article'>
                            <h3>Recent Favorites On Repeat</h3>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                            <div className='article_footer'>
                                <time className='article_footer_time' dateTime='2032-04-06'>April 06, 2033</time>
                                <Link to='/#' className='read_more'>Read more</Link>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blognewsbot