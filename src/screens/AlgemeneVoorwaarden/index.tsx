import { Helmet } from "react-helmet-async";
import { PageContainer } from "../../components/PageContainer";
import { Post } from "../Post";

const VOORWAARDEN_POST_ID = '243'
export const AlgemeneVoorwaarden = () => {
    return (
        <>
            <Helmet>
                <title>Algemene voorwaarden - Axel Boven Coaching</title>
            </Helmet>
            <PageContainer>
                <Post postId={VOORWAARDEN_POST_ID} hideDate />
            </PageContainer>
        </>
    );
}
