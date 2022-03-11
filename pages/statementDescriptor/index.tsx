import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, SimpleGrid, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import Layout from '../../components/layout';

interface Props { }

function Index(props: Props) {
    const { } = props
    const toaster = useToast()
    const [res, setRes] = useState<any>()
    const [STRIPE_SK, setSTRIPE_SK] = useState("")
    const [accountId, setAccountId] = useState("")
    const [statement_descriptor, setStatement_descriptor] = useState("")
    const [statement_descriptor_kana, setStatement_descriptor_kana] = useState("")
    const [statement_descriptor_kanji, setStatement_descriptor_kanji] = useState("")
    const [loading, setLoading] = useState(false)
    const submit = async () => {
        setLoading(true)
        try {
            const { data } = await axios.post("/api/statementDescriptor", {
                STRIPE_SK,
                accountId,
                statement_descriptor,
                statement_descriptor_kana,
                statement_descriptor_kanji,
            })
            setRes(data)
        } catch (error: any) {
            toaster({
                status: "error",
                title: error.status,
                description: error.response.data.message,
            })
        }
        setLoading(false)
    }
    return (
        <Layout title='Statement Descriptor'>
            <Box shadow="xl" borderRadius={"2em"} p={10} bg="white">
                <Text fontWeight={"bold"}>Descriptor設定</Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
                    <FormControl mt="10px">
                        <FormLabel fontSize={"14px"}>
                            stripe secret key
                        </FormLabel>
                        <Input onChange={evt => setSTRIPE_SK(evt.target.value)} />
                    </FormControl>
                    <FormControl mt="10px">
                        <FormLabel fontSize={"14px"}>
                            stripe connect 加盟店アカウントID
                        </FormLabel>
                        <Input onChange={evt => setAccountId(evt.target.value)} />
                    </FormControl>
                    <FormControl mt="10px">
                        <FormLabel fontSize={"14px"}>
                            Statement Descriptor名称 (Statement Descriptor Prefix)
                        </FormLabel>
                        <Input onChange={evt => setStatement_descriptor(evt.target.value)} />
                    </FormControl>
                    <FormControl mt="10px">
                        <FormLabel fontSize={"14px"}>
                            Statement Descriptor名称カナ (Statement Descriptor kana Prefix)
                        </FormLabel>
                        <Input onChange={evt => setStatement_descriptor_kana(evt.target.value)} />
                    </FormControl>
                    <FormControl mt="10px">
                        <FormLabel fontSize={"14px"}>
                            Statement Descriptor名称漢字 (Statement Descriptor kanji Prefix)
                        </FormLabel>
                        <Input onChange={evt => setStatement_descriptor_kanji(evt.target.value)} />
                    </FormControl>
                </SimpleGrid>
                <Button disabled={
                    !accountId
                    || !statement_descriptor
                    || !statement_descriptor_kana
                    || !statement_descriptor_kanji
                }
                    isLoading={loading}
                    onClick={() => submit()} mt="1em" colorScheme={"messenger"}>
                    設置する
                </Button>
                <Box p={4}>
                    <pre>
                        {JSON.stringify(res, null, 2)}
                    </pre>
                </Box>
            </Box>
        </Layout>
    )
}

export default Index
