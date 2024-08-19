import data from "../../fetched-data/sections.json";
import { imgCommon } from "../../constants";

const ImageWithTopContent = ({ property }) => {
  const { count, type, imgSrc } = { ...property };
  return (
    <>
      <div
        className="image-container iwtc"
        style={{ backgroundImage: `linear-gradient(to top,#00000080 20%,#00000000 50%), url(${imgCommon}${imgSrc})` }}
      >
        
          <div className="img-top-texts">
            <span className="bold-400 med-text inner">{count}</span>
            <span className="bold-400 med-sm-text inner">{type}</span>
            <div className="text-and-arrow">
              <span className="bold-300 sm-text inner">Explore</span>
              <span className="right-arrow">&rarr;</span>
            </div>
          </div>

        </div>
      
    </>
  );
};

const PropertiesForEveryone = ({}) => {
  return (
    <>
      
        
        <div className="pfe app-container component-container">
          <h2 className="secondary-heading">
            We've got Porperties for Everyone
          </h2>

          <div className="app-features">
            {data.propertiesForEveryone.map((property) => {
              return <ImageWithTopContent property={property} />;
            })}
          </div>
        </div>
      
        
    </>
  );
};

export default PropertiesForEveryone;
