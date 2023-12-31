import './HeroImageStyles.css'
import { Component } from 'react'

interface Props {
  heading: string
  text:string
}

 class HeroImage extends Component<Props> {
  render() {
    return (
      <div className='hero-img'>
        <div className='heading'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    ) 
  }
}

export default HeroImage