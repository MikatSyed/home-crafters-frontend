import { getAllFaqs } from '@/lib/fetch';
import FaqPage from './FaqPage';



const FaqSection = async() => {
    const faq = await getAllFaqs()
    console.log(faq,'12');
    const faqData = faq?.data;
    console.log(faqData);
  
    return (
        
       <>
       <FaqPage faqData={faqData}/>
       </>
    );
};

export default FaqSection;