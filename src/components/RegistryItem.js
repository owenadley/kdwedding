import React from 'react';
import '../App.css';

class RegistryItem extends React.Component {
    

    constructor(props) {
        super(props);
       // console.log(props.item.img);
        this.state = {
            img: props.item.img,
            title: props.item.title,
            store: props.item.store,
            desc: props.item.desc,
            url: props.item.url
        }
    }
    
    render() {
        return (
            <div className="registryitem-container">
                <div className="registryitem-container-img">
                    <img src={this.state.img}/>
                </div>
                <div className="registryitem-container-abt">
                    <p>{this.state.title}</p>
                    <p>{this.state.store}</p>
                    <p><a href={this.state.url}>View registry item</a></p>
                </div>
{/*                 <div className="registryitem-container-check">check</div>
 */}        </div>
        )
    }
}

export default RegistryItem; 