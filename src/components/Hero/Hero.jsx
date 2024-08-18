import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

export const Hero = ({ heroData, setPlayStatus, setHeroCount, heroCount, playStatus }) => {
  
  const textVideo = playStatus ? 'Stop the video' : 'See the video';
  
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <a href=""><img src={arrow_btn} alt="arrow" /></a>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots"> { /* Cambia el coche y marca el color del punto  */}
          <li onClick={() => setHeroCount(0)} className={heroCount===0? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount===1? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount===2? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={() => setPlayStatus(!playStatus)} // Cambia el estado del video 
              src={playStatus ? pause_icon : play_icon}
              alt="icon to start/pause video" />
          <p>{textVideo}</p>
        </div>
      </div>
    </div>
  )
}
export default Hero