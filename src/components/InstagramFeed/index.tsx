import { useState } from "react";

interface InstagramFeedProps {
    instaId: string;
}

export const InstagramFeed = ({ instaId }: InstagramFeedProps) => {
    const [html, setHTML] = useState('')
     fetch('/igfeed', { mode: 'no-cors', referrer: 'instagram.com' })
     .then(r => r.text()
     .then(console.log))

    return <div dangerouslySetInnerHTML={{__html:  html}}
    />
}
