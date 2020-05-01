import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";

// GitHub should return response that looks like this
interface GithubResponse {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email?: string;
  hireable: boolean;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export default class GithubProfile extends React.Component<
  {},
  { user: GithubResponse | undefined }
> {
  constructor(props: any) {
    super(props);
    this.state = { user: undefined };
  }

  componentDidMount() {
    window
      .fetch(`https://api.github.com/users/jackmoody11`)
      .then((response) => response.json())
      .then((user: GithubResponse) => {
        this.setState({ user: user });
      });
  }

  render() {
    if (this.state.user !== undefined) {
      const stats = {
        Repositories: this.state.user.public_repos,
        Followers: this.state.user.followers,
        Following: this.state.user.following,
      };
      return (
        <Container className="my-5">
          <Row className="my-5">
            <Col xs={{ span: 4, offset: 4 }}>
              <Card>
                <Card.Img src={this.state.user.avatar_url} variant="top" />
                <Card.Body>
                  <Card.Title>{this.state.user.login}</Card.Title>
                  <Card.Text>{this.state.user.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            {Object.entries(stats).map(([name, stat], index) => (
              <GithubStat name={name} stat={stat} />
            ))}
          </Row>
        </Container>
      );
    } else {
      return (
        <Container>
          <Row className="justify-content-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Row>
        </Container>
      );
    }
  }
}

interface IGithubStat {
  name: string;
  stat: number | string;
}

const GithubStat = (props: IGithubStat) => {
  return (
    <Col xs={4}>
      <Row className="justify-content-center">
        <h3>{props.name}</h3>
      </Row>
      <Row className="justify-content-center">{props.stat}</Row>
    </Col>
  );
};
