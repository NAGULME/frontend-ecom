import React from 'react';
import Layout from '../components/Layout';

function Contact() {
  return (
  
      <Layout>
      <div style={{ position: 'relative', height: '70vh', width: '100%', overflow: 'hidden' }}>
        <div>
          <video
            src='https://res.cloudinary.com/dxi76chcp/video/upload/v1724151053/blue_stream_curve_line_particles_pack_w5e2g4.mov'
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
          />
        </div>
        <div style={{ top: '0', left: '0', position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}></div>
        
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'whitesmoke', zIndex: '2' }}>
          <div style={{ textAlign: 'center' }}>
            <p>Contact Us</p>
            <h1>Get in Touch with Our Experts Team</h1>
            <p>Share some details here. This is a flexible section where you can share anything you want. It could be details or some information.</p>
          </div>
        </div>
      </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '40px 20px',marginTop:'5rem' }}>
          {/* Our Details Section */}
          <div style={{ flex: 1, marginRight: '20px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h1>Get In Touch With Us</h1>
            <p>Share some details here. This is a flexible section where you can share anything you want. It could be details or some information.</p>
            
            <h5>Address</h5>
            <p>Hyderabad, Sr Nagar</p>
            <hr />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <strong>Email:</strong>{' '}
                <a href="mailto:shaiknagulmeera24@yahoo.com" style={{ textDecoration: 'none' }}>shaiknagulmeera24@yahoo.com</a>
              </div>
              <div>
                <strong>Phone:</strong>{' '}
                <a href="tel:+919542846978" style={{ textDecoration: 'none' }}>+91 954 284 6978</a>
              </div>
            </div>
            
            <hr />
            
            <h5>Social Media</h5>
            <div >
            {/* icons */}
           
            <a><i class="bi bi-meta" style={{marginRight:'15px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-meta" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.614-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.136 0 .27.018Z"  className="icon-path"/>
</svg></i></a>
          

<a><i class="bi bi-whatsapp" style={{marginRight:'15px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"  className="icon-path"/>
</svg></i></a>


<a><i class="bi bi-linkedin" style={{marginRight:'15px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" className="icon-path"/>
</svg></i></a>

<a><i class="bi bi-twitter" style={{marginRight:'15px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" className="icon-path"/>
</svg></i></a>
<style>
  {`a.hover.icon-path{
  fill:red}`}
</style>


          </div>
          </div>

          {/* Contact Form Section */}
          <div style={{ flex: 1, marginLeft: '20px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px',}}>
          <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationTooltip01">First name</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" required />
      <div class="valid-tooltip">
        
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltip02">Last name</label>
      <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name"  required/>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltipUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required/>
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03">City</label>
      <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required/>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip04">State</label>
      <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required/>
      <div class="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip05">Zip</label>
      <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required/>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div><div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  </div>
  
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
          </div>
        </div>

        {/* FAQs */}
        <div style={{display:'flex',justifyContent:'space-between',flex:1,marginTop:'4rem',padding:'40px'}}>
          <div style={{borderRight:'1px solid ',marginRight:'50px'}}><h3>FAQs</h3>
          <p>Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.</p></div>
          <div>
            <div><h5>How do I order flowers and choose delivery options?</h5>
            <p>Simply browse our shop, select your bouquet, and follow the checkout process. You can choose the delivery date and time during checkout.</p>
            <hr></hr>
            </div>
            <div><h5>What areas do you deliver to, and can I track my delivery?</h5>
            <p>We deliver to [Service Areas], and you’ll receive a tracking number once your order is dispatched.</p>
            </div><hr></hr>
            <div><h5>How can I make my flowers last longer, and what if they arrive damaged?</h5>
          <p>For longer-lasting blooms, trim stems, change water, and keep in a cool place. Contact us if your flowers arrive damaged for a replacement or refund.</p>
          </div>
          <div><h5>What is your return policy and cancellation<hr></hr> policy?</h5>
          <p>Contact us within [X days] for returns or exchanges. Orders can be canceled up to [X hours/days] before the scheduled delivery date.</p>
          </div><hr></hr>
        
          </div>
          </div>
          {/* call of action  */}
       
  <div style={{position: 'relative', overflow: 'hidden',height:'100vh',marginTop:'5rem',marginBottom:'3rem'}}>
  <video 
    autoPlay 
    loop 
    muted 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1,
    }}
  >
    <source src="https://res.cloudinary.com/dxi76chcp/video/upload/v1724153475/3163534-uhd_3840_2160_30fps_dhfhnm.mp4" type="video/mp4" />
  </video>

  <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center', padding: '2rem', marginTop: '3rem'}}>
    <div style={{height: '40rem', display: 'flex', flexDirection: 'column', flex: 1, padding: '2rem'}}>
      <p style={{color: 'red'}}>Call to action</p>
      <div style={{color: 'whitesmoke', display: 'flex', flexDirection: 'column', justifyContent: "center", flex: '1'}}>
        <h3>Explore Our Exquisite Floral Collections & Shop Now for the Perfect Blooms</h3>
        <a href='/products'><button type="button" className="btn btn-outline-danger">Product</button></a>
      </div>
    </div> 
  
    <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'13rem'}}>
      <img src='https://static.vecteezy.com/system/resources/previews/002/099/451/non_2x/ai-artificial-intelligence-and-machine-learning-concept-sphere-grid-wave-on-streaming-matrix-digital-binary-code-background-big-data-innovation-technology-neural-networks-vector.jpg' 
        alt='Python Libraries' style={{maxWidth:'100%',maxHeight:'100%',objectFit:'cover',borderRadius:'50%'}} className='wrapper'/>
    </div>
  </div>
</div> 
      </Layout>
  
  );
}

export default Contact;
