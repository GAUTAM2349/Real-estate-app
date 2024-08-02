import { useEffect } from "react";
import { Scrollbar } from "smooth-scrollbar/scrollbar";


export function Card() {

  return (
    <>
    <div className="card">
      <div className="data">DATA</div>
      <div className="image">Image</div>
    </div>
    </>
  )
}


export default function SectionProcess() {
  useEffect(() => {
    console.log("useEffect is running");
    
    let process = document.querySelector('.process');


    const handleScroll = () => {
      

      const sectionProcess = document.querySelector(".sectionProcess");
      const scrollable = document.querySelector(".scrollable");
      if(window.scrollY - sectionProcess.offsetTop <=0) scrollable.style.transform = `translateX(0)`;
      
      else{
        let percentage = ((window.scrollY - sectionProcess.offsetTop) / window.innerHeight) * 100;
          scrollable.style.transform = `translate3d(${-(percentage)}vw,0,0)`;
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("Cleanup: removed scroll event listener");
    };
  }, []);

  return (
    <>
      <div className="sectionProcess">
        <div className="process">
        <span className="temp"></span>
          <div className="scrollable">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </>
  );
}
