import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Layout from '../components/layout'
import HeroLottie from '../components/lottie/HeroLottie'

const Home: NextPage = () => {
  return (
    <Layout title={"🇯🇵QLUB JAPAN STRIPE CONNECT"}>
      <Box w="500px">
        <HeroLottie style={{
          height: 500
        }} />
      </Box>
    </Layout>
  )
}

export default Home
