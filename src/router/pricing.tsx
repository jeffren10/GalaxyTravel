import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'



const pricing = () => {  
  return (
    <div>
          <Navbar />
          <HeroImage heading='PRICING.' text='choose your trip'  />
          <PricingCards />
          <Footer />
    </div>
  )
}

export default pricing