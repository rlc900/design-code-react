import React, {useState} from 'react';
import styled from 'styled-components'
import {send} from 'emailjs-com';
import {H1, P} from '../styles/TextStyles'
import {themes} from '../styles/ColorStyles'


export default function Contact() {
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

    function sendEmail(e) {
        e.preventDefault();
        // emailjs.sendForm('gmail', 'template_cslpuk6', e.target, 'user_Lzduu0l9rvR1CNT93ZOE6')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
        //   e.target.reset()
        send(
            'service_gyo7eki',
            'template_cslpuk6',
            toSend,
            'user_Lzduu0l9rvR1CNT93ZOE6'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
      }

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };


    return (
        <Wrapper id="contact">
            <Title><span>Contact Me</span></Title>
            <Description><span>Would you like to connect? Here is my email & more ways we can chat!</span></Description>
            <form onSubmit={sendEmail}>
                <div>
                    <input type="text" className="form-control" placeholder="Name" name="name" value={toSend.name} onChange={handleChange}/>
                </div>
                <div>
                    <input type="email" className="form-control" placeholder="Email Address" name="email" value={toSend.email} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" className="form-control" placeholder="Subject" name="subject" value={toSend.subject} onChange={handleChange}/>
                </div>
                <div>
                    <textarea className="form-control" placeholder="Your message" name="message" value={toSend.message} onChange={handleChange}></textarea>
                </div>
                <div>
                    <input type="submit" value="Send Message" />
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    // position: absolute;
`

const Title = styled(H1)`
    color: ${themes.light.text1};
    /* background: linear-gradient(180deg, #730040 0%, #301cbe 100%); */
    background: white;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    /* for accessibility */
        @media (max-width: 450px) {
        font-size: 48px;
    }
`
const Description = styled(P)`
   /* background: linear-gradient(180deg, #730040 0%, #301cbe 100%); */
   background: white;
   background-clip: text;
   -webkit-background-clip: text;
   color: transparent;
   position: relative; 
   margin-left:auto;
   margin-right:auto;
   text-align:center;
   width: 500px; 
   font-size: 21px;
   top: 55px;
   
   span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
  }

/* for accessibility */
   @media (max-width: 450px) { 
        font-size: 48px;
    } 
`