import React, { Component } from "react";
import { Row, Col, Carousel, Button } from 'react-bootstrap';
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

export default class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselObservations: []
    };
  }

  componentDidMount() {
    Meteor.call('iNaturalist.getCarouselView', (err, res) =>{
      if(err){
        console.error("Error al cargar las imagenes del carrusel", err);
      }
      else{
        console.log(res);
        this.setState({
          carouselObservations: res
        });
      }

    });
  }

  render() {
    return (
      <Carousel width={650} height={350}>
        {
          this.state.carouselObservations.map((obs, i) => {
            return(
              <Carousel.Item key={obs.uuid}>
                <div className="center-cropped"
                  style={{ backgroundImage: "url('"+obs.photos[0].url.replace('square', 'medium')+"')"}}>
                  <img alt={obs.species_guess} src={obs.photos[0].url.replace('square','medium')} />
                </div>
                <Carousel.Caption>
                  <h3>{obs.species_guess}</h3>
                  <p>{obs.photos[0].attribution}</p>
                </Carousel.Caption>
                
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    );
  }
}