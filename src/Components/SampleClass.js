import React from "react";

class SampleCLass extends React.Component {
  constructor(props) {
    super(props);
    console.log("i am inside constructor");
    this.state = {
      color: "Green",
      display: "false",
      stateValue: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("inside getderived state from props", props, state);
    return { stateValue: props.appName };
  }
  handleColor = () => {
    this.setState({ color: "Red" });
  };

  componentDidMount = () => {
    console.log("inside component did mount");
  };

  shouldComponentUpdate = () => {
    console.log("inside should component update");
    return true;
  };

  getSnapshotBeforeUpdate = (prevProps, preState) => {
    console.log("get snapshotbefore update", prevProps, preState);
  };

  componentDidUpdate = () => {
    console.log("inside component did update");
  };

  componentWillUnmount = () => {
    console.log("component removed");
  };

  render() {
    console.log("inside render method");
    let { color, display } = this.state;
    return (
      <>
        <div>This is a class component</div>
        <p>State:{this.props.appName}</p>
        <div style={{ color: `${color}` }}>Current color: {color}</div>
        <div>
          {" "}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.handleColor()}
          >
            Change color
          </button>
        </div>
        <div> Display: {display}</div>
      </>
    );
  }
}

export default SampleCLass;
