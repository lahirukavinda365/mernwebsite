import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer text-white bg-primary">
            <div className="container">
                <div className="py-5">
                    <div className="row">
                        <div className="col-3">
                            <h4>FINE ART</h4>
                        </div>

                        <div className="col-2">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a to='#' className="nav-link p-0 text-white">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to='#' className="nav-link p-0 text-white">
                                        Features
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to='#' className="nav-link p-0 text-white">
                                        Pricing
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to='#' className="nav-link p-0 text-white">
                                        FAQs
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to='#' className="nav-link p-0 text-white">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a to='#' className="nav-link p-0 text-white">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to='#' className="nav-link p-0 text-white">
                                        Features
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to='#' className="nav-link p-0 text-white">
                                        Pricing
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to='#' className="nav-link p-0 text-white">
                                        FAQs
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to='#' className="nav-link p-0 text-white">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-5">
                            <h4>Subscribe to our newsletter</h4>
                            <p>Monthly digest and whats new and exciting from us.</p>
                            <form>
                                <label htmlFor='sub-mail' className='visually-hidden'>Email address</label>
                                <input className='form-control' type='text' id='sub-mail' placeholder='Email address'/>
                                <button className='btn btn-primary rounded-pill px-4' type='button'>Subscribe</button>
                            </form>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-6">
                                @ 2021 Company, Inc. All Rights Reserved.
                            </div>
                            <div className="col-6 text">
                               <ul className='list-unstyled d-flex text-align-center justify-content-end'>
                                <li className="ms-3">
                                    <a href="#" className="link-light px-3">
                                        <i className="fa fa-facebook fa-2x"></i>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a href="#" className="link-light px-3">
                                        <i className="fa fa-instagram fa-2x"></i>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a href="#" className="link-light px-3">
                                        <i className="fa fa-twitter fa-2x"></i>
                                    </a>
                                </li>
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer