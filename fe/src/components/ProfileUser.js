import Button from '@mui/material/Button';
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProfileUser extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
<<<<<<< HEAD
      userE: false,
    //   userE: true,
=======
      // userE: false,
      userE: true,
>>>>>>> 7419366ac88bc25affae4c6a669b6f0b88624915
    }
    
  }

  render() {
    if (this.state.userE === true) {
      return (
        <Link to={'/profile/update'} style={{textDecoration:'none'}}>
          <Button
            style={{
              border: "1px black solid",
              color: "black"
            }}
            variant="outlined"
          >
            게시글 작성
          </Button>
        </Link>  
      ) 
    } else {
      return (
        <Link to={'/message'} style={{textDecoration:'none'}}>
          <Button
            style={{
              border: "1px black solid",
              color: "black"
            }}
            variant="outlined"
          >
            메시지 보내기
          </Button>
        </Link>  
      )
    }
  }
}

export default ProfileUser;