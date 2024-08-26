import React from 'react';

const Card = ({ title, content,list_content }) => (
  
    <div className="card bg-white-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 flex flex-col justify-between" style={{height: 'fit-content'}}>
    <div>
      <h2 className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-yellow-500" style={{textAlign: 'center'}}>{title}</h2>
      <p style={{textAlign: 'center'}}>{content}</p>
      <ul style={{wordSpacing: '1px', letterSpacing: '0.1px', textAlign: 'match-parent'}}>
        {list_content?.map((item, index) => (
          <li key={index} className="flex items-center">
            <i className="fa-solid fa-check" style={{color: "#046c4d"}}></i>
            <span className="ml-2">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <button className="bg-blue hover:bg-black text-white font-bold py-2 px-4 rounded mt-4 self-center" style={{alignSelf: 'center'}}>
      Signup Now <i className="fa-solid fa-arrow-right ml-2"></i>
    </button>
    <button className="bg-transparent hover:bg-blue text-black font-bold border py-2 px-4 rounded mt-4 self-center" style={{alignSelf: 'center'}}>
      Learn More
    </button>
  </div>
  
  
);

const CardGrid = ({cards}) => {
  

  return (
    <div className="container mx-auto p-4">
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`} style={{alignItems:'center'}}>
        {cards?.map((card, index) => (
          <Card key={index} title={card?.title} content={card?.content} list_content={card?.list_content}/>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
