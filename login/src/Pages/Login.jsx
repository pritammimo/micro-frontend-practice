import React,{useState,useEffect} from 'react'
import { Input,Button,Row, Col,Card } from 'antd';
import { useNavigate} from "react-router-dom";
import { useMutation } from 'react-query';
import axios from 'home/axios';
import { setStorage,getStorage } from 'home/api';
import { tokenvalue } from "../helper/localStorage";
const Login = () => {
  const navigate=useNavigate();
   const token=tokenvalue();
   useEffect(() => {
    if(token !==null){
      navigate("/products")
    }
   }, [token]);
 
  const [navigatedata,setnavigatedata]=useState("");
  const [signin, setSignin] = useState({
    email:"",
    password:""
  });
 
  const handleChange=(e)=>{
    setSignin({...signin,[e.target.name]:e.target.value})
   }
   const { isLoading: isLogin, mutate: postLogin } = useMutation(
    async (data) => {
      console.log("data",data);
      return await axios.post(`/signin`, 
      data
      );
    },
    {
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        console.log("result",result);
        setStorage("testtoken",result.data.accessToken)
       
        // setPostResult(fortmatResponse(result));
      },
      onError: (err) => {
        // setPostResult(fortmatResponse(err.response?.data || err));
      },
    }
  );
   const handleSubmit=async(e)=>{
    console.log("signin",signin);
    await postLogin(signin)
  }
  

  return (
    <Card title="Login">
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

export default Login