
function ProfilePicture(){

    const imageurl = './src/assets/bing chilling.jpg';
    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imageurl}></img>)
}
export default ProfilePicture