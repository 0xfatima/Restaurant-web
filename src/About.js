export default function About(){
    const pass=`
    <div class="about-page">
        <section id="about-sec">
            <h2>Our Story</h2>
            <div>
                <p>La Bella Cuisine is more than just a restaurant; it's a culinary experience that reflects our passion for food and hospitality. Our journey began with a simple idea: to create a welcoming space where people could enjoy delicious meals made with fresh, locally-sourced ingredients.</p>
            <p>Since opening our doors, we have been committed to providing our guests with exceptional dining experiences. From our carefully crafted menu to our warm and inviting atmosphere, every aspect of La Bella Cuisine is designed to delight the senses and create lasting memories.</p>
            <p>Whether you're joining us for a romantic dinner, a family celebration, or a casual meal with friends, we invite you to experience the magic of La Bella Cuisine. Welcome to our table!</p>
        
            </div>
            </section>
    
        <footer>
            <p>&copy; 2024 La Bella Cuisine. All rights reserved.</p>
        </footer>
    </div>`

    document.getElementById("content").innerHTML=pass;
}