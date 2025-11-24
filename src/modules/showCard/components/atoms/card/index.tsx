import { ReactNode } from "react";
import { Card } from "flowbite-react";

interface CardCustomProps {
  cardClass?: string;
  title: string;
  titleClass?: string;
  description: string;
  descriptionClass?: string;
  children?: ReactNode;
}

const CardCustom = ({ cardClass, title, titleClass, description, descriptionClass, children }: CardCustomProps) => {
  return (
    <>
      <Card className={`${cardClass}`}>
        <h5 className={`${titleClass}`}>{title}</h5>
        <p className={`${descriptionClass}`}>{description}</p>
      </Card>

      {children}
    </>
  );
};

export default CardCustom;
