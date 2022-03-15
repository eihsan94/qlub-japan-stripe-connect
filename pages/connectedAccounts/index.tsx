import React, { useEffect, useState } from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, FormControl, FormLabel, Input, SimpleGrid, Skeleton, Tag, TagLabel, TagLeftIcon, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import Layout from '../../components/layout';
import { FiCheckCircle } from 'react-icons/fi';

interface Props { }

function Index() {
    const [accounts, setAccounts] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        (async () => {
            setLoading(true)
            const { data } = await axios.get("/api/accounts/")
            setAccounts(data)
            setLoading(false)
        })()
    }, [])
    // add the checking statement descriptor wether it works or not here 
    // curl "https://api.stripe.com/v1/accounts/{account}" -u 'REPLACE_WITH_YOUR_SECRET_KEY':
    return (
        <Layout title='Connected Accounts'>
            <Accordion allowMultiple>
                {
                    loading
                        ? <Skeleton p={4} />
                        : accounts.map((a, i) =>
                            <AccordionItem key={i}>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            {a.business_profile.name || "Business name not set"}
                                        </Box>
                                        <SimpleGrid columns={Object.keys(a.capabilities).length} gap={4}>
                                            {Object.keys(a.capabilities).map((k: any, i: number) =>
                                                <Tag key={i} size={"md"} variant='solid' colorScheme="green" textAlign={"center"} >
                                                    <TagLabel>{k}</TagLabel>
                                                    {a.capabilities[k] === "active" ? <FiCheckCircle /> : "✖️"}
                                                </Tag>
                                            )}
                                        </SimpleGrid>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <pre>
                                        {JSON.stringify(a, null, 2)}
                                    </pre>
                                </AccordionPanel>
                            </AccordionItem>
                        )
                }
            </Accordion>
        </Layout>
    )
}

export default Index
