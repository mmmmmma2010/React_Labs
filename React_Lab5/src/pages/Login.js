import { Input } from "../components/Input";
import { useState , useContext} from "react";
import { useHistory ,Redirect } from "react-router-dom";
// import { Navbar } from "../components/Navbar";
import { AuthContext } from '../contexts/AuthContext';


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidCred, setIsValidCred] = useState(true);
  // const isLoggedIn = localStorage.getItem("token") === "12345";
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (authContext.login(email, password)) history.replace("/main-page");
     else setIsValidCred(false);
  };
  return authContext.isLoggedIn ? <Redirect to="/posts"/>:
   (<>
    
    <div className="d-flex justify-content-center">
      <form className="card p-3 col-6" onSubmit={handleSubmit}>
        <Input
        lable="email"
          type="email"
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <Input
        lable="passowrd"
          type="password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        {!isValidCred && (
          <div className="alert alert-danger">Invalid login credentials</div>
        )}
        <button className="btn btn-primary">Log-in</button>
      </form>
    </div>
    </>
  );
};
