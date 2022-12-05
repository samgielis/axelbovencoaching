import { Helmet } from "react-helmet-async";
import { PageContainer } from "../../components/PageContainer";
import { Post } from "../Post";

const PRIVACY_POST_ID = '240'
export const PrivacyBeleid = () => {
    return (
        <>
            <Helmet>
                <title>Privacybeleid - Axel Boven Coaching</title>
            </Helmet>
            <PageContainer>
                <Post postId={PRIVACY_POST_ID} hideDate />
            </PageContainer>
        </>
    );
};
