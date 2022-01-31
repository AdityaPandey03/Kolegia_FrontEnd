import  Navbar  from './navbar/Navbar';
import  Header  from './header/Header';
import  Feature  from './feature/Feature';
import  Motive  from './motive/Motive';
import  Review  from './review/Review';
import  Footer  from './footer/Footer'


const Homepage = () => {
    return ( 
        <div className="homepage-cont">
            <Navbar/>
            <Header/>
            <Feature/>
            <Motive/>
            <Review/>
            <Footer/>
        </div>
     );
}
 
export default Homepage;