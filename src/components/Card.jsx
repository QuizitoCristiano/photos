export const Card = ({image, alt, user })=> {

    return (
        <div className="card" >
            <div className="card-image">
                <img src={image} className="card-img-top" alt={alt}/>
                
            </div>
            <div className="card-text">
                <div className="card-avatar">
                    <img src={user?.image} height="100%" alt="tudo bem!!!"/>
                </div>
                <div className="card-info">
                    <h4>{user?.name}</h4>
                    <button className="conversa">conversar</button>
                    <h6>{user?.username}</h6>
                </div>
            </div>
        </div>
    )
}