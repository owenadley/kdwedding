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
          <div className="guestinfo-element" id="accomodations">
            <div className="guestinfo-title">
              <p>Accommodations</p>
            </div>
            <div className="guestinfo-details">
              <div className="guestinfo-details-img">
                <img alt="Blackstone resort" src="/blackstone.jpg"/>
              </div>
              <div className="guestinfo-details-text">
                <p>We have secured a block of rooms at Blackstone Mountain Lodge for our wedding weekend. Please make sure you tell them you are with the Adley-Cooper wedding (code: CAWD20) when you book through Blackstone to receive a discounted rate. It is about a three minute walk to Cornerstone Theatre for the reception.</p>
                <p>Blackstone Mountain Lodge phone number: (403) 609-8098</p>
                <p>Alternatively, there are lots of hotels and rental options in Canmore within walking distance to our reception location at Cornerstone Theatre, however they can fill up fast, so don't wait to book!</p>
              </div>
            </div>
          </div>

          <div className="guestinfo-element" id="explorecanmore">
            <div className="guestinfo-title">
              <p>Explore Canmore</p>
            </div>
            <div className="guestinfo-details">
              <div className="guestinfo-details-img">
                  <img alt="Three sisters mountains" src="/threesisters.jpg"/>
              </div>
              <div className="guestinfo-details-text">
                <p>We hope you have a chance to explore and enjoy Canmore and the surrounding area. We love it here!</p>
                <p>Canmore is an easy town to walk around. Blackstone Mountain Lodge (in accomodations) to Main Street (8 St) Canmore is about a 15 minute walk. Walking up and down Main Street will take about 20 minutes, depending on how much shopping you do</p>
                <hr className="general-hr"/>
                <div className="guestinfo-details-text-item">
                  <p>On our wedding day, you'll have some free time between the ceremony and the reception, so we encourage you to check out beautiful Canmore. Here are some of our favourite places:</p>
                  <ul>
                    <li>Check out the Grizzly Paw Pub on Main Street</li>
                    <li>Grab a drink at The Drake</li>
                    <li>Grab a cup of coffee at Beamers</li>
                    <li>Check out the Rocky Mountain Soap store on Main St.</li>
                    <li>Walk up and down Main Street and explore the local stores</li>
                    <li>Hit the new Grizzly Paw Brewery 310 location (One block from
                      Cornerstone Theatre, where you'll be going for our reception)</li>
                  </ul>
                </div>
                <hr />
                <div className="guestinfo-details-text-item">
                <p>If you are able to stay for a few extra days and are looking for some things to do in the mountains:</p>
                  <ul>
                    <li>Go for a drive to check out Spray Lakes</li>
                    <li>Take a walk around Quarry Lake in Canmore</li>
                    <li>Day trip to the Columbia Ice fields</li>
                    <li>Grawssi Lake walk/hike - 20 mins drive from Canmore</li>
                    <li>Visit Maraine Lake, Lake Louise and the Fairmount hotel</li>
                    <li>Visit Sulphur Mountain Gondola near Banff</li>
                    <li>Hiking near Kananaskis Lodge - about a half hour drive from Canmore</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>        

          <div class="guestinfo-element" id="transportation">
            <div class="guestinfo-title">
              <p>Transportation</p>
            </div>
            <div class="guestinfo-details-text">
              <p>Our wedding will be held in Canmore, just over an hour from the Calgary airport. For all our out-of-towners, there will be car rentals and shuttles at the airport, but we suggest making these arrangements well in advance. Some of the shuttles you can take are:</p>
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