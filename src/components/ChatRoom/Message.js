import { Avatar, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'

export default function Message({text , displayName , createAt , photoURL}) {
    const WrapperStyled = styled.div`
    margin-bottom: 10px;
    .author{
        margin-left: 5px;
        font-weight: bold;
    }
    .date{
        margin-left: 10px;
        font-size: 11px;
        color:  #a7a7a7;
    }
    .content{
        margin-left: 30px;
    }
    `
  return (
    <WrapperStyled>
        <div>
            <Avatar size='small' src={photoURL}>A</Avatar>
            <Typography.Text className='author'>{displayName}</Typography.Text>
            <Typography.Text className='date'>{createAt}</Typography.Text>
        </div>
        <Typography.Text className='content'>{text}</Typography.Text>

    </WrapperStyled>
  )
}
