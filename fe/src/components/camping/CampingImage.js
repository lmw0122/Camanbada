import React, { Component } from "react";
import CardMedia from '@mui/material/CardMedia';
import CampingDefaultImage from "../../img/CampingDefaultImage.png";


const CampingImage = ({ basics }) => {
  if (basics.firstImageUrl !== null) {
    return (
      <CardMedia
        component="img"
        sx={{
          // 16:9
          // pt: '56.25%',
          pt: '0%',
        }}
        // width='30vw'
        // height='45vw'
        image={basics.firstImageUrl}
        // image="https://gocamping.or.kr/upload/camp/866/thumb/thumb_720_0210doTpcD0QrJTQnYauD1V6.jpg"
        alt="CampingImage"
      />
    )
  } else {
      return (
        <img src={CampingDefaultImage} width="100%" alt="ww"></img>
        // <CardMedia
        //   align="center"
        //   alignitems="center"
        //   justifycontent="center"
        //   component="img"
        //   sx={{
        //     // 16:9
        //     // pt: '56.25%',
        //     width: "70%",
        //     pt: '0%',
        //   }}
        //   src={CampingDefaultImage}
        //   alt="CampingImage"
        // />
      )
  }
}



export default CampingImage;