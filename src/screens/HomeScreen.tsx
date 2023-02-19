import { Box,Button, Text,HStack,  ScrollView, Pressable, Flex, Spacer, Badge, Image, Heading, Divider, IconButton, Icon } from 'native-base';
import { useWindowDimensions, ImageBackground } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { ServiceCategories, Header } from '../components';
import { categoryData } from '../data/category';
import {Ionicons} from '@expo/vector-icons';
import React from 'react';


const {useEffect, useState, useRef, useCallback} = React;

const HomeScreen: React.FC = () => {
    const {height, width} = useWindowDimensions();
    const navigation = useNavigation();
    const [categoryLabel, setCategoryLabel] = useState("");
    const [data] = useState([...categoryData]);
    useEffect(()=> {
        navigation.setOptions(({
            header: ()=> {
                return <Header/>
            }
        }))
    }, [])
    useEffect(()=> {
        setCategoryLabel(categoryData[0]?.label);
    }, []);
    useEffect(() => {
        console.log(categoryLabel);
    }, [categoryLabel]);
    const categoryPress = useCallback((item: any, itemIndex: number) => {
        setCategoryLabel(item?.label);
    }, []);

    return (
        <>
        <ScrollView flex={1}
            stickyHeaderIndices={[1]}
            bg="coolGray.100"
        >   
            <Box flexDir="row" alignItems="center">
                <Box ml={5} flex={0.5}>
                    <Heading color="orange.600">
                        What services do you need?
                    </Heading>
                    <Flex mt={3} direction="row">
                        <Text>Aj</Text>
                        <Divider bg="emerald.500" thickness="1" mx="2" orientation="vertical" />
                        <Text>Aspen</Text>
                        <Divider bg="indigo.500" thickness="1" mx="2" orientation="vertical" />
                        <Text>Bryan</Text>
                    </Flex>
                </Box>
                <Image flex={0.6} source={require('../../assets/images/cleaning_bucket1.png')} resizeMode='cover' size="2xl" alt="cleaning_bucket"/>
            </Box>
            <Box borderColor="muted.300" borderBottomWidth={0.3} bg="coolGray.100">
                <ServiceCategories categoryPress={categoryPress} data={data}/> 
            </Box>

            <Box flex={1}>
                <Pressable mt={5} mx={5} onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5">
                    
                </Pressable>
                <Pressable mt={5} mx={5} onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5">
                    <Box>
                        <HStack alignItems="center">
                            <Badge colorScheme="darkBlue" 
                                _text={{
                                    color: "white"
                                    }} 
                                variant="solid" rounded="4">
                                Business
                            </Badge>
                            <Spacer  />
                            <Text fontSize={10} color="coolGray.800">
                                1 month ago
                            </Text>
                            
                        </HStack>
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                            {categoryLabel}
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            Unlock powerfull time-saving tools for creating email delivery and
                            collecting marketing data
                        </Text>
                        <Flex>
                            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                            Read More
                            </Text>
                        </Flex>
                    </Box>
                </Pressable>
                <Pressable mt={5} mx={5} onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5">
                    <Box>
                        <HStack alignItems="center">
                            <Badge colorScheme="darkBlue" 
                                _text={{
                                    color: "white"
                                    }} 
                                variant="solid" rounded="4">
                                Business
                            </Badge>
                            <Spacer  />
                            <Text fontSize={10} color="coolGray.800">
                                1 month ago
                            </Text>
                            
                        </HStack>
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                            {categoryLabel}
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            Unlock powerfull time-saving tools for creating email delivery and
                            collecting marketing data
                        </Text>
                        <Flex>
                            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                            Read More
                            </Text>
                        </Flex>
                    </Box>
                </Pressable>
                <Pressable m={5} onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5">
                    <Box>
                        <HStack alignItems="center">
                            <Badge colorScheme="darkBlue" 
                                _text={{
                                    color: "white"
                                    }} 
                                variant="solid" rounded="4">
                                Business
                            </Badge>
                            <Spacer  />
                            <Text fontSize={10} color="coolGray.800">
                                1 month ago
                            </Text>
                            
                        </HStack>
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                            {categoryLabel}
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            Unlock powerfull time-saving tools for creating email delivery and
                            collecting marketing data
                        </Text>
                        <Flex>
                            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                            Read More
                            </Text>
                        </Flex>
                    </Box>
                </Pressable>
                
            </Box>
        </ScrollView>
        {/* <Box flexDir="row" bg="amber.400" style={{position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            Proceed
            <IconButton
            zIndex={2}
                bg="amber.100"
                icon={<Icon as={Ionicons} name="arrow-forward-circle-outline" size="xl"/>}
            />
        </Box> */}
            <Button position="absolute" shadow={3} rounded="full" bottom={5} bg="orange.600" alignSelf="center" onPress={()=>console.log("QWE")}>
                <Text color="coolGray.50" fontWeight={500}>Proceed</Text>
                {/* <Icon as={Ionicons} name="arrow-forward-circle-outline" size="xl"/> */}
            </Button>
            {/* <IconButton
                w={width * .10}
                style={{position: 'absolute', right: "50%", transform:[ {translateX: 25 }], bottom: 0, justifyContent: 'center', alignItems: 'center'}}
                bg="amber.100"
                icon={<Icon as={Ionicons} name="arrow-forward-circle-outline" size="xl"/>}
            /> */}

        </>
    )
}

export default HomeScreen