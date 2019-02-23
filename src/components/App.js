import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from "../base";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        // Firebase Realtime Database  syncing read/write
        // this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
        //             context: this,
        //             state: "fishes"
        //         });
        // Firebase Cloud Firestore syncing read/write
        // this.ref = base.syncDoc(`${this.props.match.params.storeId}/fishes`, {
        //     context: this,
        //     state: "fishes"
        // });

        // Firebase Cloud Firestore syncing read/write
        // And getting data from localstorage as a resolve on promise
        const localStorageRef = localStorage.getItem(
            this.props.match.params.storeId
        );
        this.ref = base.syncDoc(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: "fishes",
            then() {
                if (localStorageRef) {
                    this.setState({
                        order: JSON.parse(localStorageRef)
                    });
                }
            }
        });
    }
    componentDidUpdate() {
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.order)
        );
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        const fishes = { ...this.state.fishes };

        fishes[`Fish${Date.now()}`] = fish;

        this.setState({
            fishes: fishes
        });
    };

    updateFish = (key, updatedFish) => {
        const fishes = { ...this.state.fishes };
        fishes[key] = updatedFish;
        this.setState({ fishes });
    };

    deleteFish = key => {
        const fishes = { ...this.state.fishes };
        delete fishes[key];
        this.setState({ fishes });
    };

    deleteFishFromOrder = key => {
        const order = { ...this.state.order };
        delete order[key];
        this.setState({ order });
    };

    loadFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = key => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish
                                key={key}
                                index={key}
                                fishData={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order
                    fishes={this.state.fishes}
                    order={this.state.order}
                    deleteFishFromOrder={this.deleteFishFromOrder}
                />
                <Inventory
                    addFish={this.addFish}
                    loadFishes={this.loadFishes}
                    fishes={this.state.fishes}
                    order={this.state.order}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                    deleteFishFromOrder={this.deleteFishFromOrder}
                />
            </div>
        );
    }
}

export default App;
