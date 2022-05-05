import { Button, Col, Input, Radio, Row } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

import Vector from './assets/images/Vector.svg';
import HomeIcon from './assets/images/home.svg';
import GoogleIcon from './assets/images/google.svg';
import FacebookIcon from './assets/images/facebook.svg';
import AppleIcon from './assets/images/apple.svg';
import BannerImage from './assets/images/BannerImage.svg';
import Logo from './assets/images/Logo.svg';

function App() {
  return (
    <div className='App'>
      <Row justify='end'>
        <Col
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: '62px',
            marginTop: '48px',
          }}
          span={8}
        >
          <div className='nav cursor'>Help</div>
          <div className='nav cursor'>Contact us</div>
          <div className='nav cursor flex'>
            <div>English</div>
            <img src={Vector} alt='icon' style={{ marginLeft: '12px' }} />
          </div>
          <div className='nav cursor'>Sign Up</div>
          <img className='cursor' src={HomeIcon} alt='icon' />
        </Col>
      </Row>
      <Row>
        <Col span={2}></Col>
        <Col
          style={{
            paddingTop: '24px',
            paddingBottom: '109px',
          }}
          span={8}
        >
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
        <Col span={1}></Col>
        <Col
          span={12}
          style={{
            paddingTop: '51px',
            position: 'relative',
          }}
        >
          <img src={BannerImage} alt='banner' />
          <img className='logo-image' src={Logo} alt='logo' />
        </Col>
        <Col span={1}></Col>
      </Row>
    </div>
  );
}

export default App;
