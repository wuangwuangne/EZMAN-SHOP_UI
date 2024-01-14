const { default: Item } = require('./Item');

function ListItem({ data }) {
    return (
        <div>
            {data.map((item) => (
                <Item data={item} />
            ))}
        </div>
    );
}

export default ListItem;
