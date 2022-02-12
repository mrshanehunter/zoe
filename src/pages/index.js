import * as React from "react"
import styled from "styled-components"
import Seo from "../components/seo"
import Layout from "../components/layout"

const ContentContainer = styled.div`
  width: 50vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ContentContainer>
      <h1>Z</h1>
      <h1>O</h1>
      <h1>E</h1>
    </ContentContainer>
  </Layout>
)

export default IndexPage
