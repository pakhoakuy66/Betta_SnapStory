import { useState } from "react";

function App() {
    return (
        <div className="">
            <iframe
                data-testid="embed-iframe"
                className="rounded-[12px] w-[300px] h-[250px] border-none"
                src="https://open.spotify.com/embed/track/7yq4Qj7cqayVTp3FF9CWbm?utm_source=generator"
                width="100%"
                height="352"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
    );
}

export default App;
