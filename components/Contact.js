import React from 'react'
import {Box, Flex, Button, 
    Text, Textarea, 
    Heading,
    Icon,
    FormControl,
    FormLabel,
    Input,
    Center} from '@chakra-ui/react'
import {Formik,Field,Form} from 'formik'
import {BsGeoAlt, BsPhone} from 'react-icons/bs'
import {GoMailRead} from 'react-icons/go'

export default function Contact() {

    const CustomField=({label,value,place_holder,onlySingle})=>{
       return(<Field
        name={value}
       // validate={validateAuthorName}
        width="80%"
      >
        {({ field, form }) => (
          <FormControl
            // isInvalid={
            //   form.errors.authorName &&
            //   form.touched.authorName
            // }
          >
            <FormLabel htmlFor={value} fontWeight="semibold" fontSize="xl">{label}</FormLabel>
            {onlySingle?(<Input
              bg="white"
              width="80%"
              mb={5}
              {...field}
              id={value}
              placeholder={place_holder?place_holder:''}
              
            />):(<Textarea {...field}
                id={value}
                bg="white"
                width="80%"
                placeholder={place_holder?place_holder:''}/>
                )
            }
            {/* <FormErrorMessage>
            {form.errors.authorName}
            </FormErrorMessage> */}
          </FormControl>
        )}
      </Field>)
    }

    return (
        <Box>
            <Center><Heading as="h2" size="3xl" my={10} color="gray.700">Contact Info</Heading></Center>
            {/**Here starts the contact and the address page */}
            <Flex flexDir={{base:'column-reverse',lg:'row'}}>
                <Box flexGrow={1} 
                borderWidth="5px" borderColor="teal.400" borderLeftRadius="10px"
                color="teal.700" bg="teal.50" 
                boxShadow="xl" p={10}>
                    <Heading size="xl">My Contact Information</Heading>
                    <Text fontSize="3xl" fontWeight="semibold" mt={[5,5,16,16]}>
                        <Icon as={BsGeoAlt} boxSize="1.75rem" mb={3}/> {' '} Address
                    </Text>
                    <Text fontSize="xl" my={2}>DH-501 Abhimanyu Apartments,<br/>Vasundhara Enclave
                        <br/>Delhi-110096
                    </Text>
                    <Text fontSize="3xl" fontWeight="semibold" mt={[5,5,10,10]}>
                        <Icon as={BsPhone} boxSize="1.75rem" mb={3}/> {' '} Let's Talk
                    </Text>
                    <Text fontSize="xl" my={1}>9650045344</Text>
                    <Text fontSize="3xl" fontWeight="semibold" mt={[5,5,10,10]}>
                        <Icon as={GoMailRead} boxSize="1.75rem" mb={3}/> {' '} Send Message to Gmail
                    </Text>
                    <Text fontSize="xl" my={1}><a>ashu28anurag@gmail.com</a></Text>
                </Box>
                {/**Contact with msg page */}
                <Box flexGrow={2} boxShadow="xl"
                borderWidth="5px" borderColor="purple.500" 
                borderRightRadius="10px" borderLeftRadius={{base:'10px',lg:'0px'}}
                 bg="purple.100" p={10}>
                    <Formik 
                    initialValues={{name:'',phone:'', msg:'', email:'' }}
                    onSubmit={(val,action)=>{
                        console.log('submitted',val);

                        action.resetForm({});
                    }}>
                        <Form>
                       <CustomField value='name' label='Name' place_holder="Enter Name"
                       onlySingle={true}/>
                        <CustomField value='email' label='E-Mail' place_holder="Enter your email address"
                       onlySingle={true}/>
                       <CustomField value='phone' label='Phone No' place_holder="Enter Phone"
                       onlySingle={true}/>
                       <CustomField value='msg' label='Message' place_holder="Feel free to reach me." 
                       onlySingle={false}/>
                       <Button colorScheme="purple" type="submit">Create Item</Button>
                       </Form>
                    </Formik>
                </Box>
            </Flex>
        </Box>
    )
}
