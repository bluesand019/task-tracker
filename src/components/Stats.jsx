function Stats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  return (
    <div className="stats">
      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
    </div>
  );
}

export default Stats;