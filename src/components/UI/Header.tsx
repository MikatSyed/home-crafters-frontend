import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { authKey } from '@/app/constants/storageKey';
import { useRouter } from 'next/navigation';
import { getUserInfo, removeUserInfo } from '../../../services/auth.service';
import { useLoggedUserQuery } from '@/redux/api/userApi';
const { Header: AntHeader } = Layout;



const Header = () => {
    const { role } = getUserInfo() as any;
    const {push} = useRouter();
    const { data } = useLoggedUserQuery(undefined);
    const user = data?.data;
    const profileImg = user?.profileImg;
    const lastProfileImg = profileImg && profileImg.length > 0 ? profileImg[profileImg.length - 1] : null;

    const logout = () => {
        removeUserInfo(authKey);
        push("/login")
    }

    const items: MenuProps["items"] = [
        {
          key: "1",
          label: (
            <Button onClick={logout} type="text" danger>
              Logout
            </Button>
          ),
        },
      ];

  return (
    <AntHeader style={{ backgroundColor: '#fff' }}>
      <Row justify="end" align="middle"  style={{
          height: "100%",
        }}>
             <p
          style={{
            margin: "0px 5px",
            color:"black",
           
          }}
        >
          {role}
        </p>
        <Dropdown menu={{ items }}>
          <Space wrap size={16}>
          <Avatar size={50} src={lastProfileImg} />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
