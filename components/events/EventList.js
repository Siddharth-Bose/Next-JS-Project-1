import React from 'react'
import EventItem from './EventItem';
import classes from './EventList.module.css'

export default function EventList(props) {
  const {items}=props;
    return (
    <ul className={classes.list}>
        {items.map
        ((item)=>
        (<EventItem key={item.id} title={item.title} date={item.date} location={item.location} image={item.image} id={item.id}/>))}
    </ul>
  )
}
