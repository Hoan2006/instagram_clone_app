import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom"; // import useNavigate

const ProfileTabs = () => {
    const navigate = useNavigate(); // khởi tạo useNavigate để chuyển trang

    return (
        <Flex
            w={"full"}
            justifyContent={"center"}
            gap={{ base: 4, sm: 10 }}
            textTransform={"uppercase"}
            fontWeight={"bold"}
        >
            <Flex borderTop={"1px solid white"} alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
                <Box fontSize={20}>
                    <BsGrid3X3 />
                </Box>
                <Text fontSize={12} display={{ base: "none", sm: "block" }}>
                    Posts
                </Text>
            </Flex>

            <Flex
                alignItems={"center"}
                p="3"
                gap={1}
                cursor={"pointer"}
                onClick={() => navigate("/saved")} // chuyển hướng tới trang /saved
            >
                <Box fontSize={20}>
                    <BsBookmark />
                </Box>
                <Text fontSize={12} display={{ base: "none", sm: "block" }}>
                    Saved
                </Text>
            </Flex>

            <Flex
                alignItems={"center"}
                p="3"
                gap={1}
                cursor={"pointer"}
                onClick={() => navigate("/likes")} // chuyển hướng tới trang /likes
            >
                <Box fontSize={20}>
                    <BsSuitHeart fontWeight={"bold"} />
                </Box>
                <Text fontSize={12} display={{ base: "none", sm: "block" }}>
                    Likes
                </Text>
            </Flex>
        </Flex>
    );
};

export default ProfileTabs;
