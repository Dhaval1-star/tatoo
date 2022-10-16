import React from "react";

const Home = () => {
    return (
        <>
            <header>
                <div className="logo_mobile">
                    <a href="index.html">
                        <img alt="Tattoo Theme - FutureTeam" src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1665830656/1665830574933_nwiqaw.png" />
                        {/* img/logo.png */}
                    </a>
                </div>
                <span className="burger_click_mobile" onclick="openNav2()" />
                <div id="mySidenav2" className="sidenav_mobile">
                    <div className="row_grid menu_burger_mobile rel-grid">
                        <a href="javascript:void(0)" className="closebtn" onclick="closeNav2()">
                            <span className="burger_click_close" onclick="openNav2()" />
                        </a>
                        <ul className="menu main">
                            <li>
                                <a href="index.html">Home</a>
                                <ul>
                                    <li>
                                        <a href="index_2.html">Slider image</a>
                                    </li>
                                    <li>
                                        <a href="index.html">Photo parallaxe</a>
                                    </li>
                                    <li>
                                        <a href="index_3.html">Video background</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="artists.html">Artists</a>
                                <ul>
                                    <li>
                                        <a href="about_us.html">About us</a>
                                    </li>
                                    <li>
                                        <a href="sonya.html">Sonya Amarillos</a>
                                    </li>
                                    <li>
                                        <a href="sebastian.html">Sebastian Artes</a>
                                    </li>
                                    <li>
                                        <a href="mari.html">Mari Artegence</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="gallery.html">Gallery</a>
                                <ul>
                                    <li>
                                        <a href="vertical.html">Vertical</a>
                                    </li>
                                    <li>
                                        <a href="gallery_grid.html">Grid</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                                <ul>
                                    <li>
                                        <a href="blog-left.html">Left sidebar</a>
                                    </li>
                                    <li>
                                        <a href="blog-right.html">Right sidebar</a>
                                    </li>
                                    <li>
                                        <a href="blog-without.html">Without sidebar</a>
                                    </li>
                                    <li>
                                        <a href="blog-image.html">Post image</a>
                                    </li>
                                    <li>
                                        <a href="blog-video.html">Post video</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                                <ul>
                                    <li className="">
                                        <a className="" href="#">
                                            Templates
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="page-small.html">Small</a>
                                            </li>
                                            <li>
                                                <a href="page-fullscreen.html">Fullscreen</a>
                                            </li>
                                            <li>
                                                <a href="page-left.html">Sidebar left</a>
                                            </li>
                                            <li>
                                                <a href="page-right.html">Sidebar right</a>
                                            </li>
                                            <li>
                                                <a href="page-comments.html">Comments</a>
                                            </li>
                                            <li>
                                                <a href="page-archives.html">Post archives</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a className="" href="#">
                                            Headers
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="header-image.html">Image background</a>
                                            </li>
                                            <li>
                                                <a href="header-video.html">Video background</a>
                                            </li>
                                            <li>
                                                <a href="header-slider.html">Slider</a>
                                            </li>
                                            <li>
                                                <a href="header-small.html">Small height</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a className="" href="#">
                                            Menu styles
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="menu-logo_center.html">Logo center</a>
                                            </li>
                                            <li>
                                                <a href="menu-hamburger.html">Hamburger</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a className="" href="#">
                                            Social
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="instagram.html">Instagram</a>
                                            </li>
                                            <li>
                                                <a href="twitter.html">Twitter</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="page-faq.html">Faq</a>
                                    </li>
                                    <li>
                                        <a href="page-contact.html">Contact</a>
                                    </li>
                                    <li>
                                        <a href="page-maintance.html">Maintance</a>
                                    </li>
                                    <li>
                                        <a href="404.html">404</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="elements.html">Elements</a>
                                <ul>
                                    <li>
                                        <a href="parallax.html">Parallax</a>
                                    </li>
                                    <li>
                                        <a href="galleries.html">Image galleries</a>
                                    </li>
                                    <li>
                                        <a href="team.html">Team</a>
                                    </li>
                                    <li>
                                        <a href="socials.html">Socials</a>
                                    </li>
                                    <li>
                                        <a href="buttons.html">Buttons</a>
                                    </li>
                                    <li>
                                        <a href="cta.html">CTA</a>
                                    </li>
                                    <li>
                                        <a href="counteres.html">Counteres</a>
                                    </li>
                                    <li>
                                        <a href="cont_down.html">Count down</a>
                                    </li>
                                    <li>
                                        <a href="notifications.html">Notifications</a>
                                    </li>
                                    <li>
                                        <a href="columns.html">Columns</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="top_menu">
                    <div className="menu_left">
                        <ul className="menu main">
                            <li>
                                <a href="#home">Home</a>
                                {/* <ul>
                                    <li>
                                        <a href="index_2.html">Slider image</a>
                                    </li>
                                    <li>
                                        <a href="index.html">Photo parallaxe</a>
                                    </li>
                                    <li>
                                        <a href="index_3.html">Video background</a>
                                    </li>
                                </ul> */}
                            </li>
                            
                            <li>
                                <a href="#Gallery">Gallery</a>
                                <ul>
                                    {/* <li>
                                        <a href="vertical.html">Vertical</a>
                                    </li>
                                    <li>
                                        <a href="gallery_grid.html">Grid</a>
                                    </li> */}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="logo">
                        <a href="index.html">
                            <img alt="Tattoo Theme - FutureTeam" src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1665830656/1665830574933_nwiqaw.png" />
                        </a>
                    </div>
                    <div className="menu_right">
                        <ul className="menu main">
                            <li>
                                <a href="#blog">Blog</a>
                                <ul>
                                    {/* <li>
                                        <a href="blog-left.html">Left sidebar</a>
                                    </li>
                                    <li>
                                        <a href="blog-right.html">Right sidebar</a>
                                    </li>
                                    <li>
                                        <a href="blog-without.html">Without sidebar</a>
                                    </li>
                                    <li>
                                        <a href="blog-image.html">Post image</a>
                                    </li>
                                    <li>
                                        <a href="blog-video.html">Post video</a>
                                    </li> */}
                                </ul>
                            </li>
                          
                          {/*  */}
                          <li>
                                <a href="#contact">Contact</a>
                                <ul>
                                    {/* <li>
                                        <a href="blog-left.html">Left sidebar</a>
                                    </li>
                                    <li>
                                        <a href="blog-right.html">Right sidebar</a>
                                    </li>
                                    <li>
                                        <a href="blog-without.html">Without sidebar</a>
                                    </li>
                                    <li>
                                        <a href="blog-image.html">Post image</a>
                                    </li>
                                    <li>
                                        <a href="blog-video.html">Post video</a>
                                    </li> */}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div
                className="h_slider h_slider-1"
                style={{ backgroundImage: 'url("img/slide_1.jpg")' }}
                id="home"
            >
                <div id="h_content" className="h_content slide-in">
                    <h1 className="h_title">
                        Don’t be scared,
                        <br />
                        the pain is pleasure, <span className="h_line">really!</span>
                    </h1>
                    <div className="h_text">
                        You Are The Creator Of Your Destiny,
                        <br />
                        And We Are The Creator Of Your Tattoo.
                    </div>
                    <a href="#" className="h_button">
                        Get Your  Tattoo
                    </a>
                </div>
                <div className="arrow bounce" />
            </div>
            {/* END Header */}
            {/* Content */}
            <div className="container  aboutus">
                <div className="container_inner">
                    <div className="row_grid rel-grid">
                        <div className="rectangle-3" />
                        <div className="h_box_l">
                            <div className="box_color" />
                            <div className="box_pic">
                                <div className="check_social">
                                    <p>Check social media</p>
                                    <a href="#" className="soc twitt">
                                        <img alt="Tattoo Theme - FutureTeam" src="https://res.cloudinary.com/dsj9t6adh/image/upload/c_scale,h_35,w_35/v1665832936/1665832851751_uyeuui.png" />
                                    </a>
                                    <a href="#" className="soc twitt">
                                        <img alt="Tattoo Theme - FutureTeam" src="img/facebook.png" />
                                    </a>
                                    <a href="#" className="soc twitt">
                                        <img alt="Tattoo Theme - FutureTeam" src="img/youtube.png" />
                                    </a>
                                </div>
                                <div className="tri1" />
                                <div className="tri2" />
                                <div className="tri3" />
                                <div className="tri4" />
                            </div>
                            <div className="box_r_side">
                                <div className="box_r_figure box">
                                    <h2>About us</h2>
                                    <h1>
                                        We are,
                                        <br />
                                        Who we are...
                                    </h1>
                                </div>
                                <div className="box_r_content">
                                    <p>
                                        We make Unique; Hand-drawn; Personalised tattoos easy to get.
                                        We want to produce head-turning Custom Tattoos you can brag about (and world peace, we’re working on that too).
                                        But we don’t just want to make beautiful tattoos—we want to make beautiful tattoos that leave a mark.

                                    </p>
                                    <p>
                                        That’s why we have designed the Cost of our Tattoos,
                                        the Quality and Tattoo design process to accomplish very specific goals, maximising the long-term impact of your permanent tattoo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
            <div
                className="container artistes"
                style={{
                    backgroundImage: "url(img/bg_artists.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover"
                }}
            >
                <div className="container_inner">
                    <div className="row_grid rel-grid">
                        <div className="nav_artists">
                            <a id="prev">
                                <img alt="Tattoo Theme - FutureTeam" src="img/arr_l.png" />
                            </a>
                            <a id="next">
                                <img alt="Tattoo Theme - FutureTeam" src="img/arr_r.png" />
                            </a>
                        </div>
                        <ul className="artists">
                            <li className="artist">
                                <div
                                    className="featimage"
                                    style={{ backgroundImage: "url(https://res.cloudinary.com/dsj9t6adh/image/upload/c_scale,h_825,w_585/v1665836902/Picsart_22-06-08_22-39-44-195_uuxxcg.jpg)" }}
                                />
                                <div className="check_social_white">
                                    <p>
                                        Check social media
                                        <a href="#" className="soc twitt">
                                            <img alt="Tattoo Theme - FutureTeam" src="img/twitter.png" />
                                        </a>
                                        <a href="#" className="soc twitt">
                                            <img alt="Tattoo Theme - FutureTeam" src="img/facebook.png" />
                                        </a>
                                        <a href="#" className="soc twitt">
                                            <img alt="Tattoo Theme - FutureTeam" src="img/youtube.png" />
                                        </a>
                                    </p>
                                </div>
                                <div className="artist_right">
                                    <div className="rectangle-4" />
                                    <div className="artist_content">
                                        <h2>Artists</h2>
                                        <h1>
                                            Sunny
                                            <br />
                                            Randive
                                        </h1>
                                        <p>
                                            I am Sunny Randive ! experience of 2 years tattoo artist.
                                            if you’ve been pondering for a long time where you could acquire the tattoo design you’ve been trying to visualize in your head?
                                            Have you ever come across a really fascinating and exclusive design on the internet and felt tempted to have it tattooed on your body for the rest of your life?
                                        </p>
                                        {/* <a className="more_gallery" href="#">
                                            See artist gallery
                                        </a> */}
                                    </div>
                                </div>
                            </li>
                            {/* <li className="artist">
                                <div
                                    className="featimage"
                                    style={{ backgroundImage: "url(img/art2.jpg)" }}
                                />
                                <div className="check_social_white">
                                    <p>
                                        Check social media
                                        <a href="#" className="soc twitt">
                                            <img alt="Tattoo Theme - FutureTeam" src="img/twitter.png" />
                                        </a>
                                        <a href="#" className="soc twitt">
                                            <img alt="Tattoo Theme - FutureTeam" src="img/facebook.png" />
                                        </a>
                                        <a href="#" className="soc twitt">
                                            <img alt="Tattoo Theme - FutureTeam" src="img/youtube.png" />
                                        </a>
                                    </p>
                                </div>
                                <div className="artist_right">
                                    <div className="rectangle-4" />
                                    <div className="artist_content">
                                        <h2>Artists</h2>
                                        <h1>
                                            Mari
                                            <br />
                                            Artegence
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                            totam rem aperiam, eaque ipsa quae ab illo inventore. Lorem
                                            ipsum dolor sit amet, consectetur adipisicing elit, sed totam
                                            rem aperiam, eaque ipsa quae ab illo inventore.
                                        </p>
                                        <a className="more_gallery" href="#">
                                            See artist gallery
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="artist">
                                <div
                                    className="featimage"
                                    style={{ backgroundImage: "url(img/art3.jpg)" }}
                                ></div>
                                <div className="check_social_white">
                                    <p>
                                        Check social media
                                        <a href="#" className="soc twitt">
                                            <img alt="Tattoo Theme - FutureTeam" src="img/twitter.png" />
                                        </a>
                                        <a href="#" className="soc twitt">
                                            <img alt="Tattoo Theme - FutureTeam" src="img/facebook.png" />
                                        </a>
                                        <a href="#" className="soc twitt">
                                            <img alt="Tattoo Theme - FutureTeam" src="img/youtube.png" />
                                        </a>
                                    </p>
                                </div>
                                <div className="artist_right">
                                    <div className="rectangle-4" />
                                    <div className="artist_content">
                                        <h2>Artists</h2>
                                        <h1>
                                            Sebastian
                                            <br />
                                            Artes
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                            totam rem aperiam, eaque ipsa quae ab illo inventore. Lorem
                                            ipsum dolor sit amet, consectetur adipisicing elit, sed totam
                                            rem aperiam, eaque ipsa quae ab illo inventore.
                                        </p>
                                        <a className="more_gallery" href="#">
                                            See artist gallery
                                        </a>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
            <div className="container  img_gal" id="Gallery">
                <a href="#" className="h_button-gallery">
                    See all tattoo images
                </a>
                <ul>
                    <li
                        style={{
                            backgroundImage: "url(https://res.cloudinary.com/dsj9t6adh/image/upload/v1665839378/1657004327294-01_1_uechho.jpg)",
                            backgroundSize: "cover"
                        }}
                    >
                        <a href="https://res.cloudinary.com/dsj9t6adh/image/upload/v1665839378/1657004327294-01_1_uechho.jpg" rel="">
                            <span className="plus_cover" />
                        </a>
                    </li>
                    <li
                        style={{
                            backgroundImage: "url(https://res.cloudinary.com/dsj9t6adh/image/upload/v1665840106/WhatsApp_Image_2022-10-15_at_18.51.12_nc2whm.jpg)",
                            backgroundSize: "cover"
                        }}
                    >
                        <a href="https://res.cloudinary.com/dsj9t6adh/image/upload/v1665840106/WhatsApp_Image_2022-10-15_at_18.51.12_nc2whm.jpg" rel="">
                            <span className="plus_cover" />
                        </a>
                    </li>
                    <li
                        style={{
                            backgroundImage: "url(https://res.cloudinary.com/dsj9t6adh/image/upload/v1665839672/1655212243706-01_jid1jj.jpg)",
                            backgroundSize: "cover"
                        }}
                    >
                        <a href="https://res.cloudinary.com/dsj9t6adh/image/upload/v1665839574/IMG_20220516_003011_658_bnqr73.webp" rel="">
                            <span className="plus_cover" />
                        </a>
                    </li>
                    <li
                        style={{
                            backgroundImage: "url(https://res.cloudinary.com/dsj9t6adh/image/upload/v1665839781/IMG-20220915-WA0002_vlznow.jpg)",
                            backgroundSize: "cover"
                        }}
                    >
                        <a href="https://res.cloudinary.com/dsj9t6adh/image/upload/v1665839781/IMG-20220915-WA0002_vlznow.jpg" rel="">
                            <span className="plus_cover" />
                        </a>
                    </li>
                </ul>
                <div className="clearfix" />
            </div>
            {/* <div
                className="container  gradient"
                style={{
                    backgroundImage: 'url("img/cta.jpg")',
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover"
                }}
            >
                <div className="container_inner">
                    <div className="row_grid cta">
                        <h1 className="h_title">
                            Do you like <span className="h_line">this?</span>
                        </h1>
                        <div className="clearfix" />
                        <h6>Buy theme now :)</h6>
                        <a href="#" className="h_button">
                            Buy theme
                        </a>
                    </div>
                </div>
                <div className="clearfix" />
            </div> */}
            <div className="container " style={{ backgroundColor: "#e8e8e8" }} id="blog">
                <div className="container_inner">
                    <div className="row_grid" style={{ paddingLeft: 15, paddingRight: 15 }}>
                        <div className="columns-3 posts">
                            <div className="h-column">
                                <article id={1}>
                                    <div
                                        className="post_image"
                                        style={{ backgroundImage: "url(img/post1.jpg)" }}
                                    >
                                        <a  />
                                    </div>
                                    <div className="post_content">
                                        <p className="post_name">Post</p>
                                        <a >
                                            <h4>pranav dolare</h4>
                                        </a>
                                        <p className="post_date">04.04.2022</p>
                                        <p className="post_text">
                                            Sharp work and perfect retouching & good heart person
                                            Have to must visit
                                            💫💫
                                        </p>
                                        {/* <a className="more_gallery" href="#">
                                            Read more
                                        </a> */}
                                        <div className="clearfix" />
                                    </div>
                                </article>
                            </div>
                            <div className="h-column">
                                <article id={2}>
                                    <div
                                        className="post_image"
                                        style={{ backgroundImage: "url(img/post2.jpg)" }}
                                    >
                                        <a  />
                                    </div>
                                    <div className="post_content">
                                        <p className="post_name">Post</p>
                                        <a >
                                            <h4>Ganesh</h4>
                                        </a>
                                        <p className="post_date">12.05.2022</p>
                                        <p className="post_text">
                                            Best place for all types of tattoo. Permanent as well as temperary tattoos. Do visit nice service and care taken
                                        </p>
                                        {/* <a className="more_gallery" href="#">
                                            Read more
                                        </a> */}
                                        <div className="clearfix" />
                                    </div>
                                </article>
                            </div>
                            <div className="h-column">
                                <article id={3}>
                                    <div
                                        className="post_image"
                                        style={{ backgroundImage: "url(img/post3.jpg)" }}
                                    >
                                        <a  />
                                    </div>
                                    <div className="post_content">
                                        <p className="post_name">Post</p>
                                        <a >
                                            <h4>Sujit Chavan</h4>
                                        </a>
                                        <p className="post_date">10.10.2022</p>
                                        <p className="post_text">
                                            Amazing Tatto great services , do vist for for best and wonderfull Tattoos  great and professional hospitality
                                        </p>
                                        {/* <a className="more_gallery" href="#">
                                            Read more
                                        </a> */}
                                        <div className="clearfix" />
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix" />
            </div>
            <div
                className="container "
                style={{
                    position: "relative",
                    backgroundImage: "url(img/testim.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover"
                }}
            >
                <div className="container_inner">
                    <div className="row_grid" style={{}}>
                        <div className="testimonials">
                            <div
                                className="h-column"
                                style={{ backgroundImage: "url(https://res.cloudinary.com/dsj9t6adh/image/upload/c_scale,h_200,w_200/v1665842517/WhatsApp_Image_2022-10-15_at_19.29.17_x6ps1l.jpg)" }}
                            >
                                <div className="testimonials_content">
                                    <h2>Tattoos and body piercing</h2>
                                    <h1>GET PIERCED AT BEST PIERCING STUDIO !</h1>
                                    <h2>Piercing </h2>   
                                    <p>
                                    Piercing is now regarded as one of the most widespread and well-known fashion trends. This trend of fashion appears to be gaining traction, particularly among millennials. Piercing is an excellent way to express your values, thoughts, and passion. 
                                    The popularity of body piercing is so prevalent in Mumbai that there are now a plethora of tattoo artists and tattoo establishments opened to meet the demands.
                                    </p>
                                    <h2>Tattoo</h2>
                                    <p>
                                    Tattoos are forever – the primary reason you need a tattoo artist who understands your needs and gives you a piece of art you’ll be proud to be showing off.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pattern_testimonials" />
                </div>
                <div className="clearfix" />
            </div>
            <div className="container  calendar">
                <div className="container_inner">
                    <div className="row_grid">
                        <div className="column-1">
                            <h1>If you want book date for tattoo click the button!</h1>
                            <p className="cal_subtitle">
                                Do it by your choice and not by chance
                            </p>
                            <p className="cal_subtitle">
                                <a href="#" className="h_button">
                                    Get Tattoo
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container  columns-3 insta_feeds">
                <div className="h-column" style={{ backgroundImage: "url(img/cal-1.jpg)" }}>
                    <a className="lightboxes" href="img/cal-1.jpg">
                        <span className="plus_cover" />
                    </a>
                    <div className="insta_feeds_inner">
                        <div className="insta_feeds_count">
                            <p className="counter">
                                <span className="insta_feeds_count_no">124</span>
                                <span className="insta_feeds_count_name">Likes</span>
                            </p>
                            <p className="counter">
                                {" "}
                                <span className="insta_feeds_count_no">11</span>
                                <span className="insta_feeds_count_name">Comments</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-column" style={{ backgroundImage: "url(img/cal-2.jpg)" }}>
                    <a className="lightboxes" href="img/cal-2.jpg">
                        <span className="plus_cover" />
                    </a>
                    <div className="insta_feeds_inner">
                        <div className="insta_feeds_count">
                            <p className="counter">
                                <span className="insta_feeds_count_no">124</span>
                                <span className="insta_feeds_count_name">Likes</span>
                            </p>
                            <p className="counter">
                                {" "}
                                <span className="insta_feeds_count_no">11</span>
                                <span className="insta_feeds_count_name">Comments</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-column" style={{ backgroundImage: "url(img/cal-3.jpg)" }}>
                    <a className="lightboxes" href="img/cal-3.jpg">
                        <span className="plus_cover" />
                    </a>
                    <div className="insta_feeds_inner">
                        <div className="insta_feeds_count">
                            <p className="counter">
                                <span className="insta_feeds_count_no">124</span>
                                <span className="insta_feeds_count_name">Likes</span>
                            </p>
                            <p className="counter">
                                {" "}
                                <span className="insta_feeds_count_no">11</span>
                                <span className="insta_feeds_count_name">Comments</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="clearfix" />
            </div>
            <div
                className="container  contact-grid"
                id="contact"
                style={{ backgroundImage: "url(img/dragon.png)" }}
            >
                <div className="container_inner">
                    <div className="row_grid columns-3">
                        <div className="h-column">
                            <div className="contact-1">
                                <h2>Contact</h2>
                                <h4>
                                    The best studio
                                    <br />
                                    in the world
                                </h4>
                                <p className="contact-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    totam rem aperiam, eaque ipsa quae ab illo inventore. Lorem ipsum
                                    dolor sit amet.
                                </p>
                                {/* <a className="more_gallery" href="#">
                                    Read more
                                </a> */}
                                <div className="check_social_white">
                                    <p>
                                        Check social media
                                        <a href="#" className="soc twitt">
                                            <img alt="Tattoo Theme - FutureTeam" src="img/twitter.png" />
                                        </a>
                                        <a href="#" className="soc twitt">
                                            <img alt="Tattoo Theme - FutureTeam" src="img/facebook.png" />
                                        </a>
                                        <a href="#" className="soc twitt">
                                            <img alt="Tattoo Theme - FutureTeam" src="img/youtube.png" />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="h-column">
                            <div className="contact-2">
                                <p className="adress">
                                    02, near Pushpasneha Gardan
                                    <br />
                                    Jawaharlal Housing Society,
                                    <br />
                                    Antrolikar Nagar, Solapur,
                                    <br />
                                    Maharashtra 413004
                                </p>
                                <p className="email">
                                    sunnyrandive305@gmail.com

                                </p>
                                <p className="phone">
                                    8180800084

                                </p>
                                <p className="opens">
                                    Monday - 1:00 - 9:00 pm
                                    <br />
                                    Tuesday - 1:00 - 9:00 pm
                                    <br />
                                    Wednesday - 1:00 - 9:00 pm
                                    <br />
                                    Thursday - 1:00 - 9:00 pm
                                    <br />
                                    Friday - 1:00 - 9:00 pm
                                    <br />
                                    Saturday - 1:00 - 9:00 pm
                                    <br />
                                    Sunday - 12:00- 9:00 pm
                                </p>
                            </div>
                        </div>
                        <div className="h-column">
                            <div className="contact-3">
                                <form action="#" className="contact_form">

                                    <p className="">
                                        Name
                                        <br />
                                        <input
                                            className="field_form"
                                            type="text"
                                            name="firstname"
                                        // placeholder="firstname"
                                        />
                                    </p>
                                    <p className="">
                                        contact
                                        <br />
                                        <input
                                            className="field_form"
                                            type="text"
                                            name="firstname"
                                        // placeholder="contact number"
                                        />
                                    </p>
                                    <p>
                                        message
                                        <br />
                                        <textarea
                                            className="field_form_area field_form"
                                            rows={4}
                                            cols={50}
                                            name="firstname"
                                            // placeholder="Lorem ipsum"
                                            defaultValue={""}
                                        />
                                    </p>
                                    <input
                                        className="sendit h_button"
                                        type="submit"
                                        defaultValue="Submit"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
            <div className="container  map_google ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.0309965646325!2d75.91909671431705!3d17.64869089986277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5db0a7b8f234d%3A0x47e955ee39ae3a7a!2sThe%20Sunny%20Tattoos!5e0!3m2!1sen!2sin!4v1665829904627!5m2!1sen!2sin"
                    width="100%"
                    height={505}
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" />
                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d39528.46120757301!2d-74.01664552794794!3d40.71670435487398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1487355147528"
                    width="100%"
                    height={505}
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen=""
                /> */}
            </div>
        </>

    )
}

export default Home