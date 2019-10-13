import React, {Component} from 'react';
import {connect} from "react-redux";
import {getNoteList} from "./action/SampleAction";
import {bindActionCreators} from "redux";

const mapStateToProps = state => ({
  noteList: state.notes
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getNoteList
}, dispatch);

class App extends Component {
  componentDidMount() {
    this.props.getNoteList()
  }

  render() {
    return (
      <div>
        {console.log(this.props.noteList) }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);