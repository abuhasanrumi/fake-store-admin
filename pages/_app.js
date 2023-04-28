import '@/styles/globals.css'
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { RiDashboardFill, RiFileAddFill, } from "react-icons/ri"
import { useRouter } from 'next/router';
import { FaList, } from "react-icons/fa"
import { BsPeopleFill, BsFillCartCheckFill } from "react-icons/bs"
const { Header, Sider, Content } = Layout;
import Link from "next/link"
import Image from 'next/image';

export default function App({ Component, pageProps }) {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: <Link to="#">Profile</Link>,
      key: 'setting',
    },
    {
      type: 'divider',
    },
    {
      label: <Link>Sign Out</Link>,
      key: 'sign-out',
    }
  ];
  const router = useRouter();

  const { noLayout } = Component;

  if (noLayout) {
    return <Component {...pageProps} />;
  }

  return (
    <>

      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <h2 className="text-white text-xl py-6 font-semibold text-center">
              <span className="sm-logo">FS</span>
              <span className="lg-logo">FakeStore</span>
            </h2>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/']}
            onClick={({ key }) => {
              if (key == "signout") {
                // signout code
              } else {
                router.push(`/${key}`);
              }
            }}
            items={[
              {
                key: '/dashboard',
                icon: <RiDashboardFill className='fs-5' />,
                label: 'Dashboard',
              },

              {
                key: 'orders',
                icon: <BsFillCartCheckFill className='fs-5' />,
                label: 'Orders',
              },
              {
                key: 'customers',
                icon: <BsPeopleFill className='fs-5' />,
                label: 'Customers',
                children: [
                  {
                    key: 'addCustomer',
                    icon: <RiFileAddFill className='fs-5' />,
                    label: 'Add Customer'
                  },
                  {
                    key: 'customerList',
                    icon: <FaList className='fs-5' />,
                    label: 'Customer List'
                  }
                ]
              },
              {
                key: 'products',
                icon: <BsPeopleFill className='fs-5' />,
                label: 'Products',
                children: [
                  {
                    key: 'addProduct',
                    icon: <RiFileAddFill className='fs-5' />,
                    label: 'Add Product'
                  },
                  {
                    key: 'productList',
                    icon: <FaList className='fs-5' />,
                    label: 'Product List'
                  }
                ]
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header className='flex justify-between items-center ps-1 pe-5' style={{ padding: 0, background: colorBgContainer }}>
            <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setCollapsed(!collapsed)} style={{ fontSize: '16px', width: 64, height: 64 }} />

            <div className='flex items-center'>
              <Image className='w-12 h-12 rounded-full mr-2' src='https://blog.kingland.com/hubfs/leadership-2022/Leadership_Matt-Good.jpg' width="12" height="12" alt='Profile Image' />
              <Link href="/" className='px-4 text-white bg-red-500'>Sign Out</Link>
            </div>
          </Header>

          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Component {...pageProps} />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
