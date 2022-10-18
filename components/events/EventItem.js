import React from "react";
import classes from "./EventItem.module.css";
import Button from "../UI/Button";
import Dateicon from '../icons/date-icon'
import Addressicon from '../icons/address-icon'
import ArrowRighticon from '../icons/arrow-right-icon'

export default function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });
  const formattedLocation = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      
      <img src={`/` + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
            <Dateicon />
              <time>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
              <Addressicon />
              <address className={classes.address}>{formattedLocation}</address>
            </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}><span>Explore the Event</span><span className={classes.icon}><ArrowRighticon/></span></Button>
        </div>
      </div>
    </li>
  );
}
