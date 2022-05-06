import { Button, Col, Input, Radio, Row } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

import Vector from './assets/images/Vector.svg';
import HomeIcon from './assets/images/home.svg';
import GoogleIcon from './assets/images/google.svg';
import FacebookIcon from './assets/images/facebook.svg';
import AppleIcon from './assets/images/apple.svg';
import BannerImage from './assets/images/BannerImage.svg';

function App() {
  return (
    <div className='App'>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xxl={2}></Col>
        <Col className='col-logo-header' xs={2} sm={4} md={6} lg={8} xxl={13}>
          <div className='logo-top-1600x1200'></div>
        </Col>
        <Col className='col-nav-container' xs={2} sm={4} md={6} lg={8} xxl={8}>
          <div className='nav cursor'>Help</div>
          <div className='nav cursor'>Contact us</div>
          <div className='nav cursor flex'>
            <div>English</div>
            <img src={Vector} alt='icon' style={{ marginLeft: '12px' }} />
          </div>
          <div className='nav cursor'>Sign Up</div>
          <img className='cursor' src={HomeIcon} alt='icon' />
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xxl={1} />
      </Row>
      <Row>
        <Col md={12} lg={8} xxl={2}></Col>
        <Col className='col-login-container' md={6} lg={8} xxl={8}>
          <div className='login-heading'>WELCOME BACK!</div>
          <div className='login-heading-description'>
            Don’t have a account,{' '}
            <span
              className='cursor'
              style={{ color: '#8699DA', fontWeight: '600' }}
            >
              Sign up
            </span>
          </div>
          <div className='login-label'>Username</div>

          <Input className='login-input' defaultValue={'deniel123@gmail.com'} />

          <div className='login-label password-mgt36'>Password</div>
          <Input.Password className='login-input' defaultValue={'123456'} />

          <div
            className='flex'
            style={{ justifyContent: 'space-between', marginTop: '36px' }}
          >
            <div className='flex'>
              <Radio />

              <div className='login-remember-account'>Remember me</div>
            </div>
            <div className='login-forget-password cursor'>Forget password?</div>
          </div>

          <Button className='sign-in-btn'>Sign In</Button>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '44px',
            }}
          >
            <div className='login-others'>or continue with</div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '24px',
            }}
          >
            <div
              className='flex'
              style={{ width: '80%', justifyContent: 'space-between' }}
            >
              <div className='login-social-account-container cursor'>
                <img src={GoogleIcon} alt='icon' />
              </div>
              <div className='login-social-account-container cursor'>
                <img src={FacebookIcon} alt='icon' />
              </div>
              <div className='login-social-account-container cursor'>
                <img src={AppleIcon} alt='icon' />
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} lg={8} xxl={1}></Col>
        <Col
          md={6}
          lg={8}
          xxl={12}
          style={{
            paddingTop: '51px',
            position: 'relative',
          }}
        >
          <img
            style={{ width: '100%', height: '100%' }}
            src={BannerImage}
            alt='banner'
          />
          <div className='logo-image'></div>
        </Col>
        <Col md={6} lg={8} xxl={1}></Col>
      </Row>
    </div>
  );
}

export default App;
