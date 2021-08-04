import React, {useState} from 'react';
import styled from 'styled-components'
import {send} from 'emailjs-com';
import {H1, P} from '../styles/TextStyles'
import {themes} from '../styles/ColorStyles'
import { Form, Input, TextArea, Button, Icon, Grid } from 'semantic-ui-react'
import './Contact.css'


export default function Contact() {
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

    function sendEmail(e) {
        e.preventDefault();
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
        e.target.reset()
      }

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };


    return (
        <Wrapper id="contact">
            <Title><span>Contact Me</span></Title>
            <Description><span>Feel free to send me an email if you'd like to connect!</span></Description>
            <Form onSubmit={sendEmail}>
                <Form.Field
                    id='form-input-control-name'
                    control={Input}
                    name='name'
                    placeholder='Full name'
                    value={toSend.name}
                    onChange={handleChange}
                
            />
                <Form.Field
                    id='form-input-control-subject'
                    control={Input}
                    name='subject'
                    placeholder='Subject'
                    value={toSend.subject}
                    onChange={handleChange}
               
            />
                <Form.Field
                    id='form-input-control-email'
                    name="email"
                    control={Input}
                    placeholder='joe@schmoe.com'
                    value={toSend.email}
                    onChange={handleChange}
                   
                 />
                <Form.Field
                    id='form-textarea-control-message'
                    control={TextArea}
                    placeholder='Message'
                    name="message"
                    value={toSend.message}
                    onChange={handleChange}
                    
                />
                <Grid>
                    <Grid.Column textAlign="center">
                        <Button 
                        type='submit' 
                        basic color='pink' content='Pink'
                        circular={true}
                        icon
                        >
                        <Icon name='send' />
                        </Button>
                    </Grid.Column>
                 </Grid>
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    margin: auto;
    width: 100%;
`

const Title = styled(H1)`
    color: ${themes.light.text1};
    /* background: linear-gradient(180deg, #730040 0%, #301cbe 100%); */
    background: white;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-align: center;
    

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
   margin-left:auto;
   margin-right:auto;
   text-align:center;
   font-size: 21px;
   bottom: 10px;

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
