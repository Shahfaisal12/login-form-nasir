import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';


const SignUp = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div className='Login-form'>
      <div className="container-fluid m-0">
        <div className="row">
          <div className="col-md-4 vh-100 align-items-center p-0 d-none d-md-block">
            <div className="div">
              <div className="content-section mt-4">
                <div className="d-flex gap-2 flex-wrap align-items-center">
                  <h2>VACAY</h2>
                  <img src="assets/umrallah.svg" className='img-fluid' alt="" />
                </div>
                <p>Optimize your time off</p>
              </div>
              <img src="assets/side-img.svg"  className='img-fluid' alt=""/>
            </div>
          </div>
          <div className="col-md-8 p-0">
            <div className="form-card d-flex align-items-center px-0 px-md-5">
              <Form>
                <div className="container px-3 px-md-5">

                  <h3 className='mb-4'>Create Account</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <Link to='/' className="text-decoration-none social-btn px-2 px-md-3 py-2 d-flex gap-3 flex-wrap align-items-center">
                        <img src="assets/google-btn.svg" width={30} className='img-fluid' alt="" />
                        <p>Sign up with Google</p>
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <Link to='/' className="text-decoration-none social-btn px-2 px-md-3 mt-3 mt-md-0 py-2 d-flex gap-3 flex-wrap align-items-center">
                        <img src="assets/fb-btn.svg" width={30} className='img-fluid' alt="" />
                        <p>Sign up with Facebook </p>
                      </Link>
                    </div>
                  </div>
                  <Row>
                    <Col>
                      <TextField
                        id="standard-lastName-input"
                        label="Last Name"
                        type="text"
                        autoComplete="current-lastName"
                        variant="standard"
                        className='w-100 custom-textfield mt-3'
                      />
                    </Col>
                    <Col>
                      <TextField
                        id="standard-firstName-input"
                        label="First Name"
                        type="text"
                        autoComplete="current-firstName"
                        variant="standard"
                        className='w-100 custom-textfield mt-3'
                      />
                    </Col>
                    <div >
                      <Col>
                        <TextField
                          id="standard-email-input"
                          label="Eamil Address"
                          type="email"
                          autoComplete="current-email"
                          variant="standard"
                          className='w-100 custom-textfield mt-3'
                        />
                      </Col>
                    </div>
                    <div >
                      <Col>
                        <FormControl className='w-100 custom-textfield mt-3' variant="standard">
                          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                          <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Col>
                    </div>
                    <div>
                    <button type="button" className=' btn btn-submit w-100 mt-5' >Create Account</button>
                    <p className='custom-link mt-3'>Already have an account? <Link to='/signin' className='mx-2'> Log in</Link> </p>
                    </div>
                  </Row>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp