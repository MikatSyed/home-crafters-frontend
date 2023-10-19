import { Avatar, Card, Rate, Row } from 'antd';
const ReviewCard = ({ review }:any) => {
  console.log(review);
    const { user, rating, comment } = review;
  
    return (
      <Card style={{ width: 300, margin: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <Avatar src={user?.profileImg[0]} /> {/* Assuming profileImg is an array and you want to display the first image */}
          <div style={{ marginLeft: 16 }}>
            <h2 style={{ marginBottom: 0 }}>{user?.name}</h2>
            <p style={{ marginBottom: 0 }}>{user?.email}</p>
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          Rating: <Rate disabled allowHalf defaultValue={rating} />
        </div>
        <div>
          <h4>Comment: {comment}</h4>
        </div>
      </Card>
    );
  };

  export default ReviewCard;