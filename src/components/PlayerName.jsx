function PlayerName(name) {
  return (
    <>
      {name.split(" ")[1] ? name.split(" ")[0][0] + ". " : name.split(" ")[0]}
      {name.split(" ")[1]
        ? name.split(" ")[1].length < "4" && name.split(" ")[2]
          ? name.split(" ")[1] + " " + name.split(" ")[2]
          : name.split(" ")[1]
        : null}
      {name.split(" ")[3]
        ? name.split(" ")[2].length < "4" && name.split(" ")[3]
          ? " " + name.split(" ")[3]
          : name.split(" ")[2]
        : null}
    </>
  );
}

export default PlayerName;
