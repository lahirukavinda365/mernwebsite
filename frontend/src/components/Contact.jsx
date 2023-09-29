import React from 'react'

const Contact = () => {
  return (
    <div>
        <section id='contact'>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                        <h1 className="display-6 text-center mb-4">Have Some <b>Question?</b></h1>
                        <hr className='w-25 mx-auto'/>
                    </div>
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6">
                     <form>
                           <div className="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="type" className="form-control" id="exampleFormControlInput1" placeholder="John Smith"/>
                           </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>

                            <button type='submit' className='btn btn-outline-primary'>Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                     </form>       
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact