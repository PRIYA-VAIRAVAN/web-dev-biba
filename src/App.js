import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';

function App() {
  const portfolioLinks = [
    {
      
      
    },
    {
      
    },
    {
      
    },
    {
      
    },
    {
      
    },
    {
      
    },
    {
      
    }
  ]

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <ul className="navbar-nav text-uppercase ml-auto">
         <li className="nav-item">
       
           <a className="nav-link js-scroll-trigger" href="#services"><i className="fa fa-address-book-o"></i> OFFICIAL STORE</a>
         </li>
         <li className="nav-item">
       
           <a className="nav-link js-scroll-trigger" href="#services"><i className="fa fa-lock"></i> SECURE PAYMENT</a>
         </li>
         <li className="nav-item">
       
           <a className="nav-link js-scroll-trigger" href="#services"><i className="fa fa-ship"></i> FREE SHIPPING</a>
         </li>
         
      </ul>
      
      <a className="nav-link js-scroll-trigger" href="#services">REGISTER AND GET RS.300 OFF</a>
      
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
         <a className="nav-link js-scroll-trigger" href="#services"><i className="fa fa-phone">|</i></a>
         <a className="nav-link js-scroll-trigger" href="#services"><i className="fa fa-envelope">|</i></a>
          <li className="nav-item">
            
            <a className="nav-link js-scroll-trigger" href="#services">Franchise</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Store locator</a>
          </li>
          <li className="nav-item">
            
            <a className="nav-link js-scroll-trigger" href="#about">IND<i className="fa fa-sort-desc"></i></a>
            
          </li>          
        </ul>  
        
         
        <ul className="navbar-nav text-uppercase ml-auto">
         <li className="nav-item">
       
           <a className="nav-link js-scroll-trigger" href="#services">New Arrivals</a>
         </li>
         <li className="nav-item">
       
           <a className="nav-link js-scroll-trigger" href="#services">Suit sets </a>
         </li>
         <li className="nav-item">
       
           <a className="nav-link js-scroll-trigger" href="#services"> Mix and match</a>
         </li>
         <li className="nav-item">
       
           <a className="nav-link js-scroll-trigger" href="#services">Girls</a>
         </li>
           <li className="nav-item">
       
              <a className="nav-link js-scroll-trigger" href="#services">Biba by Anju Modi</a>
            </li>
            <li className="nav-item">
       
               <a className="nav-link js-scroll-trigger" href="#services">Sleep wear</a>
            </li>
            <li className="nav-item">
       
               <a className="nav-link js-scroll-trigger" href="#services">Easy switch</a>
            </li>
            <li className="nav-item ">
       
               <a className="nav-link js-scroll-trigger" href="#services">foot wear</a>
            </li>
            <li className="nav-item">
       
               <a className="nav-link js-scroll-trigger" href="#services"><p></p>Bottom wear</a>
            </li>
            <li className="nav-item">
       
               <a className="nav-link js-scroll-trigger" href="#services">jewellery</a>
            </li>
            
      </ul>
      </div> 
         
    </div>    
  </nav>
  <hr></hr>
  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <img src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article3180.jpg" alt="Responsive images" class="img-fluid"></img>
<p></p>
                <input type="text" placeholder="search.."></input>
                          <button type="submit">                 Login</button>
                
                <button type="submit">Register</button>  <i className="fa fa-shopping-bag"></i>
                
        <div className="intro-lead-in">Welcome</div>
        <div className="intro-heading text-uppercase">Happy shopping!</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Click me</a>
        
      </div>
    </div>
    
  </header>
 <header>
  <div className="">
  <h1>The Spring Summer Edit</h1>
      <div className="carousel-inner">
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/suit4.jpg"alt="first"></img>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/kurta4.jpg"alt="first"></img>
         <img src="  https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/dress4.jpg"alt="first"></img>
         </div>
      <div className="carousel-inner">
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/anar4.jpg"alt="first" ></img>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/bottom4.jpg"alt="first"></img>
      </div>
      <div className="carousel-inner">
         <h1>Newly Introduced</h1>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/maskglass.jpg"alt="first"></img>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/athleisure.jpg"alt="first"></img>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/girlsb.jpg"alt="first"></img>
      </div>
      <div className="carousel-inner">
         
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/rts.jpg"alt="first"></img>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/footwear.jpg"alt="first"></img>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/jewellery.jpg"alt="first"></img>
      </div>
      <div className="carousel-inner">
         <h1>A Perfect Wardrobe guide</h1>
         <p>Let us help you to pick a perfect style for every moment in advance</p>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/everyday-casuals.jpg"alt="first"></img>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/chic.jpg"alt="first"></img>
         
      </div>
      <div className="carousel-inner">
      <h1></h1>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/occasion.jpg"alt="first"></img>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/work.jpg"alt="first"></img>
         
      </div>
      <div className="carousel-inner">
         <h1>Upto 50% off</h1>
         
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/50suit.jpg"alt="first"></img>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/50kurta.jpg"alt="first"></img>
         
      </div>
      <div className="carousel-inner">
         
           <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/50anar.jpg"alt="first"></img>
           
           <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/50dress.jpg"alt="first"></img>
          
      </div>
      <div className="carousel-inner">
       <h1></h1>
           <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/fusion.jpg"alt="first"></img>
           <h1></h1>
           <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/anju.jpg"alt="first"></img>
           <h1></h1>
           <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/girls.jpg"alt="first"></img>
           <h1></h1>
           <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/50rts.jpg"alt="first"></img>
          
      </div>
      <div className="carousel-inner">
         <h1>COMPLEMENT YOUR LOOKS</h1>
       
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-1-21/footwear.jpg"alt="first"></img>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-1-21/jewellery.jpg"alt="first"></img>
         <h1></h1>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-1-21/wedding.jpg"alt="first"></img>
         <h1></h1>
         <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-1-21/lehenga.jpg"alt="first"></img>
      </div>
      <hr></hr>
      <div className="carousel-inner">
         <h1>SEASON'S BESTSELLERS</h1>
       
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAC0tLTExMQ4ODi6urrp6en4+PjPz8/a2trX19dOTk4dHR339/dqamqxsbFDQ0MJCQklJSWoqKhkZGTv7++ZmZmRkZEtLS2Dg4N6enqgoKCLi4t0dHRvb28UFBRbW1tGRkYxMTERERFdXV0LAr6hAAAC0UlEQVR4nO3dWXIaQRCEYZph3wcQIMACId//jCb84BAS1U8td0Tm/52gMnoWmKmu6XQAAAAAAAAAAAAAAAAAAAAA1DBebpbNsHYVP6e7urRt+7E+imYcLNI/o9rF/ITxNX3Sr11OeZOHgOkgt4rjaXq0HdQuqazJ14DpsqxdU1HfA6Z0fKldVUHPAqbpuHZZ5YxWTwKmns615nlAoYRBwDSd1K6skFHveUCZK00YsN3ULq2MJjhEU7pq3PGbaAXTrFu7tiKaQxQwnWrXVkSzDgPuatdWRByw3deurYh+HFBkBWdxQImHGP34IrNXD3iuXVsR/fAQTa+1ayuiH+bTD3isXVsRXfUVzAQ8z2sXV8LyEq+gRMBNfBU9agT8CAMuJG70m/gcXNSurYhMwG3t2oo4ZVZQ4hzMBHyTeK62ywSUeOq0a+NDVCNgvIJThYDzfRzwqnAO5gJO5QMqHKLDc+YQVXgNOpcP+JoJqPCKMBfwXSHgyzEOuFI4RK0D9iQC/sqcgwqdFoPMCmoEzKzgqqldXQG5gD2JgIs44E0i4NY44Foi4O844EGhg3v4ljlEFQLmHvxKrGBn8B6fgxq9XKfw7YtId3p8Fs40An7fOSG2gnFH5VqkJfae8PY84bV2YcXor6H+eah/LdW/Hxr8ptH/XWrw30L//6HBf3yD5zQGz9oMnpcaPPM2eG9h8O7J4P2hwTvge8RMo4JIRPleDIN+GoOeKIO+NoPeRIP+UouI8n3eHYNefYP9FgZ7Zgz2PRnsXTPYf2iwh9RgH7DBXm6D/fgGMxUM5mIYzDYxmE9jMGPIYE6Uwawvg3ltBjP3DOYmGsy+NJhfajCD1mCOsMEsaIN53gYz2Q3m6ht8G8Hg+xYG3ygx+M6MwbeC7qv40Byu0Q3+xeBTi7/O3f5RM/373bWbyh/gZwbdzVLwDAQAAAAAAAAAAAAAAAAAAAD+sz+lpSk00AqR+QAAAABJRU5ErkJggg=="alt="first"></img>
        
         <img src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=300,height=450,quality=75,format=auto,fit=cover,g=top/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/tudor16227aw20blk_1.jpg"alt="first"></img>
         
         <img src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=300,height=450,quality=75,format=auto,fit=cover,g=top/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/tudor16439aw20blk_4_.jpg"alt="first"></img>
         <p className="carousel-caption">black cotton flax straight kurtha</p>
         <img src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=300,height=450,quality=75,format=auto,fit=cover,g=top/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/tudor16222aw20blk_1.jpg"alt="first"></img>
         <img src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=300,height=450,quality=75,format=auto,fit=cover,g=top/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/skdfestive6892aw20bred_1.jpg"alt="first"></img>
         <img src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=300,height=450,quality=75,format=auto,fit=cover,g=top/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/skdkalamkar6935aw20red-bs1.jpg"alt="first"></img>
         <img src="data:image/jpeg;base64,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"alt="first"></img>
      </div>
      <hr></hr>
      <div className="carousel-inner">
         <h1>DESIGNER'S PICK</h1>
       
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAC0tLTExMQ4ODi6urrp6en4+PjPz8/a2trX19dOTk4dHR339/dqamqxsbFDQ0MJCQklJSWoqKhkZGTv7++ZmZmRkZEtLS2Dg4N6enqgoKCLi4t0dHRvb28UFBRbW1tGRkYxMTERERFdXV0LAr6hAAAC0UlEQVR4nO3dWXIaQRCEYZph3wcQIMACId//jCb84BAS1U8td0Tm/52gMnoWmKmu6XQAAAAAAAAAAAAAAAAAAAAA1DBebpbNsHYVP6e7urRt+7E+imYcLNI/o9rF/ITxNX3Sr11OeZOHgOkgt4rjaXq0HdQuqazJ14DpsqxdU1HfA6Z0fKldVUHPAqbpuHZZ5YxWTwKmns615nlAoYRBwDSd1K6skFHveUCZK00YsN3ULq2MJjhEU7pq3PGbaAXTrFu7tiKaQxQwnWrXVkSzDgPuatdWRByw3deurYh+HFBkBWdxQImHGP34IrNXD3iuXVsR/fAQTa+1ayuiH+bTD3isXVsRXfUVzAQ8z2sXV8LyEq+gRMBNfBU9agT8CAMuJG70m/gcXNSurYhMwG3t2oo4ZVZQ4hzMBHyTeK62ywSUeOq0a+NDVCNgvIJThYDzfRzwqnAO5gJO5QMqHKLDc+YQVXgNOpcP+JoJqPCKMBfwXSHgyzEOuFI4RK0D9iQC/sqcgwqdFoPMCmoEzKzgqqldXQG5gD2JgIs44E0i4NY44Foi4O844EGhg3v4ljlEFQLmHvxKrGBn8B6fgxq9XKfw7YtId3p8Fs40An7fOSG2gnFH5VqkJfae8PY84bV2YcXor6H+eah/LdW/Hxr8ptH/XWrw30L//6HBf3yD5zQGz9oMnpcaPPM2eG9h8O7J4P2hwTvge8RMo4JIRPleDIN+GoOeKIO+NoPeRIP+UouI8n3eHYNefYP9FgZ7Zgz2PRnsXTPYf2iwh9RgH7DBXm6D/fgGMxUM5mIYzDYxmE9jMGPIYE6Uwawvg3ltBjP3DOYmGsy+NJhfajCD1mCOsMEsaIN53gYz2Q3m6ht8G8Hg+xYG3ygx+M6MwbeC7qv40Byu0Q3+xeBTi7/O3f5RM/373bWbyh/gZwbdzVLwDAQAAAAAAAAAAAAAAAAAAAD+sz+lpSk00AqR+QAAAABJRU5ErkJggg=="alt="first"></img>
        
         <img src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=300,height=450,quality=75,format=auto,fit=cover,g=top/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/skdshimmer7026aw20rblu_1.jpg"alt="first"></img>
         
         <img src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=300,height=450,quality=75,format=auto,fit=cover,g=top/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/skdshimmer7029aw20wne-1_.jpg"alt="first"></img>
         
         <img src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=300,height=450,quality=75,format=auto,fit=cover,g=top/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/skdmidnight6852aw20ryblu_1.jpg"alt="first"></img>
         <img src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=300,height=450,quality=75,format=auto,fit=cover,g=top/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/skdmidnight6855aw20nyblu_1.jpg"alt="first"></img>
         <img src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=300,height=450,quality=75,format=auto,fit=cover,g=top/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/skd7077aw20red-1.jpg"alt="first"></img>
         <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0SDQ0REQ0NEA8RDQ0NEBANDQ8NDRANFREWFhUTExMkHS0gGCYlJxYYLTEhKSkrLi4uFys/RD8uNzQtOisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQgGBwMEBQL/xAA1EAEAAgECBAQEBAQHAQAAAAAAAQIDBBEFByFBBhIxURMyQmEicaHBI2KBsRRSU5Gy8PEI/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AN4BIAAAAAAAAAAAbgAAAAAAAAAAAAAACQARIAAAAAAAAAAAAAAAAAAAAAAAAAAAJABEgAAAAAAAAAAAAAAAAAAAAAAAAAAAkAEAAAAAAAAAAD5yZK1rNrWrWsRvNrTFaxH3ns4tLrMOWJtjy4skRO0ziyVyRE+28SDnAAAAAAAAAAAAAAABIAIAAAAAAAAABXL/AOgPEOpycUnRee9dNp8eKfhxMxTJlvWLze0fVtvERv6bT7y194c8QavQ6mmo0uW2PJWesdZx5Kd6ZK/VE/8Am07N+84eW1uIR/jNLt/jMePyWxTtFdRjrvMRE9rRvO3v6dFcc2K1LWpatq3raaWreJratonaazHrEx7Atly+8eaTiuDeu2LU0rHx9Na29q/z0n6q/ft3++WqUcL4jn02fHnwZb4s2O3mpek7Wif3ie8T0mJWZ5ZcyMHE8cYsvkw6+ld74t9qZoiOt8P719Y+8dQZ8AAAAAAAAAAAAACQAQEgAAAAAAAADXXM/ljg4lW2o08Uw6+tfm+XHqYiOlcvtPtb+k9NttigKTcQ0ObBmyYc2O+LNjtNL0vG1q2/737uPTajJjyUyY73x5KWi9L0tNb1tE7xMT2Wp5jcvNLxXF5umHWY6zGLURHrH+nlj6q/rHbvE1i49wXVaPU5NPqcVseWk9Yn0tXtas/VE9pBYDlVzTproppNZamPXREVpk6Ux6r8o9K396+k9vaNoqP1tMTExMxMTExMTtMTHpMS3zyo5tfFnHouI5IjL0pg1d52jL2imae1va3fv162Dc4AAAAAAAAAAAJABEhIAAAAAAAAAAAxrx14K0fFNN8LNHly03nBqKRHxcNp/wCVZ717/adpjJQFOPFvhfWcO1VsGpx7T1nHkrvOLNj3+elu/wCXrHd4i5Pivwzo+IaW2n1OPzVnrS9doy4sm3S+O3af0nvvCrvjrwRrOF6j4eaPPhvM/B1FKzGLLX2/lt71/vHUGfcqebU4fh6LiOSbYelMGrvO9sPaKZZ719rete/T5d+UtExFomJiYiYmJ3iYn0mJUebd5J8wc+LU6fhuotOTTZbfC09rTvfBln5axPesz027TP5gsKAAAAAAAAACQARIAAAAAAAAAAAAPJ8TeItHw/S31GqyxSkfhrWOuTJk7Ux17zP6es7RuDs8Y4rptJp8mo1GWuLDjrva9v0iI9Zme0R1lWTmXzG1HFMnkrFsOhx382LDMx572jeIyZZj1nr6ekb9/Weh4/8AHWr4rqPNk/h6ekz8DT1tvSkf5rT9Vvef9tmKANlclfBep1XENPrLUmmj0uaMs5LRtGXNTrXHT32naZn0iI99k8reV2XiFqanVRfFw+J3j1rl1Ux9NPavvf8ApHXeYshotJixYseLFjpjxY6xSlKVitK1jtEA5wAAAAAAAAASACAAAAAAAAAAAYfzC8faThWD8Uxl1d6zOHT1nrPbz5J+mv377dO+wd7xr4x0XDNN8XUX3yW80YcFJj4ua8dqx2iOm9p6Rv7zETV3xj4r1nEtVOfUX6RvXFirv8LDjmflpH959ZdPxDx3Va7VZNTqcs5Mt+ntSlI9KUr9MR7fvu86I7QCG3+VHKe2onHreIY5ppul8Ont+G+o7xfJH009o9bfl83r8p+Uvl+HreJYvxdL4NJkj5e8Xz19/anbv16RuwHzjpWK1rWsVrWIrWtYitYrEbRER2h9AAAAAAAAAAACQAQAAAAAAAAADAuaPMXFwvFGLHFcuvy0m2Ok/JipvMRkyfbeJ2jvt2Vk4nxDPqM+TPny3y5slvPfJed7Wn9ojtEdIiGwef3Ds+Pjds14n4WowYbYbfT+CkUvSJ94mN9v5492veHaDPqM2PBgxXy5slopSlI3ta37fefSIgHDhxXvetKVte97VpWtKza9rzO0VrEdZmfZYnlTyqpo4x6zXUrfW9L48U7Wx6X2me1r/f0jt7vU5Ycs8HDaVz54pm19q9b7b48ETHWmL7+9u/5euwgAAAAAAAAAAAAAASACAAAAAAAAAAdPivCtNqcU4tTgxZ8Uzv5M1IvWJ7THtP3h0+B+FuG6ObW0uiwYLWja16U/iTX2889dvtu9gAAAAAAAAAAAAAAAABIAIkJAAAAAAAAAAAAAAAAAAAAAAAAAAASACJCQAAAAAAAAAAAAAAAAAAAAAAAAAAEgAiQAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q=="alt="first"></img>
      </div>
      <div className="carousel-inner">
        <h1 className="text-left">Biba Indian Wear – Best Indian Ethnic Wear Dresses Online For women</h1>
        <p className="text-left">When it comes to ethnic wear for women, the only brand that occurs to our mind is Biba. The first-ever brand came with the idea of ready-made ethnic wear dresses for women. The brand is in the retail business of ethnic dresses for a very long time with all India reach. Ethnic wear for women design by Biba does not only present impeccable designing but also shows the evolvement of Indian ethnic dresses in its collection. The brand follows the two seasons of fashion for its launch of ethnic dresses for women.</p>
        <h1 className="text-left">Biba Spring Summer Collection</h1> 
        <p className="text-left">Biba usually launches its spring-summer collection of Indian ethnic wear for women at the beginning of the spring season in India. The Range covers summer ethnic dresses for women including ethnic Kurtis, ethnic suit sets, bottom wear, dupattas, ethnic kurtas, and dresses. The summer ethnic collection by Biba is known for its very summer-friendly prints and silhouettes. The fabric selection of the brand is a very thoughtful process. In the summer collection of ethnic wear for women Biba mostly uses cotton or cotton blends, as a rise in temperature is always expected. Ethnic wear Kurtis is one of the main highlights of every collection.</p>
        <h1 className="text-left">Biba Autumn Winter Collection</h1>
        <p className="text-left">The launch takes place before the festive season in India so that customers can buy Indian ethnic wear before the festivities start. This collection covers the festive perfect ethnic Indian wear for women including, ethnic Kurtis, kurtas, festive ethnic suit sets, wedding suit sets, ethnic dresses, and jewelry.</p>
        <h1 className="text-left">Indian Ethnic Wear For Women – Categories And Work</h1>
        <p className="text-left">BIBA ethnic collection can be segregated into two major categories. One is Salwar kameez Set and the second is a mix and match collection. The collection is inspired by the exquisite flowers of the world and possesses the freshness that can make anyone fall in love with it. Filled with floral designs and combined with classic styles, the new collection of ethnic Indian wear for women by BIBA is a must-explore edit of this season. If your love for ethnic dresses or outfits is eternal, then you should not give this collection a miss.
        The Salwar Kameez collection of this season has covered all the trendy patterns and color-combination, even designing got a contemporary touch too. You can find an Anarkali suit set having slim pants and an asymmetric suit having palazzos beneath and straight suit-pants combo in the new arrivals.
        The mix & match collection of ethnic wear for women by BIBA reflects its modern approach towards fashion. It is visible in the latest launch too. The trendy high-low kurtas, asymmetric kurtas, collared office wear kurtas, ombre kurtas, straight kurtas, A-line kurtas are a few of the examples and if you look at the pattern, you will find variety in that too. From tiny floral print to broad patches, from festive gold foil print to wonderful vintage, and from classic stripes to intricate embroidery, every pattern is there in a new collection to impress you.
        Not only Indian wear for women but BIBA’s new collection of ethnic dresses for girls is also impressive. Filled with beautiful colors, combinations, eye-pleasing prints, intricate embroidery, and thread work, the new collection of ethnic wear for women will definitely help you to get that perfect ethnic dress for your little fashionista.
        So, if you are looking for something chic yet trendy to wear this season that too without losing comfort then BIBA is the right platform to look for. BIBA.in offers you the latest in-trend ethnic Indian wear for women loved and praised by everyone.</p>
        <h1 className="text-left">Trendy Indian Ethnic Wear Online for Women</h1>
        <p className="text-left">When it comes to ethnic wear for ladies, there are very few names that appear to our mind and BIBA is one of them. One of the dominant players in the women's ethnic wear segment in India, the brand provides its customer with trendy Indian ethnic wear online at a much-budgeted price.
        The brand owns a diverse range of ethnic wear for women which includes salwar suit set, ready-made, and easy-stitch both for women in a variety of colors and combinations. It has salwar-kameez sets that are very traditional and classy; it has suit-pants set, suit-skirt set, Patiala-suit set, floor-length suit set with churidar, and many other combinations. When it comes to ethnic wear for women only BIBA not only has suit sets but also offers contemporary kurtas for women with numerous styling options. At BIBA you will find plenty of styles in ethnic Kurtis, kurta, bottom wear, and dupatta to add to your closet. With a huge collection of ethnic dresses, BIBA makes it easy for you to choose garments as per the requirement of the event and your mood. One can say Biba has ethnic for women for every occasion.</p>
        <h1 className="text-left">Shopping Ethnic Dresses For Women Online – Ethnic Wear Online Shopping</h1>
        <p className="text-left">Online shopping is the best way to save you energy and when it comes to shopping Indian wear online. Biba is one of the best ethnic wear online shopping websites. It gives you the space to explore and buy ethnic wear online. It is the platform that provides you the facility to discover the latest styles of Indian wear online. It is the place where you can enjoy ethnic shopping online in India.
        BIBA.in is the one-stop online destination for Indian ethnic wear shopping for women in India. The latest collection offers you a vast range of ethnic dresses online along with jewelry. Indian ethnic wear online shopping with BIBA is easy and convenient. The website is user-friendly and categories are well defined. You can reach out to the latest ethnic collection here and explore the whole lot without putting in much effort. You can get your hands on ethnic suits online and also explore a wide range of ethnic gowns online in India. Suit sets for girls are also available online at Biba. in. The whole collection gives a fresh vibe and assures that everyone praises you for your trendy choice when you step-out flaunting the style you bought.
        You can buy ethnic wear online any time at Biba.in. You can also enjoy great offers by exploring online sales, which the brand throws on every season end. If you are looking for the best ethnic wear for women online, that Biba is the perfect platform.</p>
        <h1 className="text-left">Role of Ethnic Dresses In Indian Wear</h1>
        <p className="text-left"> India is the country where you will find diversity in culture. Indian loves to celebrate and are attached to their traditional roots. Hence the role of ethnic dresses is very important in Indian wear. Whenever there is a celebration we love to flaunt our ethnic side. Above that 90% of women in India prefer to wear Indian wear over western wear. Hence ethnic dresses play a vital role in the Indian wear Market. Indian wear ethnic dresses are considered to attach with festivities. Ethnic dresses come with intricate detailing.</p>
        <p className="text-left">The reason behind, Indian ethnic dresses seem quite comfortable. Indian kurtas in A-line and straight fits are the best for everyday use and can be considered as best ethnic for women. Not to forget there is no better name than Biba when it comes to ethnic wear for women.</p>
        <p className="text-left">The brand not only serves in India but provides delivery of Indian dresses online to the USA and to other countries as well. Foreign customers can locate the Biba store by searching on google by typing Indian clothing store near me. Even customers can get Indian clothes online in the UK. For Indians who are living outside India, it is tough to find Indian ethnic clothing like lehenga choli in Uk is a sweet surprise only or shopping for Indian party wear in the UK is not something you can easily get to do, because outside India you can hardly find an Indian store where you can buy ready-made salwar kameez in the UK. The good news is Biba’s online platform gives you access to ready-made Indian Dresses in Uk Too.</p>
        </div>
   </div>
 </header>
  
  

  
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

 

  
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase"></h2>
          <h3 className="text-left">Top categories</h3>
          <p className="text-left">Anarkali suits</p>
          <p className="text-left">Salwar suit sets</p>
          <p className="text-left">Girls wear</p>
          <p className="text-left">Palazzo pants</p>
          <p className="text-left">Jewellery For women </p>
          
        </div>
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase"></h2>
          <h3 className="text-right">Top categories</h3>
          <p className="text-right">Anarkali suits</p>
          <p className="text-right">Salwar suit sets</p>
          <p className="text-right">Girls wear</p>
          <p className="text-right">Palazzo pants</p>
          <p className="text-right">Jewellery For women </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            
            <h4></h4>
            <p className="text-right">follow us</p>
            <ul className="list-inline social-buttons">
              
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            
            <h4></h4>
            <p className="text-muted">Customer service</p>
            <ul className="list-inline social-buttons">
              
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            
            <h4></h4>
            <p className="text-muted">follow us</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/something">
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/something">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/something">
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted"></p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="/something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="/something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="/something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="/something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="text-left">Copyright</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="/something"></a>
            </li>
            <li className="list-inline-item">
              <a href="/something"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;