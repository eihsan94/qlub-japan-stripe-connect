import { FC } from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import { title } from 'process'
import Sidebar from './sidebar'

interface Props {
    title: string
}

const Layout: FC<Props> = ({
    title,
    children
}) => {
    return (
        <Box>
            <Sidebar>
                <Text fontSize="4xl" fontWeight={"bold"}>
                    {title}
                </Text>
                <Box w="100%" p={4}>
                    {children}
                </Box>
            </Sidebar>
        </Box>
    )
}

export default Layout
