const user = [
    {
        name:'Daniela Manjarres',
        imageUrl :'src/assets/DMV.jpg',
        imageSize: 90
    },
    {
        name:'Maria',
        imageUrl :'src/assets/Maria.jpg',
        imageSize: 90
    },
    {
        name:'Jose',
        imageUrl :'src/assets/Jose.jpg',
        imageSize: 90
    },
    {
        name:'Cleopatra',
        imageUrl :'src/assets/Cleopatra.jpg',
        imageSize: 90
    },
    
];


export default function Profile() {
    return(
        <>
        <h1>{user.name}</h1>
        <img 
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of '+ user.name}
            style={{
                width:user.imageSize,
                height:user.imageSize
            }}
        />
        </>
    )
}