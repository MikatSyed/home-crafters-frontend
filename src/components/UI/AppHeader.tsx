import { Card, Col, Row } from 'antd';
import Image from 'next/image'; // Import the Image component
import hero from "../../assets/troy-mortier-FW1XhtGsdBA-unsplash (1).jpg"
const AppHeader = () => {
  return (
   
    <Row style={{marginTop:'100px'}}>
    <Col md={12} sm={22} xs={23}><Card >
          
           <div >
            <Image alt="" src={hero} width={600} height={400} />
      </div>
         </Card></Col>
    <Col md={12} sm={22}  xs={23}> <Card hoverable>
        
          <div style={{ textAlign: 'center' }}>
             <h3>Renovation Renovation Service</h3>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum at inventore sed tenetur nisi quam enim libero, voluptas voluptatum, autem totam odio, tempore soluta hic delectus fugiat? Similique iusto rerum quod vel doloremque amet numquam delectus hic fugit temporibus aliquid dolor esse molestiae modi nemo, fugiat velit cumque unde aliquam dolorum odit. Modi inventore cupiditate autem voluptatum sequi, similique totam blanditiis maxime earum qui dolorem esse, architecto odit officiis a aspernatur reprehenderit fuga laboriosam aperiam cumque! Aperiam quos quas dolorem, adipisci quae officia error dolor distinctio eius molestias iusto quia voluptates dolore ab earum? Maiores minus unde obcaecati, quis sed accusamus maxime quod ipsum ad officia, ut quaerat aliquam ex distinctio at provident nobis consequuntur perferendis veniam reprehenderit labore placeat? A dolorem necessitatibus consectetur odit rerum tempore voluptatem dolorum beatae, ipsam adipisci doloribus eum veritatis earum aspernatur deleniti odio alias cupiditate quis placeat. Nesciunt, magni, consequuntur enim eum impedit dolorum repudiandae cupiditate sint vero voluptatem nulla quam, sapiente tenetur! Officiis iste eos quasi fugiat dignissimos consectetur, saepe possimus quibusdam accusantium veritatis molestias. Est obcaecati mollitia distinctio provident, voluptas officiis omnis culpa suscipit! Nulla, beatae perspiciatis minus commodi doloribus quisquam nesciunt ab eos aperiam. Eum rerum necessitatibus blanditiis veniam quaerat ad.</p>
          </div>
        </Card></Col>
  </Row>
  );
};

export default AppHeader;
