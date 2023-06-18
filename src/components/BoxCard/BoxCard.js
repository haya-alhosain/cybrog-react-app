import './BoxCard.css'
import { FaStar, FaDownload } from "react-icons/fa";
const BoxCard = (props) => {
  return (
    <div className="most-popular-item">
      <div className="card-wrapper">
        <img className="most-popular-image" src={props.image} />
        <div className="most-popular-content">
          <h4 className="most-popular-title">{props.title}
            <br />
            <span>{props.category}</span>
          </h4>
          <ul>
            <li><span className='icon' style={{ "color": "yellow" }}><FaStar /></span> <span>{props.rate}</span></li>
            <li><span className='icon' style={{ "color": "var(--color-primary)" }}><FaDownload /></span><span>{props.download}</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BoxCard
