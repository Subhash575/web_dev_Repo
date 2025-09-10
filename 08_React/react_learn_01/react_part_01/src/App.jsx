function App() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: 5 }}>
        <PostComponent></PostComponent>
      </div>
      <div style={{ margin: 5 }}>
        <PostComponent></PostComponent>
      </div>
      <div style={{ margin: 5 }}>
        <PostComponent></PostComponent>
      </div>
    </div>
  );
}

function PostComponent() {
  const style = {
    display: "flex",
  };
  return (
    <div
      style={{
        display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // height: "50vh",
        // width: "100vh",
      }}
    >
      <div
        style={{
          width: 395,
          height: 200,
          backgroundColor: "#26667F",
          borderRadius: 10,
          borderColor: "grey",
        }}
      >
        <div style={style}>
          <img
            src={"https://picsum.photos/100"}
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
              paddingLeft: 4,
              paddingTop: 4,
            }}
          ></img>
          <div style={{ paddingLeft: 10, paddingTop: 10 }}>
            <div>
              <b>Random image</b>
            </div>
            <div>100k followers</div>
            <div>35m</div>
          </div>
        </div>
        <div style={{ fontSize: 15, paddingLeft: 20, paddingTop: 5 }}>
          Want to know how to learn anythings
        </div>
      </div>
    </div>
  );
}

export default App;
