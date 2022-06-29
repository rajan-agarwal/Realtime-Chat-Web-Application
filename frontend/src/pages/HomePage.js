import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Login from '../components/authentication/login'
import Signup from '../components/authentication/signup'
import { useHistory } from "react-router";
import { useEffect } from "react";


const HomePage = () => {
   const history = useHistory();

   useEffect(() => {
     const user = JSON.parse(localStorage.getItem("userInfo"));

     if (user) history.push("/chats");
   }, [history]);

  return (
    <Container maxW="xl" centerContent p={8} className='boxx'>
      <Box
        bg={"white"}
        w="100%"
        p={4}
        borderRadius="lg"     
      >
        <Tabs variant="soft-rounded" colorScheme="green">
          
          <TabList mb='1em'>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Signup</Tab>
          </TabList>

          <TabPanels>
            
            <TabPanel>
              <Login />
            </TabPanel>

            <TabPanel>
              <Signup />
            </TabPanel>

          </TabPanels>

        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
