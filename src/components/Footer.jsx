import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className=" text-gray-400 py-10 px-6">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-10">
      <div className="flex flex-col">
        <img src="/assets/images/logo.png" alt="Elecar Logo" className="mb-4 w-fit" />
        <p className="text-sm">
          We offer the best electric <br /> cars of the most recognized <br /> brands in the
          world.
        </p>
      </div>
  
      <div className="flex flex-col sm:items-start">
        <h3 className="text-white mb-4">Company</h3>
        <ul>
          <li>About</li>
          <li>Cars</li>
          <li>History</li>
          <li>Shop</li>
        </ul>
      </div>
  
      <div className="flex flex-col sm:items-start">
        <h3 className="text-white mb-4">Information</h3>
        <ul>
          <li>Request a quote</li>
          <li>Find a dealer</li>
          <li>Contact us</li>
          <li>Services</li>
        </ul>
      </div>
  
      <div className="flex flex-col items-start sm:items-center">
        <h3 className="text-white mb-4">Follow us</h3>
        <div className="flex gap-4">
        <FaFacebookF className="text-xl hover:text-white cursor-pointer" />
        <FaInstagram className="text-xl hover:text-white cursor-pointer" />
        <FaTwitter className="text-xl hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
    <div className="text-center text-sm mt-10">
      © Bedimcode. All rights reserved.
    </div>
  </footer>
  
  )
}

export default Footer