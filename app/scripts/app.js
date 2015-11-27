import React from 'react';
import Home from './components/home';

window.React = React;
const mountNode = document.getElementById('app');

var App = React.createClass({
  getInitialState:function(){
    return {
      data: []
    }
  },
  componentWillMount:function(){
    // var Alert = ReactBootstrap.Alert;
    reqwest({
      url:'https://spreadsheets.google.com/feeds/list/1LNTNp3n_DYYq_dDLf7YdZyJWjI0soMn3MjYPeVLFSfk/1/public/values?alt=json',
      type: 'jsonp',
      success:function(resp){
        this.setState({data:resp.feed.entry});
        console.log(this.state.data);
        // this.renderChart(this.state.data);
      }.bind(this)
    })
  },
  renderChart: function(dataset){
    d3.select('#chart').selectAll('div')
      .data(dataset)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function(d){
        return d.val*5+'px';
      });
  },
  render: function(){
    var works = [];
    for (var i=0; i<this.state.data.length; i++) {
      var workItem = this.state.data[i];
      works.push(<div class="col-sm-6 col-md-4">
              <div class="thumbnail">
                <img src={workItem.gsx$image.$t} alt="" />
                <div class="caption">
                  <h3>{workItem.gsx$title.$t}</h3>
                  <p>{workItem.gsx$description.$t}</p>
                  <p>
                    {workItem.gsx$stacks.$t}
                    <a href={workItem.gsx$link.$t} class="btn btn-primary" role="button">Link</a>
                    <a href="#" class="btn btn-default" role="button">Source</a>
                  </p>
                </div>
              </div>
            </div>);
    }
    return <div class="row">{works}</div>
    // <div>
    //   <p>{this.state.data[0]}</p>
    //   <img src={this.state.data[0].gsx$image.$t} alt="" />
    // </div>

  }
});

React.render(<App />, mountNode);
// React.render(<Home/>, mountNode);
