import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './styles.less';

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

export default function LandingCardsSection() {
    return (
        <>
            <Row className='card-section' gutter={16}>
                {data.map(card => (
                    <Col className='color-5' span={8}>
                        <Card
                            bordered={false}
                            className='card-size shadow'
                            cover={<img alt={card.title} src={card.img} />}
                            actions={[<Button type='text' icon={<RightOutlined />}>Más información</Button>]}
                        >
                            <Meta
                                title={card.title}
                                description={card.description} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
