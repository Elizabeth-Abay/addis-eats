import { HiOutlineFire, HiUserGroup } from "react-icons/hi2";

export default function FeatureSelection(){
    // ! add the order and add to cart buttons at top
    return (
        <div className="feature-section">
            <div className="feature-header">
                <HiOutlineFire></HiOutlineFire>
                <h1>The Grand Mesob Feast</h1>

                <button className="info-pill-feature">Featured Spread</button>
                
            </div>


            <div className="image-container-feature">
                {/*  */}
                <img src=""></img>
                <span></span>
                <div className="feature-feed-pill">
                    <HiUserGroup size={20} />
                    <h3>Feeds 2-4 People </h3>
                </div>
            </div>

            <h1>Royal Feast Platter</h1>
            <p>
                A circular tapestry of four signature highland stews,
                fresh gomen greens, organic boiled eggs and warm
                rolls of pure teff injera.
            </p>

            

        </div>
    )
}