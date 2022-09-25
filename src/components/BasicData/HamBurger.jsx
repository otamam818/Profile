import { FaAngleDoubleDown } from "react-icons/fa";

function HamBurger ( { visibleShowcase, setVisibleShowcase } ) {
    return (
        <div
          className='hamburger'
          onClick={() => setVisibleShowcase(!visibleShowcase)}
        >
          <FaAngleDoubleDown />
        </div>
    )
}

export default HamBurger;
