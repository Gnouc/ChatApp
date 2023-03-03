import { Collapse, Typography } from 'antd'
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
    `
  return (
    <Collapse ghost defaultActiveKey={['1']}>
        <Panel header="Danh sách các phòng" key='1'>
            <Linkstyle>Room1</Linkstyle>
            <Linkstyle>Room2</Linkstyle>
            <Linkstyle>Room3</Linkstyle>
        </Panel>
    </Collapse>
  )
}
