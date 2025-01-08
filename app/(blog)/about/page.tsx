import React from 'react';
import Image from 'next/image';
import zohaibroonjha from '../images/zohaibroonjha.jpg';  // Import image from the public folder

const AboutPage = () => {
  return (
    <div className="about-section max-w-3xl mx-auto p-8">
      <div className="text-center">
        <Image
          src={zohaibroonjha}  // Use imported image
          alt="Zohaib Roonjha"
          className="rounded-full mx-auto mt-10"
          width={128}  // Adjust the width and height as needed
          height={128}
        />
        <h2 className="text-2xl font-bold">Zohaib Roonjha</h2>
        <p className="text-xl">Enrolled in GIAIC Program (7 to 10 Friday Class)</p>
        <p className="mt-4">
          I am working on a blog website using Sanity and creating more projects
          provided to me. One of the milestones is a resume builder that I created,
          which is editable and shareable. It's a part of a hackathon project.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
