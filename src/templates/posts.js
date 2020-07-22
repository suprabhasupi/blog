import React from 'react'


export default function PostTemplate({ data }) {
return (
    <>
        <div>
            Hello JSON= {JSON.stringify(data)}
        </div>

    </>
)
}