import React from 'react';

var d = new Date();
var currentYear = d.getFullYear();

function Footer() {
  return (
    <footer className='footer'>
      <p>Copyright &copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;
