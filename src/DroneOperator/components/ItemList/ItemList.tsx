import "./item-list_style.css";

export function ItemList({ data }) {
  return (
    <div className="data-container">
      <h2>{data.mainTitle}</h2>
      <div className="items">
        {data.content.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img src={item.iconUrl} />
              <p className="text-container">
                {item.title}
                <span>{item.content}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
