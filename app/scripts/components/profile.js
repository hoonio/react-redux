import React from 'react'
import Iframe from 'react-iframe'

export default (props) => (
  <div id="profile" className="container-fluid">
    <div className="row">
      <iframe src="https://docs.google.com/document/d/1uQQfy_U0ekb0lo6SjKb6-j1MLTFxwVNR2Ep4H9DcPDI/pub?embedded=true" width="100%" height={getHeight()}></iframe>
    </div>
  </div>
);

const getHeight = () => {
  let ifrHeight = window.innerHeight - 54;
  console.log(ifrHeight);
  return ifrHeight;
}
