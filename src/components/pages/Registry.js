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
  img: '/williamashley.jpg',
  title: 'External Gift Registry',
  store: 'William Ashley',
  desc: '',
  url: 'https://www.williamashley.com/giftregistry/view/index/id/YFNKG/'
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

        </div>

        <Footer/>
      </div>
    )
  }
}

export default Registry;