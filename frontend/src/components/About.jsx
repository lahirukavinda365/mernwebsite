import React from 'react'

const About = () => {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className='w-75 mt-5' style={{background:"blue"}}/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5">About Us</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b>Are</h1>
                        <hr className='w-50' />
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero alias consectetur doloremque tenetur ea numquam voluptatem, magni sapiente esse! Nulla, aliquid eos? Quod nam aliquam molestias fugit, autem fuga, aspernatur cumque perferendis vel reprehenderit aperiam eaque! Voluptatem voluptate accusantium, est aut inventore maiores quae placeat commodi eligendi ducimus illo repellat!
                        </p>
                        <button className='btn btn-primary rounded-pill px-4 py-2'>Get Started</button>
                        <button className='btn btn-outline-primary rounded-pill px-4 py-2 ms-4'>Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About