import "./contact.css"
import emailjs from "@emailjs/browser"
import { form } from "motion/react-client"
import { useRef } from "react"

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_KEY", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact'>
      <div className="cSection">
        <form>
          <h1 className="cTitle">Vamos manter em contato</h1>
          <div className="formItem">
            <label>Nome</label>
            <input type="text" placeholder="John da Silva" />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
          <div className="formItem">
            <label>Mensagem</label>
            <textarea rows={10} placeholder="Escreva sua mensagem..."></textarea>
          </div>
          <button className="formButton">Enviar</button>
        </form>
      </div>
      <div className="cSection">SVG</div>
    </div>
  )
}

export default Contact