import React from 'react'
import { Card, Avatar,Col} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined,DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const key = "deletable";
const ProductItem = ({id,title,description,price,category}) => {
  console.log("id",id);
  const navigate=useNavigate();
const { Meta } = Card;
  return (
      <>
      <Col span={6} key="column">
      <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={`https://loremflickr.com/320/240/dress?random=${id}`}
      />
    }
    actions={[
        <EyeOutlined key="eye" 
        onClick={()=>navigate(`/product/${id}`)}
        />,
      <EditOutlined key="edit" 
      // onClick={()=>navigate(`/editproduct/${id}`)}
      />,
      <DeleteOutlined key="delete" 
      // onClick={()=>handleChange(id)}
      />,
    ]}
  >
    <Meta
      avatar={<Avatar src={`https://joeschmoe.io/api/v1/random=${id}`} />}
      title={title}
      description={description}
    />
  </Card>,
  </Col>
  </>
  )
}

export default ProductItem