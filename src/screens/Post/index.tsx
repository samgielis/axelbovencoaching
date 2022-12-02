import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useLoadPost } from "../../data/wordpress/loaders/useLoadPost";
import { PostLoadingPlaceholder } from "./PostLoadingPlaceholder";
import "./post.css";
import { Helmet } from "react-helmet-async";

interface PostProps {
    postId: string;
    category: {
        name: string;
        path: string;
    };
}

export const Post = ({ postId, category }: PostProps) => {
    const { isLoading, post } = useLoadPost(postId);

    if (isLoading) {
        return <PostLoadingPlaceholder />;
    }

    if (!post) {
        return <p>Could not find post</p>;
    }

    const postDate = new Date(post.date);

    return (
        <>
            <Helmet>
                <title>{`${post.title} - Axel Boven Coaching`}</title>
            </Helmet>
            <Stack spacing={10}>
                <Breadcrumb
                    colorScheme={"themeGreen"}
                    fontSize="lg"
                    spacing="8px"
                    separator={<ChevronRightIcon color="green.500" />}
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href={category.path}>{category.name}</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink>{post.title}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Stack spacing={5}>
                <Heading as="h1" size="3xl">
                    {post.title}
                </Heading>
                <Text as={'em'}><HumanDate date={postDate}/></Text>
                </Stack>
                <div
                    className="wp-post"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </Stack>
        </>
    );
};

const HumanDate = ({date}: {date: Date}) => {
    let humanMonth = 'Onbekend';
    switch(date.getMonth()) {
        case 0: {humanMonth = 'januari'; break;}
        case 1: {humanMonth = 'februari'; break;}
        case 2: {humanMonth = 'maart'; break;}
        case 3: {humanMonth = 'april'; break;}
        case 4: {humanMonth = 'mei'; break;}
        case 5: {humanMonth = 'juni'; break;}
        case 6: {humanMonth = 'juli'; break;}
        case 7: {humanMonth = 'augustus'; break;}
        case 8: {humanMonth = 'september'; break;}
        case 9: {humanMonth = 'oktober'; break;}
        case 10: {humanMonth = 'november'; break;}
        case 11: {humanMonth = 'december'; break;}
    }
    return <span>{`${date.getDate()} ${humanMonth}, ${date.getUTCFullYear()}`}</span>
}
