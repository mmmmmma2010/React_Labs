import "./style.css";
import { useState } from "react";
import { Input } from "../../components/Input/index";
import { useHistory } from "react-router-dom";

export const Contact = (props) => {
  const history = useHistory();

  const Clicked = () => {
    console.log(`${name} ${email} ${phone} ${message}`);

    return history.push("/posts");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMsg] = useState("");
  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div className="container contact-form">
      <div className="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>
      <h3>Drop Us a Message</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <Input value={name} setValue={setName} label="Name" />{" "}
          </div>
          <div className="form-group">
            <Input value={email} setValue={setEmail} label="Email" />{" "}
          </div>
          <div className="form-group">
            <Input value={phone} setValue={setPhone} label="Phone" />{" "}
          </div>
          <button className="btn btn-primary" onClick={Clicked}>
            Send Message
          </button>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <textarea
              onChange={handleChange}
              id="erea"
              name="txtMsg"
              className="form-control"
              placeholder="Your Message *"
              value={message}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
