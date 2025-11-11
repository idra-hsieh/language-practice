'use client';

const user = {
    name: "Idra Hsieh",
    imageUrl: "https://idra-hsieh.vercel.app/_next/image?url=%2Fassets%2Fphoto.png&w=3840&q=100",
    imageSize: 90,
};

export default function Profile() {
    return (
        <>
            {/* use JavaScript code */}
            <h1>{user.name}</h1>
            {/* use curly braces to call variables */}
            {/* no comments inside a tag */}
            {/* object{} inside the style={} */}
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}

                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    )
}