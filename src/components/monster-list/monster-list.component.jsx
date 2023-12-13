import './monster-list.style.css';
export const MonsterList = (props) => {
    console.log(props);
    return (
        <div className="card-list">{
            props.monsters.map((monster) => {
                return (
                    <div key={monster.id} className="card-container">
                        <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set3&size=180x180`}></img>
                        <h2>{monster.name}</h2>
                        <p>{monster.email}</p>
                    </div>
                )
            })
        }
        </div>
    )
}