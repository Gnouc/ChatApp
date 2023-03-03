import { PlusSquareOutlined } from '@ant-design/icons/lib/icons';
import { Button, Collapse, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components';

export default function RoomList() {
    const {Panel} = Collapse;
    const PannelStyle = styled(Panel)`
        &&&{
            .ant-collapse-header, p{
                color: white;
            }
            .ant-collapse-content-box{
                padding: 0 40px;
            }
            .ant-collapse-header-text{
                color: white;
            }
        }
    `
    const Linkstyle = styled(Typography.Link)`
        display:block;
        margin-bottom: 5px;
        color: white;

        .addroom{
            color: white;
            padding: 0;

        }
    `
  return (
    <Collapse ghost defaultActiveKey={['1']}>
        <PannelStyle header="Danh sách các phòng" key='1'>
            <Linkstyle>Room1</Linkstyle>
            <Linkstyle>Room2</Linkstyle>
            <Linkstyle>Room3</Linkstyle>
            <Button className='addroom' icon={<PlusSquareOutlined/>}>Thêm Phòng</Button>
        </PannelStyle>
    </Collapse>
  )
}
