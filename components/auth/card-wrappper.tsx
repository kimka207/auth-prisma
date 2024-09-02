import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { SocialLogins } from "./social-logins";

type CardProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  backBtnLabel: string;
  backBtnHref: string;
};

export function CardWrapper({
  children,
  title,
  description,
  backBtnHref,
  backBtnLabel,
}: CardProps) {
  return (
    <Card className="overflow-hidden grid grid-cols-2 p-0 ">
      <div className="bg-primary col-span-1"></div>

      <div className="col-span-1">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <p>{description}</p>
        </CardHeader>
        <CardContent className="">
          {children}

          {backBtnHref && backBtnLabel && (
            <Link href={backBtnHref}>{backBtnLabel}</Link>
          )}
        </CardContent>
        <CardFooter>
          <SocialLogins />
        </CardFooter>
      </div>
    </Card>
  );
}
