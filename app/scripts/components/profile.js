import React from 'react'

export default class extends React.Component{
  constructor(props) {
    super(props);
    reqwest({
      url:'https://docs.google.com/document/d/1uQQfy_U0ekb0lo6SjKb6-j1MLTFxwVNR2Ep4H9DcPDI/pub',
      type: 'jsonp',
      contentType: 'text/html',
      success:(resp) => {
        console.log(resp)
        this.organizeData(resp);
      }.bind(this)
    });
  }

  organizeData(source) {
    console.log(source);
  }

  render(){
    return (
      <div>My rendered CV or resume goes here</div>
    );
  }

}
