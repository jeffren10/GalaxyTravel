import './footerStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
          <div className='left'>
              <div className='location'>
                <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} /> 
              <div>
                <p>123 Acme St.</p>
                <h4>Houston, Tx</h4>
              </div>
          </div> 

          <div className='Phone'>
            <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} /> 1-800-123-1234</h4>
            </div>  
            <div className='Email'>
              <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}} />trip@galaxy.com </h4>
            </div>
        </div>
        <div className='right'>
            <h4>About the company</h4>
            <p>"Loren ipsum dolor sit amet, consectetur
              adipiscing elit, sed do siusmod tempor
              incididunt ut `labore et dolore magna
              aliqua. ut enin ad minin venian"</p>
          <div className='social'>
              <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}}  />
              <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}}  />
              <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
            </div>    

        </div>
    </div>
  </div>

  )
}

export default footer