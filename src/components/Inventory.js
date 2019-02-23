import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishFrom from "./EditFishForm";

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                {Object.keys(this.props.fishes).map(key => (
                    <EditFishFrom
                        key={key}
                        index={key}
                        fish={this.props.fishes[key]}
                        order={this.props.order[key]}
                        updateFish={this.props.updateFish}
                        deleteFish={this.props.deleteFish}
                        deleteFishFromOrder={this.props.deleteFishFromOrder}
                    />
                ))}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadFishes}>
                    Load Sample Fishes!
                </button>
            </div>
        );
    }
}

export default Inventory;
