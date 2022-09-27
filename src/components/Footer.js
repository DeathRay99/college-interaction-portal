import "./Footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Media</h4>
            <ul>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Media Coverage</a>
              </li>
              <li>
                <a href="#">Photo Gallery</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Admissions</h4>
            <ul>
              <li>
                <a href="#">Application Procedure</a>
              </li>
              <li>
                <a href="#">Foriegn Application</a>
              </li>
              <li>
                <a href="#">Career Test</a>
              </li>
              <li>
                <a href="#">Jaypee Scholarship</a>
              </li>
              <li>
                <a href="#">Education loan</a>
              </li>
              <li>
                <a href="#">Admission Microsite</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Live Counseling</a>
              </li>
              <li>
                <a href="#">Application Submitted to DEB</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Other Links</h4>
            <ul>
              <li>
                <a href="#">Amizone</a>
              </li>
              <li>
                <a href="#">Alumni Portal</a>
              </li>
              <li>
                <a href="#">Placement Portal</a>
              </li>
              <li>
                <a href="#">Recruiter Section</a>
              </li>
              <li>
                <a href="#">Parent Section</a>
              </li>
              <li>
                <a href="#">Student Section</a>
              </li>
              <li>
                <a href="#">Recruiter Section</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Jaypee Education Organisation</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <div class="footer-col-sub">
              <h4>Subscribe</h4>
              <form>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Enter your Email Address"
                  class="footer-sub-input"
                />
                <br />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Enter your Mobile Number"
                  class="footer-sub-input"
                />
                <br />
                <div
                >
                  <button id="subscribe-btn">SUBSCRIBE</button>
                </div>
              </form>
            </div>
            <div class="footer-follow-us">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>

                <h5>2022-All Rights Reserved.</h5>
                <p>Website Designed and Devloped By </p>
                <p>Amar Upadhyay,Deepak Kumar and Vibhor Pandey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
