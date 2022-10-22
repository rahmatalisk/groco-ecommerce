import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Features from './Components/Features/Features';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import Review from './Components/Review/Review';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Features></Features>
      <Products></Products>
      <Categories></Categories>
      <Review></Review>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
}

export default App;
