import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./DataItem.module.css";

const DataItem = (props) => {
  const [viewDetails, setViewDetails] = useState(false);

  const viewDetailsChangeHandler = () => {
    viewDetails ? setViewDetails(false) : setViewDetails(true);
  };

  const extraDetails = (
    <div className={classes.extra_details}>
      <ul>
        <h5>Description</h5>
        <p>{props.description}</p>
        <div className={classes.gridData}>
          <li>
            <h5>Contact Person</h5>
            <p>{props.contact}</p>
          </li>
          <li>
            <h5>Emails</h5>
            <p>{props.email}</p>
          </li>
          <li>
            <h5>Phones</h5>
            {props.phone}
          </li>
          <li>
            <h5>Address</h5>
            {`${props.address.suite}, ${props.address.street} ${props.address.city}`}
          </li>
          <li>
            <h5>City</h5>
            <p>{props.city}</p>
          </li>
        </div>
      </ul>
    </div>
  );

  return (
    <Card>
      <ul className={classes.data_item}>
        <li>{props.name}</li>
        <li>
          <h4>CONTACT</h4>
          {props.contact}
        </li>
        <li>
          <h4>CITY</h4>
          {props.city}
        </li>
        <li>
          <h4>WEBSITE</h4>
          {props.website}
        </li>
        <li>
          {viewDetails && (
            <Button name="Hide Details" onClick={viewDetailsChangeHandler} />
          )}
          {!viewDetails && (
            <Button name="View Details" onClick={viewDetailsChangeHandler} />
          )}
        </li>
      </ul>
      {viewDetails && <Card>{extraDetails}</Card>}
    </Card>
  );
};

export default DataItem;
