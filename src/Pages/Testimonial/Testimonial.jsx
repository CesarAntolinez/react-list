import React from 'react';
import './Testimonial.scss';


class Testimonial extends React.Component {
  render() {
    return (
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-2">
            <img src={`/src/assets/${this.props.img}`} className="img-fluid rounded-start" 
                  alt={this.props.title} />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonial;