import React from 'react'
import { Typography, Row, Col, Button, Space } from 'antd'
import './styles.less'

import { RightOutlined, CalendarOutlined, PhoneFilled } from '@ant-design/icons'

//images
import AraSinAhorro from '../../../assets/media/image/ara-sinahorro.jpg';
import AraIcon from '../../../assets/media/image/ara-icon.png';

const { Title, Text } = Typography;

export default function LandingBanner() {
    return (
        <>
            <Row gutter={16} justify='start'>
                <Col span={24}>
                    <section className='top'>
                        <div className='top-row'>
                            <div className='top-breadcrumb'>
                                <Button type='text' icon={<RightOutlined />}>Regresar a Créditos</Button>
                            </div>
                        </div>
                        <div className='top-row'>
                            <Title level={2}>Opciones de crédito</Title>
                            <Title level={5}>Tu mejor inversión es casas ARA</Title>
                        </div>
                    </section>
                </Col>
            </Row>

            <Row gutter={16} justify='center' className='mid'>
                <Col span={12}>
                    <section className='left color-1'>
                        <div className='inner-left color-3'>
                            <div className='left-image'>
                                <img alt='ARA Sin Ahorro' src={AraSinAhorro} className='ara' />
                            </div>
                            <Space direction='vertical' size='large'>
                                <Title level={5}>Cuenta con ARA</Title>
                                <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates natus aliquam porro esse, vero odio eligendi asperiores sunt dolor, voluptatibus ea id. Delectus harum at doloremque perferendis perspiciatis cupiditate.</Text>
                                <Button shape='round'>Solicitar información</Button>
                            </Space>
                        </div>
                    </section>
                </Col>

                <Col span={12}>
                    <section className='right color-2'>
                        <div className='inner-right color-4'>
                            <div className='inner-right-header'>
                                <Title level={5}>Información de Contacto</Title>
                                <img alt='Icono Ara' src={AraIcon} className='ara-icon' />
                            </div>
                            <div className='inner-right-body'>
                                <Space direction='vertical' size='large'>
                                    <Text>¿Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates natus aliquam porro esse? </Text>
                                    <Text strong>contacto@ara.com.mx</Text>
                                    <Text strong>¡Llamanos gratis!</Text>
                                </Space>
                                <Space direction='vertical' size='middle'>
                                    <Button className='large' icon={<PhoneFilled />}>800 022 0581 </Button>
                                    <Button className='large' icon={<CalendarOutlined />}>Lunes a Viernes 9:00 - 21:00</Button>
                                    <Button className='large' icon={<CalendarOutlined />}>Fin de Semana 10:00 - 18:00 </Button>
                                </Space>
                                <div style={{margin:10}}>
                                    <Space direction='vertical'>
                                        <Text strong>En el extranjero</Text>
                                        <Button className='large' icon={<PhoneFilled />}>+1 666 157 0005</Button>
                                    </Space>
                                </div>
                            </div>
                            <div className='inner-right-footer'>
                                <Space direction='vertical' size='large'>
                                    <Button className='uppercase' shape='round'>Solicitar información</Button>
                                </Space>
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>
            <Row className='bottom'></Row>
        </>
    )
}
