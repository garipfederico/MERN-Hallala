import React, { Component } from 'react'
import bootstrap from '../../node_modules/bootstrap/js/dist/tab'
export class prueba extends Component {
    render() {
        // var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
        // triggerTabList.forEach(function (triggerEl) {
        //     var tabTrigger = new bootstrap.Tab(triggerEl)

        //     triggerEl.addEventListener('click', function (event) {
        //         event.preventDefault()
        //         tabTrigger.show()
        //     })
        // })

        return (
            <div>
                <div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">.1..</div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.2..</div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">.3..</div>
                    </div>
                </div>


            </div>
        )
    }
}

export default prueba
