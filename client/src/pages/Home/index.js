// npm packages
import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

// our stuff
import homePic from "../../assets/img/home_pic.png";
import AnnouncementBox from "../../components/AnnouncementBox";
import { HomeInfo } from "./info";

class Home extends Component {
  state = {
    boards: null
  };
  componentDidMount() {
    fetch("/api/boards").then(res => res.json()).then(boards => {
      this.setState({ boards });
    });
  }
  render() {
    const { boards } = this.state;
    return (
      <Grid id="homePage">
        <Row id="homeTop">
          <Col xs={12} sm={12} md={12}>
            <Image src={homePic} responsive className="center-block" />
          </Col>
        </Row>
        <Row id="announcement" className="center">
          <Col xs={12} sm={12} md={12}>
            <AnnouncementBox
              header="What is 4chan?"
              content={HomeInfo.homeAnnouncement}
            />
          </Col>
        </Row>
        <Row id="boards">
          <Col xs={12} sm={12} md={12}>
            <div className="text-center">
              <pre>
                {JSON.stringify(boards)}
              </pre>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;