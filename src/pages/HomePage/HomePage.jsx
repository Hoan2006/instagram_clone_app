import { Box, Container, Flex } from "@chakra-ui/react";
import HomePosts from "../../components/FeedPosts/HomePosts"; // Thay đổi theo đường dẫn đúng
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = ({ userId }) => {
    return (
        <Container maxW={"container.lg"}>
            <Flex gap={20}>
                <Box flex={2} py={10}>
                    <HomePosts userId={userId} /> {/* Sử dụng HomePosts thay vì FeedPosts */}
                </Box>
                <Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"}>
                    <SuggestedUsers />
                </Box>
            </Flex>
        </Container>
    );
};

export default HomePage;
