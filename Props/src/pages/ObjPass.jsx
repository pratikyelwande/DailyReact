const Profile=({user={user}})=>{
    return(
<>
<h2>{user.name} & age is: {user.age}</h2>
</>
    )
}

export default Profile;