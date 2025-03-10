import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdRestaurantMenu } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';

function About() {
  // Team members data
  const teamMembers = [
    {
      name: 'Chef [Name]',
      role: 'Chef',
      image: 'img/team-1.jpg',
      description: 'With over [X] years of experience, Chef [Name] brings creativity and passion to every dish served. They specialize in [cuisine type] and bring an innovative approach to classic recipes.'
    },
    {
      name: 'Sous Chef [Name]',
      role: 'Sous Chef',
      image: 'img/team-2.jpg',
      description: 'Sous Chef [Name] is known for their expertise in [specialty dish]. Their attention to detail ensures the kitchen runs smoothly, and every dish is prepared to perfection.'
    },
    {
      name: 'Waitstaff [Name]',
      role: 'Waitstaff',
      image: 'img/team-3.jpg',
      description: '[Name] is dedicated to providing a warm and welcoming atmosphere, ensuring an exceptional dining experience for every guest. Their friendly demeanor and attention to detail make all the difference.'
    }
  ];

  // Featured dishes data
  const dishes = [
    {
      name: 'Dish 1: Dish Name 1',
      image: 'img/dish1.jpg',
      description: 'A delicious combination of flavors that will tantalize your taste buds. Perfect for those who love [flavor profile].'
    },
    {
      name: 'Dish 2: Dish Name 2',
      image: 'img/dish2.jpg',
      description: 'This signature dish is crafted with the finest ingredients and will leave you craving more. A true representation of our [cuisine type].'
    },
    {
      name: 'Dish 3: Dish Name 3',
      image: 'img/dish3.jpg',
      description: 'A flavorful blend of spices and fresh ingredients. A must-try for anyone who loves [specific ingredient].'
    }
  ];

  // Awards data
  const awards = [
    {
      title: 'Best Fine Dining Restaurant',
      organization: '[Award Organization]',
      year: '[Year]'
    },
    {
      title: 'Top 10 Restaurants in [Location]',
      organization: '[Restaurant Guide]',
      year: '[Year]'
    },
    {
      title: 'Customer Favorite',
      organization: '[Award Organization]',
      year: '[Year]'
    }
  ];

  return (
    <section className="about container py-5">
      {/* Section Heading */}
      <h1 className="fw-bold text-center mb-5 text-primary">About Us</h1>

      {/* Our Story */}
      <div className="row my-4">
        <div className="col-md-6">
          <h2 className="text-primary mb-3"><MdRestaurantMenu size={40} /> Our Story</h2>
          <p>
            Welcome to [Restaurant Name], where culinary excellence meets a warm and inviting atmosphere. Founded in [Year], our restaurant has been a beloved destination for food lovers in [Location]. Our journey began with a passion for creating delicious, high-quality dishes that celebrate the rich flavors of [Cuisine Type].
          </p>
          <p>
            Over the years, we have grown from a small eatery to a renowned dining establishment, known for our commitment to using fresh, locally sourced ingredients. Our chefs are dedicated to crafting innovative dishes that honor traditional recipes while adding a modern twist.
          </p>
        </div>
        <div className="col-md-6">
          <img src="img/room-1.jpg" className="img-fluid rounded shadow-lg" alt="Restaurant Interior" />
        </div>
      </div>

      {/* Mission and Values */}
      <div className="row my-4">
        <div className="col-md-6">
          <h2 className="text-primary mb-3"><FaRegClock size={40} /> Our Mission</h2>
          <p>
            At [Restaurant Name], our mission is to provide an unforgettable dining experience that delights the senses. We strive to create a welcoming environment where guests can enjoy exceptional food, outstanding service, and a memorable atmosphere. Our goal is to exceed your expectations with every visit.
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="text-primary mb-3"><FaRegClock size={40} /> Our Values</h2>
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle-fill text-success"></i> Quality: We believe in using only the finest ingredients to create our dishes.</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> Community: We are committed to supporting local farmers and businesses.</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> Innovation: We embrace creativity and continuously seek to improve our menu.</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> Hospitality: We treat every guest like family and aim to provide exceptional service.</li>
          </ul>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="row my-4 text-center justify-content-center">
        <div className="col-12">
          <h2 className="text-primary mb-4">Meet Our Team</h2>
        </div>
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-3 col-12 mb-5 d-flex flex-column align-items-center">
            <img src={member.image} alt={member.role} className="rounded-circle mb-3 img-fluid" />
            <h3>{member.name}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>

      {/* Featured Menu Items */}
      <div className="row my-4">
        <div className="col-12 text-center">
          <h2 className="text-primary mb-4">Featured Menu Items</h2>
        </div>
        {dishes.map((dish, index) => (
          <div key={index} className="col-md-4">
            <img src={dish.image} alt={dish.name} className="img-fluid rounded mb-3" />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
        ))}
      </div>

      {/* Customer Testimonials */}
      <div className="row my-4">
        <div className="col-12">
          <h2 className="text-primary text-center mb-4">What Our Guests Are Saying</h2>
          <div className="testimonial d-flex flex-column align-items-center">
            <p>"The food at [Restaurant Name] is absolutely incredible! Every dish was bursting with flavor, and the atmosphere was perfect for our anniversary dinner." - Customer A</p>
          </div>
          <div className="testimonial d-flex flex-column align-items-center">
            <p>"A hidden gem in [Location]! The staff is so friendly and the food is top-notch. Highly recommend the [dish name]!" - Customer B</p>
          </div>
        </div>
      </div>

      {/* Awards and Recognition */}
      <div className="row my-4">
        <div className="col-12 text-center">
          <h2 className="text-primary mb-4">Awards & Recognition</h2>
          <p>[Restaurant Name] is proud to have been recognized with several prestigious awards, including:</p>
          <ul className="list-inline">
            {awards.map((award, index) => (
              <li key={index} className="list-inline-item">
                <i className="bi bi-trophy-fill text-warning"></i> {award.title} - {award.organization} - {award.year}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="row my-2">
        <div className="col-12 text-center">
          <h2 className="text-primary mb-4">Follow Us</h2>
          <div className="social-links mb-4">
            <a href="https://facebook.com" className="btn btn-social me-2"><FaFacebook size={30} /></a>
            <a href="https://twitter.com" className="btn btn-social me-2"><FaTwitter size={30} /></a>
            <a href="https://instagram.com" className="btn btn-social me-2"><FaInstagram size={30} /></a>
            <a href="https://linkedin.com" className="btn btn-social me-2"><FaLinkedin size={30} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
