import React from "react";
import "./Footer.css";

const Header = (props) => {
  return (
    // <footer id="main-footer" className="text-center p-4 fixed-bottom text-light">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col">
    //         <p>
    //           Copyright &copy;
    //           <span>{(new Date().getFullYear())}</span> Glozzom
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer id="footer" class="fixed-bottom mt-5 bg-dark">
        <div class="text-center">
            <p class="mb-0 text-light">Copyright © Nguyễn Thành Long <span id="year">2021</span>
            </p>
            <div class="mb-1">
                <a href="https://www.facebook.com/ntlong870/" target="_blank" rel="noreferrer"><i class="fab fa-facebook"></i></a>
                <a href="https://github.com/ntl870" target="_blank" rel="noreferrer"> <i class="fab fa-github"></i></a>
            </div>
        </div>
    </footer>
  );
};

export default Header;
