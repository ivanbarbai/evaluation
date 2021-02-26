import React, { useState } from 'react';
import './styles.less'
import { Menu, Button, Space, Affix } from 'antd';
import { PhoneFilled } from '@ant-design/icons';

import logo from '../../assets/logo/logo.png';

const menu = [
    {
        label: 'Desarrollos',
        path: '/desarrollos'
    },
    {
        label: 'Conceptos',
        path: '/conceptos'
    },
    {
        label: 'Promociones',
        path: '/promociones'
    },
    {
        label: 'Creditos',
        path: '/creditos'
    },
    {
        label: 'Blog',
        path: '/blog'
    },
    {
        label: 'Convenios',
        path: '/convenios'
    },
    {
        label: 'Contacto',
        path: '/contacto'
    },
]

export default function Header() {
    const [sticky, setSticky] = useState(0);

    return (
        <Affix offsetTop={sticky}>
            <div className='header' onScroll={() => setSticky(sticky)}>
                <div className='logo'>
                    <a href='/'><img src={logo} alt='Casas Ara' /></a>
                </div>
                <div className='nav'>
                    <Menu mode='horizontal'>
                        {menu.map(menu => (
                            <Menu.Item key={menu.label} ><a href={menu.path}>{menu.label}</a></Menu.Item>
                        ))}
                    </Menu>
                    <div className='contact-buttons'>
                        <Space size='middle'>
                            <Button icon={<PhoneFilled />} shape='round' className='phone-number'>800 022 0581</Button>
                            <Button shape='round' className='need-help'>¿Necesitas asesoría?</Button>
                        </Space>
                    </div>
                </div>
            </div>
        </Affix>
    )
}
