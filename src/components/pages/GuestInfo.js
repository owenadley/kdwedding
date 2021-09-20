import React from 'react';
import '../../App.css';
import Header from '../Header';
import Footer from '../Footer';

class GuestInfo extends React.Component {

  render() {
    return (
      <div className="guestinfo">
        <Header title="Guest Info" />

        <div className="guestinfo-elements">

          <div className="sec-accomodations">

            <div className="acc-img">
            </div>

            <div className="acc-info">

              <div className="acc-title">
                <p>Accommodations</p>
              </div>

              <div className="acc-text">
                <p>The wedding party will be staying at Blackstone Mountain Lodge (403) 609-8098 for our wedding weekend. If you’d like to join us at Blackstone you can use the code “COR1” for 15% off the best flexible rate. To receive this discount you must call Blackstone directly (403-609-8098) to book your room.</p>
                <p>Alternatively, there are lots of hotel and rental options in Canmore, however they can fill up fast, so don’t wait to book!</p>
              </div>
 
            </div>

          </div>

          <div className="sec-accomodations" id="explorecanmore">


            <div className="acc-info">

              <div className="acc-title">
                <p>Explore Canmore</p>
              </div>

              <div className="acc-text">
                <p>We hope you have a chance to explore and enjoy Canmore and the surrounding area. We love it here!</p>
                <p>Canmore is an easy town to walk around. Blackstone Mountain Lodge to Main Street (8 St) Canmore is about a 15 minute walk. Walking up and down Main Street will take about 20 minutes, depending on how much shopping you do</p>
                <p>On our wedding day, you'll have some free time between the ceremony and the reception, so we encourage you to check out beautiful Canmore. Here are some of our favourite places:</p>
                  <ul>
                    <li>Check out the Grizzly Paw Pub on Main Street</li>
                    <li>Grab a drink at The Drake</li>
                    <li>Grab a cup of coffee at Beamers</li>
                    <li>Check out the Rocky Mountain Soap store on Main St.</li>
                    <li>Walk up and down Main Street and explore the local stores</li>
                    <li>Hit the new Grizzly Paw Brewery 310 location</li>
                  </ul>  
                  <p>If you are able to stay for a few extra days and are looking for some things to do in the mountains:</p>
                  <ul>
                    <li>Go for a drive to check out Spray Lakes</li>
                    <li>Take a walk around Quarry Lake in Canmore</li>
                    <li>Day trip to the Columbia Ice fields</li>
                    <li>Grassi Lake walk/hike - 20 mins drive from Canmore</li>
                    <li>Visit Moraine Lake, Lake Louise and the Fairmont Hotel</li>
                    <li>Visit Sulphur Mountain Gondola near Banff</li>
                    <li>Hiking near Kananaskis Lodge - about a half hour drive from Canmore</li>
                  </ul>                            
              </div>
 
            </div>
            <div className="expc-img">
            </div>

          </div>



          <div class="guestinfo-element" id="transportation">
            <div class="guestinfo-title">
              <p>Transportation</p>
            </div>
            <div class="guestinfo-details-text">
              <p>Our wedding will be held in Canmore, just over an hour from the Calgary airport. For all our out-of-towners, there are car rentals and shuttles at the airport, but we suggest making these arrangements well in advance. Some of the shuttles you can take are:</p>
              <ul id="transpo">
                <li>Brewster Banff Airport Express</li>
                <li>Banff Aiporter</li>
                <li>On -> It</li>
              </ul>
              <p>Once in Canmore, there are multiple cab companies available or the local Roam bus.</p>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    )
  }
}

export default GuestInfo;