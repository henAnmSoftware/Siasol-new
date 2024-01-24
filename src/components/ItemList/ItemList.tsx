import "./item-list_style.css";

export function ItemList({ data, changeClass }) {
  return (
    <div className="data-container">
      <h2>{data.mainTitle}</h2>
      <div className={changeClass ?? "items"}>
        {data.content.map((item) => {
          return (
            <div className="item" key={item.id}>
              {item.upperTitle && <p>{item.upperTitle}</p>}
              <img src={item.iconUrl} />
              <p className="text-container">
                {item.title ?? ""}
                {item.content && <span>{item.content}</span>}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
