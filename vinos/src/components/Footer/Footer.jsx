import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './style-footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const Footer = () => {
    return (
      <MDBFooter className="font-small pt-4 mt-4 footerGeneral">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="12">
              <h5 className="title">PROYECTO FINAL METODOLOGÍA DE LA INVESTIGACIÓN</h5>
              <p>
              INTEGRANTES: SPALENZA, POTICHKIN, AGUILAR, BOSCHI
              </p>
              <h5 className="title">Redes</h5>
              <ul>
                <li className="list-unstyled">
                <a href="https://facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li className="list-unstyled">
                <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                </li>
                <li className="list-unstyled">
                <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                </li>
                <li className="list-unstyled">
                <a href="https://ar.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    );
  }

export default Footer