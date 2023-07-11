import React from 'react'
import Image from 'next/image'


export default function RestaurantList(props) {
    return (
        <>
    
            <div class="card mb-3" style={{ 'max-width': 540 + 'px' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        {/* <Image src="..." class="img-fluid rounded-start" alt="..." /> */}
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <div>星星</div>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}