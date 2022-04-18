import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Reviews from './Pages/Home/Reviews/Reviews';
import Services from './Pages/Home/Services/Services';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Checkout from './Pages/Checkout/Checkout';
import Register from './Pages/Login/Register/Register';
import useServices from './hooks/useServices';
import useReviews from './hooks/useReviews';
import { useEffect, useState } from 'react';
import Booking from './Pages/Booking/Booking';

function App() {
  const [services] = useServices();
  const [reviews] = useReviews();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<div id='services' className='container my-5'>
          <h1 className='text-center text-primary my-5'>My Services: ({services.length}/{services.length})</h1>
          <div className='row row-cols-1 row-cols-md-3 g-4'>
            {services.map(service => <Services
              key={service.id}
              service={service}></Services>)}
          </div>
        </div>}></Route>
        <Route path="/reviews" element={<div id='reviews' className='container my-5'>
          <h1 className='text-center text-primary my-5'>Customer Reviews: ({reviews.length}/{reviews.length})</h1>
          <div className='row row-cols-1 row-cols-md-3 g-4'>
            {reviews.map(review => <Reviews
              key={review.id}
              review={review}></Reviews>)}
          </div>
        </div>}></Route>
        <Route path="/blogs" element={blogs.map(blog =>
          <Blogs
            key={blog.id}
            blog={blog}>
          </Blogs>)}>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout-:serviceId" element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        <Route path="/booking" element={<Booking></Booking>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
