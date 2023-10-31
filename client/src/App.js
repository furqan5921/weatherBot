import { Box, Button, Container, Flex, Heading, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

import "./App.css"
import { useState } from "react";
import Response from "./components/Response";
function App() {
  const [message, setMessage] = useState("")
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("http://localhost:8081/chat", {
        method: "POST",
        body: JSON.stringify({ message }),
        headers: {
          "content-type": "application/json"
        }
      })
      const responseData = await res.json()
      setData(responseData)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
  }
  return (
    <Container bg={"#f5f8fb"} my={"14px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;"} border={"1px solid red"} h={"100vh"}>
      <Flex height={"100%"} flexDirection={"column"} gap={"1rem"}>
        <Heading textDecoration={"underline"} textAlign={"center"} color={"#8c48af"}>Weather Bot</Heading>
        <Box>
          <form onSubmit={handleSubmit}>
            <InputGroup >
              <Input value={message} onChange={(e) => setMessage(e.target.value)} w={"80%"} placeholder="Enter your message here..." />
              <InputRightElement w={"20%"}>
                <Button type="submit" isLoading={loading} variant={"solid"} color={"#f5f8fb"} bg={"#8c48af"} size={"lg"} >
                  Generate
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
        </Box>
        {data && <Response data={data} />}
      </Flex>
    </Container>

  );
}

export default App;
