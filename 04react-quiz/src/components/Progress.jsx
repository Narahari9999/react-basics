function Progress({ index, length, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress max={length} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index}</strong> / {length}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
