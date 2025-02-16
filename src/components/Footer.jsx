import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
   <div className="container-fluid bg-dark text-light p-3">
    <Row>
        <Col>
          <h3 className="text-light">Redux Cart</h3>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus culpa cumque quas ipsa, odio veritatis optio corporis blanditiis sunt quibusdam perspiciatis necessitatibus vero in illo! Numquam sapiente possimus saepe!</p>
        </Col>
        <Col className="d-flex align-items-center flex-column">
         <h3 className="text-light">Links</h3>
         <p><Link to={'/'} className="text-warning">Landing</Link></p>
         <p><Link to={'/cart'} className="text-warning">Cart</Link></p>
         <p><Link to={'/wish'} className="text-warning">Wishlist</Link></p>
         
        </Col>
        <Col>
        <h3 className="text-light mb-3">FeedBack</h3>
        <textarea name="" id="" className="form-control my-3" placeholder="Enter feedback"></textarea>
        <button className="btn btn-success">submit</button>
        </Col>
    </Row>
   </div>
   </>
  )
}

export default Footer