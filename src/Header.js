import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

function Header() {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => { await oktaAuth.signInWithRedirect(); }
  const logout = async () => { await oktaAuth.signOut(); }
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    console.log(oktaAuth)
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      // oktaAuth.getUserInfo().then(info => {
      //   setUserInfo(info);
      // });
    }
  }, [authState, oktaAuth]); 

  const userText = authState.isAuthenticated
    ? <button onClick={ logout }>Logout</button>
    : <button onClick={ login }>Sign In</button>;

  return (
    <header>
      <div>React Login</div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/private">Private</Link></li>
      </ul>
      {userText}
    </header>
  );
}

export default Header;
