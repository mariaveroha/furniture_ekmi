import React, { useState } from "react";
import './Gallery.scss'
import leon from "../../images/leon.svg"
import ampir from "../../images/ampir.svg"
import diana from "../../images/diana.svg"
import mario from "../../images/mario.svg"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Galerry = () => {
   let photos = [ leon, ampir , diana, mario];
  const [currentPhoto, setCurrentPhoto] = useState(photos[0])
  const ChangeLeft = () => {
   let number = photos.indexOf(currentPhoto)
   if (number !== 0) {
   setCurrentPhoto(photos[number-1])
   } 
   else {
    setCurrentPhoto(photos[photos.length-1])
   } 
  }
  const ChangeRight = () => {
    let number = photos.indexOf(currentPhoto);
    if (number !== photos.length-1) {
        setCurrentPhoto(photos[number+1])
    }
    else { setCurrentPhoto(photos[0])}
  }
    return (
        <div>
            <p className="gallery_title">Галерея мебели</p>
            <div className="gallery">
                <NavigateBeforeIcon fontSize="large" onClick={ChangeLeft} className = 'triangle-left'/>
                <img className="gallery_photo" src={currentPhoto}></img>
                {/* <div onClick = {ChangeRight} className="triangle-right"></div> */}
                <NavigateNextIcon fontSize="large" onClick = {ChangeRight} className="triangle-right"/>
            </div>
            <div className="images">
                {photos.map((el,index) => {
                    return <img className="photo" src= {el} key = {index} onClick = { () => setCurrentPhoto(el)}/>
                })}
           
            </div>
        </div>

    )
}

export default Galerry