
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function ProCard() {
  return (
    <div className="mt-3">
    <Card className="">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Html CSS and JavaScript</p>
        <h4 className="font-bold text-large">Personal Website</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="src\assets\portfolio-card.png"
          width={350}
        />
      </CardBody>
    </Card>
    </div>
  );
}