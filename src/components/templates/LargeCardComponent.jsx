export default function LargeCardComponent(){
    return(
      <><div class="container mt-3 bg-light">
            <div class="row p-4">
                <div class="col-3">
                    <img src="https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-Bank-BRI.png" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} alt="" srcset="" />
                </div>
                <div class="col-9">
                    <h1>Hacktiv8 Meetup</h1>
                    <table>
                        <tr>
                            <td>Location</td>
                            <td>Jakarta</td>
                        </tr>
                        <tr>
                            <td>Members</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>Organizer</td>
                            <td>Adam</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="container mt-3">
        <h3 class="m-3">Next Meetup</h3>
            <div class="row p-4 bg-light">
                <h4>Awesome meetup & event</h4>
                <p>25 Januari 2024</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum est, nesciunt officia numquam dignissimos tempore, quibusdam itaque, excepturi doloribus maxime minima. Excepturi, quod ea voluptatum tempora obcaecati est repudiandae!</p>
                <br /><p>Remember to come</p>
                <hr />
                <p>See you there</p>
                <p>Adam</p>
            </div>
        </div>
        <div class="container">
            <h3 class="m-3">About Meetup</h3>
            <div class="row p-2">
                <p>
                    Come and meet other developers interested in javascript and it's library in Jakarta area.
                    <br />Twitter: Hacktiv8JS and we using #Hacktiv8JS
                </p>
            </div>
        </div>
        <div class="container">
            <h3 class="m-3">Members</h3>
            <div class="row p-3 bg-light">
                <div class="col-1 text-center">
                <img src="user.png" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} alt="" srcset="" />
                </div>
                <div class="col-10">
                    <h4>Organizers</h4>
                    <p>Adam Ghirvan Fadhil 4 others</p>
                </div>
            </div>
        </div>
        </>
    );
  }