import React from 'react';
import { Row, Col, Typography, Card, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './styles.less';

const { Text, Title } = Typography;
const { Meta } = Card;

const data = [
    {
        title: 'Nueva cuenta con ARA',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, obcaecati impedit architecto optio ipsam ad cupiditate.',
        img: 'https://i.ibb.co/YfXHQ9h/img-03.jpg',
        mini: ''
    },
    {
        title: 'ARA RF',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, obcaecati impedit architecto optio ipsam ad cupiditate.',
        img: 'https://i.ibb.co/5cmNFRC/img-02.jpg',
        mini: ''
    },
    {
        title: 'Cuenta con ARA, Cofinanciamiento',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, obcaecati impedit architecto optio ipsam ad cupiditate.',
        img: 'https://i.ibb.co/Kmf3z0W/img-01.jpg',
        mini: ''
    },
]


export default function LandingBlogSection() {
    return (
        <>
            <Row className='top-blog'>
                <Col span={24}>
                    <div className='top-row add-pad'>
                        <div className='top-breadcrumb'>
                            <Title level={3}>Nuestro Blog ARA</Title>
                            <Button type='text' icon={<RightOutlined />}>Ver todos los artículos</Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='mid-blog'>
                {data.map(card => (
                    <Col className='color-5' span={8}>
                        <Card
                            bordered={false}
                            className='card-size'
                            cover={<img alt={card.title} src={card.img} />}
                            
                        >
                            <Meta
                                title={card.title}
                                description={card.description} />
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className='bottom-blog'>
            </Row>
        </>
    )
}
