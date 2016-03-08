import React from 'react'

export default class extends React.Component{
  constructor(props) {
    super(props);
    // reqwest({
    //   url:'https://docs.google.com/document/d/1uQQfy_U0ekb0lo6SjKb6-j1MLTFxwVNR2Ep4H9DcPDI/pub',
    //   type: 'jsonp',
    //   contentType: 'text/html',
    //   success:(resp) => {
    //     console.log(resp)
    //     this.organizeData(resp);
    //   }.bind(this)
    // });

  }

  hackIframe() {
    const cv = document.querySelectorAll('iframe');
    console.log(cv);
    const cvName = document.getElementById('h.tm6ltssgrugr');
    console.log(cvName);
  }

  organizeData(source) {
    console.log(source);
  }

  render(){
    return (
      <div id="profile" className="row">
        My rendered CV or resume goes here
        <div className="col-sm-12">
          <iframe src="https://docs.google.com/document/d/1uQQfy_U0ekb0lo6SjKb6-j1MLTFxwVNR2Ep4H9DcPDI/pub?embedded=true" width="100%"></iframe>
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.hackIframe();
  }

}
