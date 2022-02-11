import Button from '@mui/material/Button';
import React, { Component } from "react";
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from "react-router-dom";
// import PersonIcon from '@mui/icons-material/Person';

class IsFollow extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isfollowed: false,
      userE: true,
<<<<<<< HEAD
    //   userE: false,
=======
      // userE: false,
>>>>>>> 7419366ac88bc25affae4c6a669b6f0b88624915
    }
    
  }

  follow = () => {
    this.setState({
      isfollowed: true,
    });
  }

  unFollow = () => {
    this.setState({
      isfollowed: false,
    });
  }

  render() {
    if (this.state.isfollowed === true && this.state.userE === false) {
      return (
        <Button
          onClick={this.unFollow}
          style={{
            border: "1px black solid",
            color: "black"
          }}
          variant="outlined"
        >
          <PersonIcon />
          <CheckIcon />
        </Button>
      ) 
    } if (this.state.isfollowed === false && this.state.userE === false) {
      return (
        <Button
          onClick={this.follow}
          style={{
            color: "white",
            backgroundColor: "#1e88e5"
          }}
          variant="outlined"
        >
          팔로우
        </Button>
      )
    } else {
      return (
        <Link to={'/profile/update'} style={{textDecoration:'none'}}>
          <Button 
            style={{
              color: "white",
              backgroundColor: "#1e88e5"
            }}
          >
            프로필 편집
          </Button>
        </Link>
      )
    }
  }
}

export default IsFollow;