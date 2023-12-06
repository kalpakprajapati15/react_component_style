import { Component } from "react";
import './monster-list.style.css';
export class MonsterList extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="card-list">{
                this.props.monsters.map((monster) => {
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
}