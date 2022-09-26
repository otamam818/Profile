import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { HiHome, HiIdentification } from "react-icons/hi";
import { MdChevronRight } from "react-icons/md";

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

        default:
            component = <MdChevronRight />
            break;
    }

    return component;
}

export default IconMapper;
