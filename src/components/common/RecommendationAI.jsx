import React from 'react'
import { Button } from 'react-bootstrap';
import { FaFilter, FaStar } from 'react-icons/fa6';
import { IoAddOutline } from 'react-icons/io5';

const RecommendationAI = ({
    control,
    setRecommend,
    options

}) => {
    const recommendations = [
        {
          id: 1,
          text: 'Developed a responsive web application using React and Bootstrap.',
          isExpertRecommended: true,
        },
        {
          id: 2,
          text: 'Implemented RESTful APIs with Node.js and Express.',
          isExpertRecommended: true,
        },
        {
          id: 3,
          text: 'Built dynamic user interfaces with Vue.js and Vuex.',
          isExpertRecommended: true,
        },
        {
          id: 4,
          text: 'Designed and optimized database schemas using MongoDB.',
          isExpertRecommended: false,
        },
        {
          id: 5,
          text: 'Created interactive charts and visualizations using D3.js.',
          isExpertRecommended: false,
        },
        {
          id: 6,
          text: 'Integrated third-party services and APIs for enhanced functionality.',
          isExpertRecommended: false,
        },
      ];


      const handleRecommendation=(item)=>{
        // console.log(item,"kk")
        setRecommend(item.text)
      }
      const mapData = options ? options : recommendations
  return (
   <>
    <div>
          <div className="recommended-desc">
            {mapData?.map((item) => (
              <div key={item.id} className="d-flex align-items-center gap-3" onClick={()=>handleRecommendation(item)}>
                <Button
                  variant="transparent"
                  className="arrow-btn primary-arrow shadow-none"
                >
                  <IoAddOutline />
                </Button>
                <div>
               
                    <p className="font-14 fw-medium mb-1">
                      <FaStar /> Expert Recommended
                    </p>
                  
                  <p className="font-14 mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
   </>
  )
}

export default RecommendationAI