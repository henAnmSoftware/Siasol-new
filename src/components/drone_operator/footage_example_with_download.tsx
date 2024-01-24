import "./footage_example_with_download.css";

export function FootageExampleWithDownload({ data }) {
  return (
    <div className="footage-with-download">
      <h2>{data.mainTitle}</h2>
      <h6>{data.text ?? ""}</h6>
      <div className="examples">
        {data.content.map((example) => {
          return (
            <div key={example.id}>
              <div className="example">
                <img src={example.iconUrl} />
                <h6>{example.title}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
