import React from "react";

interface FadingAlertProps {
  message: JSX.Element | string;
}

interface FadingAlertState {
  showingAlert: boolean;
}

export default class FadingAlert extends React.Component<
  FadingAlertProps,
  FadingAlertState
> {
  message: JSX.Element | string;
  constructor(props: Readonly<FadingAlertProps>) {
    super(props);
    this.message = props.message;
    this.state = {
      showingAlert: true,
    };
  }

  handleCloseAlert() {
    this.setState({
      showingAlert: false,
    });
  }

  render() {
    return (
      <div
        className={`alert alert-primary ${
          this.state.showingAlert ? "alert-shown" : "alert-hidden"
        }`}
        role="alert"
      >
        {this.message}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={this.handleCloseAlert.bind(this)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}
