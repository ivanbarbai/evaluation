import React from 'react';
import { Layout } from 'antd';
import './App.less';

//Content components
import LandingPage from './pages/LandingPage/LandingPage'

//Layout components
import { Header, Footer } from './components/index'
const { Content } = Layout


export default function App() {
  return (
    <Layout>
      <Header />
      <Content className='content'>
        <LandingPage />
      </Content>
      <Footer />

    </Layout>
  )
}
