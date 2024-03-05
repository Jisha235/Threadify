import * as React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">About Threadify</h1>
      
      <section className="mb-12 text-center">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Threadify, your number one source for all things fashion. We're dedicated to giving you the very best of clothing, with a focus on quality, customer service, and uniqueness.
        </p>
        <img src="../images/about_main.jpg" alt="Threadify Store" className="mx-auto rounded-lg shadow-lg"/>
      </section>

      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-lg text-gray-700 mb-6 md:mb-0 md:pr-6">
            <h2 className="text-3xl font-semibold mb-3">Our Mission</h2>
            <p>
              At Threadify, our mission is to consistently provide high-quality, fashionable clothing options for men, women, and children. We believe in the power of exceptional customer experiences, driven by a passion for the fashion industry and a commitment to our customers.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img src="../images/our_mission.jpg" alt="Our Mission" className="rounded-lg shadow-lg w-full md:max-w-md"/>
          </div>
        </div>
      </section>

      <section className="mb-12">
  <h2 className="text-3xl font-semibold text-center mb-6">Our Values</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="text-center px-4">
      <img src="../images/quality.png" alt="Quality" className="mx-auto mb-4 h-32 w-32 object-contain"/>
      <h3 className="text-xl font-semibold mb-2">Quality</h3>
      <p className="text-gray-600">We ensure our products meet the highest quality standards, from material selection to craftsmanship.</p>
    </div>
    <div className="text-center px-4">
      <img src="../images/sustainability.png" alt="Sustainability" className="mx-auto mb-4 h-32 w-32 object-contain"/>
      <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
      <p className="text-gray-600">We're committed to sustainable practices, ensuring our clothing is produced responsibly.</p>
    </div>
    <div className="text-center px-4">
      <img src="../images/innovation.png" alt="Innovation" className="mx-auto mb-4 h-32 w-32 object-contain"/>
      <h3 className="text-xl font-semibold mb-2">Innovation</h3>
      <p className="text-gray-600">We embrace innovation, constantly seeking new ways to improve our products and services.</p>
    </div>
  </div>
</section>


      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Meet Our Team</h2>
        <div className="flex flex-wrap justify-around items-center">
          <div className="text-center mb-6 px-4">
            <img src="../images/ceo.png" alt="Emma Johnson" className="w-48 h-48 object-cover rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-semibold">Emma Johnson</h3>
            <p className="text-sm text-gray-600">CEO & Founder</p>
          </div>
          <div className="text-center mb-6 px-4">
            <img src="../images/hod.png" alt="Sophia Lee" className="w-48 h-48 object-cover rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-semibold">Sophia Lee</h3>
            <p className="text-sm text-gray-600">Head of Design</p>
          </div>
          <div className="text-center mb-6 px-4">
            <img src="../images/om.png" alt="James Smith" className="w-48 h-48 object-cover rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-semibold">James Smith</h3>
            <p className="text-sm text-gray-600">Operations Manager</p>
          </div>
          <div className="text-center mb-6 px-4">
            <img src="../images/md.png" alt="Ava Tan" className="w-48 h-48 object-cover rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-semibold">Ava Tan</h3>
            <p className="text-sm text-gray-600">Marketing Director</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
