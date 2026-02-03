import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';

const EventDetails = () => {
  const { year } = useParams();
  const events = {
    2023: {
      description: "The Pwani Innovation Week (PIW) in 2023 took place at the Swahilipot Hub in Mombasa, Kenya. Swahilipot Hub, known for its vibrant atmosphere and commitment to nurturing local talent, provided the perfect venue for PIW, a celebration of innovation, youth empowerment, and international engagement. Throughout the event, Swahilipot Hub buzzed with activity as attendees participated in various workshops, panel discussions, and networking sessions. The hub's modern facilities, including co-working spaces and maker labs, offered an ideal environment for entrepreneurs and innovators to collaborate and exchange ideas. The PIW event at Swahilipot Hub showcased the creativity and ingenuity of the coastal region's youth, with pitch competitions, hackathons, and exhibitions highlighting innovative projects and startups. Moreover, Swahilipot Hub's central location in Mombasa made it easily accessible to participants from across the region, further enhancing the event's impact and reach.",
      images: [
        "/images/2023/event1.jpg",
        "/images/2023/event2.jpg",
        "/images/2023/event3.jpg",
        "/images/2023/event4.jpg",
        "/images/2023/event5.jpg",
        "/images/2023/event6.jpg",
        "/images/2023/event7.jpg",
        "/images/2023/event8.jpg",
        "/images/2023/event9.jpg",
        "/images/2023/event10.jpg",
        "/images/2023/event11.jpg",
        "/images/2023/event12.jpg",
        "/images/2023/event13.jpg",
        "/images/2023/event14.jpg",
        "/images/2023/event15.jpg",
        "/images/2023/event16.jpg",
        "/images/2023/event17.jpg",
        "/images/2023/event18.jpg",
        "/images/2023/event19.jpg",
        "/images/2023/event20.jpg",
        "/images/2023/event21.jpg"
      ]
    },
    2022: {
      description: "Pwani Innovation Week 2022 media launch of the 3rd Pwani Innovation Week 2022. The launch will be officiated by: Kenya National Chamber of Commerce, Department of Trade, Mombasa County, and Swahilipot hub."
      images: [
        "/images/2022/event1.jpg",
        "/images/2022/event2.jpg",
        "/images/2022/event3.jpg",
        "/images/2020/event4.jpg",
        "/images/2020/event5.jpg",
        "/images/2020/event6.jpg",
      ]
    },

  };

  const event = events[year];

  if (!event) {
    return <p>No event found for the year {year}</p>;
  }

  return (
    <div className="event-details-container">
      <h2>Discover What Happened {year}</h2>
      <p className="event-description">{event.description}</p>
      <div className="image-gallery">
        {event.images.map((image, index) => (
          <img key={index} src={image} alt={`Event ${year} ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default EventDetails;
