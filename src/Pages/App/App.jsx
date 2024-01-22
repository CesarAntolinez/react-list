import React from 'react'
import './App.scss'
import Testimonial from '../Testimonial/Testimonial'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list_testinomials: [
        { id: 1, img: 'img-temp/users/user-1.jpg', title: 'User 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget' },
        { id: 2, img: 'img-temp/users/user-2.jpg', title: 'User 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget' },
        { id: 3, img: 'img-temp/users/user-3.jpg', title: 'User 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget' },
      ]
    };
  };

  render() {
    let testinomials = this.state.list_testinomials.map((item) => <div className="col-7" key={item.id}><Testimonial img={item.img} title={item.title} description={item.description} /></div>)
    return (
      <>
        <section className="app container">
          <div className="row justify-content-center">
            {testinomials}
          </div>
        </section>
      </>
    );
  }
}

export default App
