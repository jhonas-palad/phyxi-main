import { MotiView } from 'moti';
import {Box,Center, Text, FlatList, ScrollView, Pressable, Image, Icon, Heading, HStack, IconButton, Badge} from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { ServiceNavigationProp, ServiceRouteProp } from '../navigation';
import { services, Service } from '../data/category';
import ServiceDetailHeader from './headers/ServiceDetailHeader';
import ServiceCategories from './ServiceCategories';
import { makeID } from '../utils/uid';
import {Feather} from '@expo/vector-icons';




const ServiceDetails: React.FC = () => {
    const navigation = useNavigation<ServiceNavigationProp>();
    const route = useRoute<ServiceRouteProp>();
    const [packages, setPackages] = useState([]);
    const [serviceDetails, setServiceDetails] = useState<Omit<Service, 'icon' >>({
        id: '',
        label: '',
        categories: [],
        packages: []
    });
    const [packageCategories, setPackageCategories] = useState([]);
    
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    }, []);

    useEffect(()=> {
        const service = services.filter(value => value.id === route.params.serviceId)[0];
        if(!(service.categories.find((item)=> item.categoryName === 'All'))){
            service.categories = [{id: 'a0482a93-8790-aeea287f08a2', categoryName: 'All'},...service.categories]
        }
        setServiceDetails((prevDetails)=> ({...service}));
        setPackageCategories([...service.packages]);
    }, [route]);

    const handleCategoryFilter = React.useCallback((categoryId : string)=> {
        console.log(categoryId);
        if(categoryId === 'a0482a93-8790-aeea287f08a2'){
            setPackageCategories([...serviceDetails.packages])
        }
        else{
            setPackageCategories([...serviceDetails.packages.filter( item => item.categories.includes(categoryId))])
        }
    }, [serviceDetails]);


    return (
        <Box safeAreaTop flex={1} >
            <ServiceDetailHeader serviceName={serviceDetails.label} navigation={navigation}/>
            <ScrollView
                stickyHeaderIndices={[0]}
            >
                <Box paddingTop={5} mb={3} bg="coolGray.100" paddingY={4} borderBottomWidth={1} borderBottomColor="coolGray.300">
                    <FlatList
                        horizontal
                        data={serviceDetails.categories}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(category)=> category.id}
                        renderItem={
                            ({item, index})=>{
                                return(
                                    <Pressable key={item.id} onPress={()=>handleCategoryFilter(item.id)} marginLeft={index === 0 ? 5: 0} marginRight={5} rounded={12} paddingX={6} paddingY={2} bg="orange.400">
                                        <Text fontWeight="600" fontSize="md">{item.categoryName}</Text>
                                    </Pressable>
                                )
                            }
                        }
                    /> 
                </Box>
                <Text fontSize="lg" fontWeight="600" ml={3}>Bedroom</Text>
                {
                    packageCategories.map((_package)=>{
                        return (
                            <Pressable key={_package.id} borderBottomColor="coolGray.200" borderBottomWidth={1} rounded={12} padding={3} mx={3} flexDir="row" mb={5}>
                                <Center mr={3} paddingBottom={3}>
                                    <Box mb={3} paddingX={3} rounded={12} paddingTop={3} bg="darkBlue.400">
                                        <Image rounded={8} size="xl" alt="women_clean" resizeMode="contain" source={require('../../assets/images/women_bucket.png')} />
                                    </Box>
                                    <HStack alignSelf="stretch" alignItems="center" justifyContent="space-between">
                                        <IconButton bg="darkBlue.200" rounded={12} icon={<Icon as={Feather} color="coolGray.100" name="minus" size="md"/>} />
                                            <Text>0</Text>
                                        <IconButton bg="darkBlue.200" rounded={12} icon={<Icon as={Feather} name="plus" color="coolGray.100" size="md"/>} />
                                    </HStack>
                                </Center>
                                
                                <Box flex={1}>
                                    <Badge bg="green.600" _text={{color:'white', fontWeight:'600'}} rounded={12} alignSelf="initial">20% discount</Badge>
                                    <Text fontSize="lg" color="darkBlue.800" fontWeight="bold">{_package.packageName}</Text>
                                    <Text fontSize="md" fontWeight="semibold">${_package.packageRate}</Text>
                                    <Box flexDir="column" >
                                            {
                                                _package.packageDescription.map((description)=>{
                                                    return(
                                                        <Text key={makeID()} color="coolGray.500">
                                                            {description}
                                                        </Text>
                                                    )
                                                })
                                            }
                                        </Box>
                                </Box>

                            </Pressable>
                        );
                    })
                }
            </ScrollView>
        </Box>
    )
}

export default ServiceDetails