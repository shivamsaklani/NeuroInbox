import { Menu } from "lucide-react";
import { Button } from "../ui/button";

const MenuBar = ({onMenuClick}:{
    onMenuClick:()=>void}) => {
  return (
     <Button variant="ghost" onClick={onMenuClick}><Menu className="size-lg"/></Button>
  );
};

export { MenuBar };
