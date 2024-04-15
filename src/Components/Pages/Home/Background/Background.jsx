import './Background.css'
import vid01 from './1.mp4'


const Background = () => {

      return(
        <video className='background fade-in' autoPlay loop muted>
            <source src={vid01} type='video/mp4' />
        </video>
      )

}

export default Background
