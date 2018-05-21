import Link from 'next/link'

export default () => (
  <footer>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 col-xs-12">
          <p id="copyright">© 2006-{currentYear()} <a href="http://www.hoonio.com">Hoonio Ltd.</a></p>
        </div>
        <div className="col-sm-4 col-xs-12">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item"><a href="http://hoon.io/link2fb"><span className="hoonio hoonio-stack hoonio-lg"><i className="hoonio hoonio-circle hoonio-stack-2x"></i><i className="hoonio hoonio-stack-1x hoonio-facebook"></i></span></a></li>
            <li className="list-inline-item"><a href="http://hoon.io/1wGEoKi"><span className="hoonio hoonio-stack hoonio-lg"><i className="hoonio hoonio-circle hoonio-stack-2x"></i><i className="hoonio hoonio-stack-1x hoonio-instagram"></i></span></a></li>
            <li className="list-inline-item"><a href="http://hoon.io/link2yt"><span className="hoonio hoonio-stack hoonio-lg"><i className="hoonio hoonio-circle hoonio-stack-2x"></i><i className="hoonio hoonio-stack-1x hoonio-youtube"></i></span></a></li>
          </ul>
        </div>
        <div className="col-sm-4 col-xs-12">
          <ul className="list-inline">
            <Link className="list-inline-item" href="/canvas">Canvas</Link>
            <li className="list-inline-item"><a href="http://dory.hoonio.com">Dory</a></li>
            <li className="list-inline-item"><a href="http://feria.hoonio.com">Feria</a></li>
            <li className="list-inline-item"><a href="http://wiki.hoonio.com">Wiki</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

const currentYear = () => {
  let thisYear = new Date().getFullYear();
  return thisYear;
};
