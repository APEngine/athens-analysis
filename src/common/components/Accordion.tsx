// Import section
import React, { useState, ReactNode } from "react";
// Import MUI Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`sticky top-0 z-9 ${isOpen ? "bg-[#303030]" : "bg-[#303030]"} w-full flex justify-between items-center px-4 py-2 text-left text-[#F0F0F0] font-semibold hover:bg-[#808080] cursor-pointer`}>
        {title}
        <span className="svg-button">{isOpen ? <ExpandLessIcon sx={{ backgroundColor: "#FFFFFF00", color:"#FFF" }} /> : <ExpandMoreIcon sx={{ backgroundColor: "#FFFFFF00", color:"#FFF" }} />}</span>
      </button>
      {isOpen && <div className="px-4 py-1 bg-gray-50 border-t-[.1rem] border-[#aaa] z-0">{children}</div>}
    </div>
  );
};

type AccordionProps = {
  items: {
    title: string;
    content: ReactNode;
  }[];
};


const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="border rounded-md overflow-hidden" style={{ overflowY: "auto", "scrollbarWidth": "none" }}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;

