import Button from '@mui/material/Button';
import React, { Component } from "react";
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import { Link, useParams } from "react-router-dom";
// import PersonIcon from '@mui/icons-material/Person';

class IsFollow extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isfollowed: false,
      userE: false,
      //   userE: false,
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
        // <Link to={`/profile/update/${nick}`} style={{textDecoration:'none'}}>
        // nickname 받아오는 api사용해서 url 연결 완성하기
        <div>
          <Button 
            style={{
              color: "white",
              backgroundColor: "#1e88e5"
            }}
            onClick={(e)=> {
              const {nick} = useParams();
              window.location.href = `/profile/update/${nick}`
            }}
          >
            프로필 편집
          </Button>
        </div>
        // </Link>
      )
    }
  }
}

export default IsFollow;