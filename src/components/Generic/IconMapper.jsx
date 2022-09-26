import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { HiHome, HiIdentification, HiLocationMarker } from "react-icons/hi";
import { MdChevronRight } from "react-icons/md";
import { FaCalendarAlt, FaPassport } from "react-icons/fa";

function IconMapper ( { iconName } ) {
    let component;
    console.log({iconName});
    switch (iconName) {
        case 'phone':
            component = <BsFillTelephoneFill />;
            break;

        case 'email':
            component = <IoMdMail />;
            break;

        case 'address':
            component = <HiHome />;
            break;

        case 'student ID':
            component = <HiIdentification />;
            break;

        case 'date of birth':
            component = <FaCalendarAlt />;
            break;

        case 'nationality':
            component = <FaPassport />;
            break;

        case 'place of birth':
            component = <HiLocationMarker />;
            break;

        default:
            component = <MdChevronRight />
            break;
    }

    return component;
}

export default IconMapper;
