import React from 'react';

function Page({ params }: { params: { id: string } }) {
    console.log("params ==>> ", params);

    return (
        <div>
            I am dynamic route {params.id}
        </div>
    );
}

export default Page;