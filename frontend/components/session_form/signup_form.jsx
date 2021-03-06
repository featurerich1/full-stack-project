import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      maxHeight: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.maxFormHeight = this.maxFormHeight.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    delete user.maxHeight;
    this.props.processForm(user);
    // this.props.history.push("/dashboard")
  }

  maxFormHeight() {
    this.setState({ maxHeight: 300 });
  }

  render() {
    const maxHeight = { maxHeight: this.state.maxHeight };

    return (
      <div className="signup-form-container">
        <div>
          <Link to="/">
            <img src={window.logo} height="200"></img>
          </Link>
        </div>

        <div>
          <div className="welcome">INTRODUCE YOURSELF</div>
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            {/* Please {this.props.formType} or {this.props.navLink} */}

            <div className="signup-form" id="slideout">
              <br />
              {this.props.errors === undefined ? null : (
                <span className="errors">
                  {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                  ))}{" "}
                </span>
              )}

              <span
                style={{
                  fontSize: "24px",
                  fontFamily: `Lato, "Helvetica Neue", Helvetica, Arial, sans-serif`,
                }}
              >
                {" "}
                Hi there! My name is
              </span>
              <br />
              <input
                type="text"
                style={{ fontSize: `32px` }}
                value={this.state.username}
                onChange={this.update("username")}
                className="signup-input"
                onClick={() => this.maxFormHeight()}
              />
              <div id="slideout-inner" className="slideout" style={maxHeight}>
                <br />
                <label>
                  Here's my email address: <br></br>
                  <input
                    type="text"
                    style={{
                      width: `100%`,
                      fontSize: `18px`,
                      fontFamily: `Lato, "Helvetica Neue", Helvetica, Arial, sans-serif`,
                    }}
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="signup-input"
                  />
                </label>

                <br />
                <br />
                <label>
                  {" "}
                  And here's my password: <br></br>
                  <input
                    type="password"
                    style={{
                      width: `100%`,
                      fontSize: `18px`,
                      fontFamily: `Lato, "Helvetica Neue", Helvetica, Arial, sans-serif`,
                    }}
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="signup-input"
                  />
                </label>
                <br />
                <br />
                <input id="orangebutton" type="submit" value="Sign me up!" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
