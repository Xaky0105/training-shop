import News1 from './img/blognews1.jpg'
import News2 from './img/blognews2.jpg'
import News3 from './img/blognews3.jpg'

function Blognewsbot() {
    return (
        <div className="container">
            <div className="blog_news_bot">
                <div className="blog_news_header">
                    <h2>LATEST FROM BLOG</h2>
                    <a href='/#'>SEE ALL</a>
                </div>
                <div className="blog_news_content">
                    <div className="blog_news_content-item">
                        <a href='/#'><img src={News1} alt=''></img></a>
                        <article className='article'>
                            <h3>The Easiest Way to Break</h3>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                            <div className='article_footer'>
                                <time className='article_footer_time' dateTime='2032-04-06'>April 06, 2032</time>
                                <a className='read_more' href='/#'>Read more</a>
                            </div>
                        </article>
                    </div>
                    <div className="blog_news_content-item">
                        <a href="/#"><img src={News2} alt=''></img></a>
                        <article className='article'>
                            <h3>Wedding Season</h3>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                            <div className='article_footer'>
                                <time className='article_footer_time' dateTime='2032-04-06'>April 06, 2032</time>
                                <a className='read_more' href='/#'>Read more</a>
                            </div>
                        </article>
                    </div>
                    <div className="blog_news_content-item">
                        <a href="/#"><img src={News3} alt=''></img></a>
                        <article className='article'>
                            <h3>Recent Favorites On Repeat</h3>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                            <div className='article_footer'>
                                <time className='article_footer_time' dateTime='2032-04-06'>April 06, 2032</time>
                                <a className='read_more' href='/#'>Read more</a>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blognewsbot