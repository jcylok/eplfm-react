import React, {Component} from 'react'
import axios from 'axios';

class PlayerContainer extends Component {
  state = {
    postIds: [],
    cityName: '',
    countryName: '',
    picture: '',
    cityId: '',
    posts: [],
    citiesList: [],
    cityObjId: '',
  }

  componentDidMount () {
    axios.get(`${process.env.REACT_APP_API_URL}/cities/${window.location.pathname.split('/')[2]}`)
      .then((res) => {
        this.setState({
          cityName: res.data.data.name,
          countryName: res.data.data.country,
          picture: res.data.data.picture,
          cityId: window.location.pathname.split('/')[2],
          postIds: res.data.data.posts,
          cityObjId: res.data.data._id,
        })
        this.grabPosts();
        this.grabCitiesList();
      })
      .catch((err) => console.log(err));
  }

  render () {
    return (
      <>
      <div className="container">
        <div className="row">
          <div className="col-sm">   
            {}
          </div>
          <div className="col-sm"> 

          </div>
        </div>
      </div>
      </>
    );
  };
};
export default PlayerContainer;
