

const Card = ({item}) => {
    const{title}=item;
    return (
        <div className="border-2 py-4">
             <p>{title}</p>
        </div>
    );
};

export default Card;
