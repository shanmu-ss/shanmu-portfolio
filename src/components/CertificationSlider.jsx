import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CertificationSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const certifications = [
    { id: 1, name: 'Google Cloud', image: 'https://i.ibb.co/DYTFCt4/associate-cloud-engineer-certification.png' },
    { id: 2, name: 'Azure Certified', image: 'https://i.ibb.co/cCbSB9y/microsoft-certified-azure-fundamentals.png' },
    { id: 3, name: 'AWS Certified', image: 'https://i.ibb.co/C9KFGVP/aws-certified-developer-associate-1.png' },
    { id: 3, name: 'Google Cloud', image: 'https://i.ibb.co/HX49vmk/professional-cloud-devops-engineer-certification.png' },
    // Add more certifications and badges here
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Slider {...settings}>
        {certifications.map((cert) => (
          <div key={cert.id} style={{ textAlign: 'center', padding: '20px' }}>
            <img src={cert.image} alt={cert.name} style={{ width: '80%', borderRadius: '10px' }} />
            <h3>{cert.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CertificationSlider;
