import React,{useState,useEffect} from 'react'
import { Input,Button,Row, Col,Card } from 'antd';
import { useNavigate} from "react-router-dom";

const Register = () => {
  const navigate=useNavigate();
  const [navigatedata,setnavigatedata]=useState("");
  const [signin, setSignin] = useState({
    email:"",
    password:""
  });
  const handleChange=(e)=>{
    setSignin({...signin,[e.target.name]:e.target.value})
   }
   const handleSubmit=async(e)=>{
    
  }
  

  return (
    <Card title="Register">
      <Row gutter={[0, 20]}>
      <Col span={24}>
      <Input size="large" 
   placeholder="email"
   value={signin?.email}
   name="email"
   onChange={handleChange} 
     />
      </Col>
      
    <Col span={24}>
    <Input size="large" 
    placeholder="password"
    value={signin?.password}
   name="password"
   onChange={handleChange}  />
    
    </Col>
    <Col span={24}>
    <Button type="primary" size="large" onClick={handleSubmit} 
     >
          Submit
        </Button>
       </Col>
       </Row>
    </Card>
  )
}

export default Register