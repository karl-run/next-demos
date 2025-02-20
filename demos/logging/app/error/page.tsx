import React, {ReactElement} from 'react';

const shouldError: boolean = true

function Page(): ReactElement {
    if (shouldError) {
        throw new Error("This will bubble up to stderr in the server logs")
    }

    return (
        <div>
            This looks like nothing to me
        </div>
    );
};

export default Page;
