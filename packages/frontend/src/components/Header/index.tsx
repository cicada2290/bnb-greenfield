import {
  Box,
  Flex,
  Container,
  Heading,
} from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box px={4} bgColor="gray.100">
      <Container maxW="container.lg">
        <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
          Hoge
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
