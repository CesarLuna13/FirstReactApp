export default function ItemListContainer(props){
    const {greeting} = props;

    return(
        <div className="greetings">
            <p>{greeting}</p>
        </div>
    )

}