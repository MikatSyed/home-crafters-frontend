import { getAllFaqs } from '@/lib/fetch';
import FaqPage from './FaqPage';



const FaqSection = async() => {
    const faq = await getAllFaqs()
    const faqData = faq?.data;
   
    return (
        
       <>
       <FaqPage faqData={faqData}/>
       </>
    );
};

export default FaqSection;