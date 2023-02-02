import DataItem from "./DataItem";
import classes from "./ListData.module.css";

const ListData = (props) => {
  const ListItems = props.data.map((dataItem) => (
    <li key={dataItem.id}>
      <DataItem
        name={dataItem.company.name}
        contact={dataItem.name}
        city={dataItem.address.city}
        website={dataItem.website}
        description={dataItem.company.catchPhrase}
        email={dataItem.email}
        phone={dataItem.phone}
        address={dataItem.address}
      />
    </li>
  ));

  return <ul className={classes.list_data}>{ListItems}</ul>;
};

export default ListData;
