import React, { useRef,useState } from 'react'
import './accordion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const faqs = [
    {
        id: 1,
        header: "What is Lorem Ipsum?",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore dolores, sed tenetur adipisci dicta libero quae corporis, molestiae atque dolorem nisi cupiditate ducimus nulla at laudantium dolor alias non mollitia tempore amet doloribus neque modi explicabo! Perferendis tenetur quasi fugit."
    },
    {
        id: 2,
        header: 'Where does it come from?',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptas quia, animi quidem dolorem autem fuga dolor, quos officia sunt facere ut repudiandae molestias exercitationem omnis maiores vitae. Et iusto amet iste molestiae sequi eveniet consectetur voluptate perferendis impedit facilis!"
    },
    {
        id:3,
        header: 'Why do we use it?',
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ab consequatur similique necessitatibus temporibus alias hic voluptatibus. Laborum recusandae eos at, labore architecto consequuntur asperiores iure. Odio aspernatur explicabo necessitatibus, ad in hic, earum natus incidunt rerum magni iusto facere."
    },
    {
        id: 4,
        header: "Where can i get some?",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui cumque iste accusamus sunt repudiandae consectetur at praesentium blanditiis inventore molestias in neque iusto expedita explicabo quos maxime corporis minus harum id soluta ipsum, delectus molestiae rerum? Corporis, ipsa laudantium."
    }
]

const AccordionItem = (props) => {
    const contentEl = useRef(null)
    const {handleToggle, active, faq} = props;
    const {header, id, text} = faq
    console.log(active)

    return (
        <>
          <header className={active === id ? 'active': ''} onClick={() => handleToggle(id)}>
            <h2>{header}</h2>
            <span><FontAwesomeIcon icon={faChevronDown}/></span>
          </header>
          <div
          ref={contentEl}
          className={`collapse ${active === id ? 'show': ''}`}
          style={active === id ? {height: contentEl.current.scrollHeight}: {height: "0px"}}>
            <p>{text}</p>
          </div>
        </>

    )
}



const Accordion = () => {
    const [active, setActive] = useState(false);
    const handleToggle = (index) => {
        if(active === index) {
            setActive(null)
        } else {
            setActive(index)
        }
    }


  return (
    <>
      <article>
        {
            faqs.map((faq, index) => {
                return (
                    <AccordionItem 
                        key={index}
                        active={active}
                        handleToggle={handleToggle}
                        faq={faq}/>
                )
            })
        }
      </article>
    </>
  )
}

export default Accordion