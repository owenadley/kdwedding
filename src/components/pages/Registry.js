import React from 'react';
import '../../App.css';
import Header from '../Header';
import Footer from '../Footer';
import RegistryItem from '../RegistryItem';

const item1 = {
  img: '/hudsonsbay.png',
  title: 'External Gift Registry',
  store: 'Hudsons Bay',
  desc: '',
  url: 'https://registry.thebay.com/registry/view-registry/katelyn_adley_and_dan_cooper'
}
const item2 = {
  img: '/yeti.jpg',
  title: 'Tundra 45 Cooler',
  store: 'YETI',
  desc: '',
  url: 'https://www.yeti.com/en_CA/hard-coolers/tundra-45-cooler/70000000279.html'  
}
const item3 = {
  img: '/coravin.jpg',
  title: 'Coravin Model One Wine System',
  store: 'Bed Bath & Beyond',
  desc: '',
  url: 'https://www.bedbathandbeyond.ca/store/product/coravin-trade-model-one-wine-system-in-blue/3305798?brandId=3891'  
}


class Registry extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="registry">
        <Header title="Gift Registry" />

        <div className="registry-container">

          <RegistryItem item={item1}/>
          <RegistryItem item={item2}/>
          <RegistryItem item={item3}/>

        </div>

        <Footer/>
      </div>
    )
  }
}

export default Registry;