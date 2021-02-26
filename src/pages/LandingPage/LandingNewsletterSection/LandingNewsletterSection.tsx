import React from 'react';
import { Row, Col, Typography, Input, Space } from 'antd';
import { MailOutlined } from '@ant-design/icons';

import './styles.less'

const { Text, Title } = Typography;

export default function LandingNewsletterSection() {
    return (
        <>
            <Row gutter={16} className='top-row color-5 bg-news'>
                <Col span={12} className='justify' >
                    <Title level={3} className='uppercase'>Newsletter</Title>
                    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates natus aliquam porro esse, vero odio eligendi asperiores sunt dolor, voluptatibus ea id.</Text>
                </Col>
                <Col span={12} className='justify' >
                    <Space direction='vertical'>
                        <Input className='email-news' placeholder='Escriba su Email' suffix={<MailOutlined />} />
                    </Space>
                </Col>
            </Row>
        </>
    )
}
