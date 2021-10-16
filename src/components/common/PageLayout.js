import React from 'react'
import styled from 'styled-components'

//all page content is rendered within, going to be rendered under header
const Content = styled.main`
max-width: 800px;
margin: 80px auto 0 auto;
padding: 0 16px;
box-sizing: border-box;

h1, h2, h3, h4, h5, h6{

}



`

const PageLayout = ({children}) => {
    return (
        <>
        <Content>
            {children} //pagecontent
        </Content>
            
        </>
    )
}

export default PageLayout
