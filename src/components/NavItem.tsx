import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import Button from "./ui/Button.tsx";



const NavItem = ({itemTitle}:{itemTitle:string}) => {
    const {changePage} = useContext(SWContext);
    return (
        <Button callback={() => changePage(itemTitle)}>{itemTitle}</Button>
    )
}

export default NavItem;