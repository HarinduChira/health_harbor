import './Content.css'
import pills from './pills.jpg'
import tablet from './tablet.jpg'
import syrup from './syrup.JPG'
import drugs from './drugs.jpg'
import supplement from './supplement.JPG'

import pills_icon from './pills_icon.png'
import tablet_icon from './tablet_icon.png'
import syrup_icon from './syrup_icon.png'
import drugs_icon from './drugs_icon.png'
import supplement_icon from './supplement_icon.png'

const Content = () => {
  return ( 
    <div className='contents'>
        <div className="content">
            <img src={pills} alt="" />
            <div className="caption">
                <img src={pills_icon} alt="" />
                <p>Pills</p>
            </div>
        </div>
        <div className="content">
            <img src={syrup} alt="" />
            <div className="caption">
                <img src={syrup_icon} alt="" />
                <p>Syrup</p>
            </div>
        </div>
        <div className="content">
            <img src={tablet} alt="" />
            <div className="caption">
                <img src={tablet_icon} alt="" />
                <p>Tablets</p>
            </div>
        </div>
        <div className="content">
            <img src={supplement} alt="" />
            <div className="caption">
                <img src={supplement_icon} alt="" />
                <p>Supplements</p>
            </div>
        </div>
        <div className="content">
            <img src={drugs} alt="" />
            <div className="caption">
                <img src={drugs_icon} alt="" />
                <p>Drugs</p>
            </div>
        </div>
      
    </div>
  )
}

export default Content
