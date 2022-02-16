import Button from '@mui/material/Button';
import React, { Component } from "react";
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import { Link, useParams } from "react-router-dom";
// import PersonIcon from '@mui/icons-material/Person';

const IsFollow = ({ isFollow, getFollow }) => {

    console.log('IsFollow에서 ', isFollow);

    const follow = () => {
      console.log('팔로우');
      getFollow(true);
    }

    const unfollow = () => {
      console.log('언팔로우');
      // isFollow = false;
      getFollow(false);
    }

    return (
      <div>

        {isFollow ? (
          <Button
            onClick={unfollow}
            style={{
              border: "1px black solid",
              color: "black"
            }}
            variant="outlined"
          >
            <PersonIcon />
            <CheckIcon />
          </Button>
        ) : (
          <Button
            onClick={follow}
            style={{
              color: "white",
              backgroundColor: "#1e88e5"
            }}
            variant="outlined"
          >
            팔로우
          </Button>
        )}
      </div>

    )

}


export default IsFollow;