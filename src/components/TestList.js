import React from 'react';
import Test from './Test';

class TestList extends React.Component {
  constructor(props) {
    super(props);
    this.regExp = null;
  }

  shouldComponentUpdate(nextProps) {
    const { regExp } = nextProps;
    if(regExp == '')
      return true;
    const regex = /^\/(.*)\/([a-z]*)$/.exec(regExp);
    try {
      this.regExp = new RegExp(regex[1],regex[2]);
    } catch (error) {
      return false;
    }
    return true;  
  }
  render() {
    return <div className='test-list'>
      <h3>{this.props.title}</h3>
      {this.props.list.map((value, index) => 
        <Test key={index} value={value} regExp={this.regExp} isMatching={this.props.title == 'match'}/>
      )}
    </div>;
  }
}

TestList.propTypes = {
  title: React.PropTypes.string,
  list: React.PropTypes.array,
  regExp: React.PropTypes.string,
};

export default TestList;