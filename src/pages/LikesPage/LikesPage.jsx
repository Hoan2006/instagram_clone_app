import React, { useEffect, useState } from 'react'; 
import { Container, Flex, Spinner, Text } from '@chakra-ui/react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase'; 
import FeedPosts from '../../components/FeedPosts/FeedPosts'; 

const LikesPage = ({ userId }) => {
    const [likedPosts, setLikedPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLikedPosts = async () => {
            try {
                const q = query(collection(db, 'posts'), where('likes', 'array-contains', userId));
                const querySnapshot = await getDocs(q);
                const posts = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                // Sắp xếp bài viết theo thời gian được tạo ra (giả sử bạn có trường createdAt)
                const sortedPosts = posts.sort((a, b) => b.createdAt - a.createdAt); // Thay đổi theo kiểu dữ liệu thời gian bạn sử dụng

                setLikedPosts(sortedPosts);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching liked posts: ', error);
                setLoading(false);
            }
        };

        fetchLikedPosts();
    }, [userId]);

    if (loading) {
        return <Spinner size="xl" />;
    }

    return (
        <Container maxW={"container.lg"}>
            <Flex direction="column" py={10}>
                <Text fontSize={24} mb={4}>Liked Posts</Text>
                <FeedPosts posts={likedPosts} isLoading={loading} />
            </Flex>
        </Container>
    );
};

export default LikesPage;
