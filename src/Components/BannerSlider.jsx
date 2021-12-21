import React from "react";
import { bannerData } from "../imagenes/imagenes";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    width: "100%",
    height: 280,
  },
  carousel: {
    marginTop: "10",
  },
});

export default function BannerSlider () {
  const classes = useStyles();
  return (
    <Carousel
      autoplay={true}
      animation="slide"
      indicators={true}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          background: "#fff",
          color: "#494949",
          borderRadius: 0,
          margin: 0,
        },
      }}
      className={classes.carousel}
    >
      {bannerData.map((item, i) => (
        <img src={item} alt="" className={classes.image} key={i} />
      ))}
    </Carousel>
  );
};