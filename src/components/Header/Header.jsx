import React from "react"
import "./Header.css"

export const Header = () => {
  return (
    <section>
        <header className="headerOne">
            <section className="sectionOne">
                <p><img src="/public/assets/telephone-icon.png" alt=""/> (225) 555-0118</p>
                <p><img src="/public/assets/mail-icon.png" alt=""/> michelle.rivera@example.com</p>
            </section>
            <section className="sectionTwo">
                <p>Follow Us and get a chance to win 80% off</p>
            </section>
            <section className="sectionThree">
                <p>Follow Us :</p>
                <div className="socialMediaIcons">
                    <img src="/public/assets/instagram-icon.png" alt="" />
                    <img src="/public/assets/youtube-icon.png" alt="" />
                    <img src="/public/assets/facebook-icon.png" alt="" />
                    <img src="/public/assets/twitter-icon.png" alt="" />

                </div>
            </section>

        </header>
        <header className="headerTwo">
            <section className="logo">
                <h2>Bandage</h2>
            </section>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Shop <img src="/public/assets/dropdown-icon.png" alt=""/></li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                </ul>
            </nav>
            <section className="sectionFour">
                <a href="#" className="sectionFourLink">Login / Register</a>
                <a href="#" className="siteIcons"><img src="/public/assets/search-icon.png" alt="" /></a>
                <a href="#" className="siteIcons"><img src="/public/assets/cart-icon.png" alt="" /></a>
                <a href="#" className="siteIcons"><img src="/public/assets/like-icon.png" alt="" /></a>
            </section>
        </header>
        <body>
            <section className="sectionFive">
                <div className="cardImages">
                    <div className="card cardOne">
                        <img src="/public/assets/cardOne.png" alt=""/>
                        <div className="textOverlay">
                            <p>5 Items</p>
                            <h2>FURNITURE</h2>
                            <a>Read More</a>
                        </div>
                    </div>
                    <div className="card cardTwo">
                        <img src="/public/assets/cardTwo.png" alt=""/>
                        <div className="textOverlay">
                            <p>5 Items</p>
                            <h2>FURNITURE</h2>
                            <a>Read More</a>
                        </div>
                    </div>
                    <div className=" card cardThree">
                        <img src="/public/assets/cardThree.png" alt=""/>
                        <div className="textOverlay">
                            <p>5 Items</p>
                            <h2>FURNITURE</h2>
                            <a>Read More</a>
                        </div>
                    </div>
                    <div className="card cardFour">
                        <img src="/public/assets/cardFour.png" alt=""/>
                        <div className="textOverlay">
                            <p>5 Items</p>
                            <h2>FURNITURE</h2>
                            <a>Read More</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectionSix">
                <h2>Featured Products</h2>
                <h1>BESTSELLER PRODUCTS</h1>
                <p>Problems trying to resolve the conflict between</p>
            
                <div className="productGrid">
                    <div className="productItems">
                        <img src="/public/assets/cardFive.png" alt="" />
                        <h3>Graphic Design</h3>
                        <p>English Department</p>
                        <p className="price"><span className="originalPrice">$16.48</span><span className="discountedPrice"> $6.48</span></p>
                    </div>                    
                    <div className="productItems">
                        <img src="/public/assets/cardSix.png" alt="" />
                        <h3>Graphic Design</h3>
                        <p>English Department</p>
                        <p className="price"><span className="originalPrice">$16.48</span><span className="discountedPrice"> $6.48</span></p>
                    </div>                    
                    <div className="productItems">
                        <img src="/public/assets/cardSeven.png" alt="" />
                        <h3>Graphic Design</h3>
                        <p>English Department</p>
                        <p className="price"><span className="originalPrice">$16.48</span><span className="discountedPrice"> $6.48</span></p>
                    </div>                    
                    <div className="productItems">
                        <img src="/public/assets/cardEight.png" alt="" />
                        <h3>Graphic Design</h3>
                        <p>English Department</p>
                        <p className="price"><span className="originalPrice">$16.48</span><span className="discountedPrice"> $6.48</span></p>
                    </div>                    
                    <div className="productItems">
                        <img src="/public/assets/cardFive.png" alt="" />
                        <h3>Graphic Design</h3>
                        <p>English Department</p>
                        <p className="price"><span className="originalPrice">$16.48</span><span className="discountedPrice"> $6.48</span></p>
                    </div>                  
                </div>
                
                <div className="productGrid">
                    <div className="productItems">
                        <img src="/public/assets/cardSix.png" alt="" />
                        <h3>Graphic Design</h3>
                        <p>English Department</p>
                        <p className="price"><span className="originalPrice">$16.48</span><span className="discountedPrice"> $6.48</span></p>
                    </div>                    
                    <div className="productItems">
                        <img src="/public/assets/cardEleven.png" alt="" />
                        <h3>Graphic Design</h3>
                        <p>English Department</p>
                        <p className="price"><span className="originalPrice">$16.48</span><span className="discountedPrice"> $6.48</span></p>
                    </div>                    
                    <div className="productItems">
                        <img src="/public/assets/cardEight.png" alt="" />
                        <h3>Graphic Design</h3>
                        <p>English Department</p>
                        <p className="price"><span className="originalPrice">$16.48</span><span className="discountedPrice"> $6.48</span></p>
                    </div>                    
                    <div className="productItems">
                        <img src="/public/assets/cardTweleve.png" alt="" />
                        <h3>Graphic Design</h3>
                        <p>English Department</p>
                        <p className="price"><span className="originalPrice">$16.48</span><span className="discountedPrice"> $6.48</span></p>
                    </div>                   
                    <div className="productItems">
                        <img src="/public/assets/cardThirteen.png" alt="" />
                        <h3>Graphic Design</h3>
                        <p>English Department</p>
                        <p className="price"><span className="originalPrice">$16.48</span><span className="discountedPrice"> $6.48</span></p>
                    </div>                    
                </div>
            </section>
            <section className="sectionSix">
                <h2>Featured Products</h2>
                <h1>BESTSELLER PRODUCTS</h1>
                <p>Problems trying to resolve the conflict between</p>
                <button>LOAD MORE PRODUCTS</button>
            </section>
            
            <section className="sectionSeven">
                <h2>Featured Products</h2>
                <h1>THE BEST SERVICES</h1>
                <p>Problems trying to resolve the conflict between</p>
                <div className="content">
                    <div className="column">
                        <img src="/public/assets/easyWin.png" alt="" />
                        <h2>Easy Wins</h2>
                        <p>Get your best looking smile now!</p>
                    </div>    
                    <div className="column">
                        <img src="/public/assets/concrete.png" alt="" />
                        <h2>Concrete</h2>
                        <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
                    </div>
                    <div className="column">
                        <img src="/public/assets/hackGrowth.png" alt="" />
                        <h2>Hack Growth</h2>
                        <p>Overcame any hurdle or any other problem.</p>
                    </div>
                </div>
            </section>
        </body>
    </section>
  )
}


export default Header;