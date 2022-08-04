import React from 'react';
import dashStyles from './dashboard.module.css';
import SecondaryNav from '../../components/SecondaryNav';
import Footer from '../../components/Footer';

const Dashboard = () => {

    const recipes = [
        {
            recipeTitle: "Chicken Parm",
            description: "This is a great chicken dish",
            author: "Emma",
            img: "https://placekitten.com/400/200",
            ingredient: ["chicken", "parmesan", "tomato sauce", "pasta"],
            preprationStep: ["1: do this", "2: to this second", "3: do this third"],
            tag: ["Chicken"]
        }
    ]

    return (
        <div className={dashStyles.test}>
            <SecondaryNav></SecondaryNav>
                <section>
                    <h2>Dashboard</h2>

                    {/* Recent recipes */}
                    <section>
                            
                    </section>

                    {/* Review section */}
                    <section>

                    </section>
                </section>
            <Footer />
        </div>
    )
}

export default Dashboard;