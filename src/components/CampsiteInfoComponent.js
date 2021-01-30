import React, {Component} from "react;"


class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if (campsite) {
            return <div className="row"></div>
        }
        else {
            return <div></div>
        }
        
        return (
            <div></div>
        )
    }
}

export default CampsiteInfo