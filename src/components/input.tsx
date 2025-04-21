const Input = () => {
  return (
    <form action="">
      <div className="">
        <label className="justify-items-center">Enter your next task:</label>
        <input className="border h-8 rounded indent-2" />

        <button
          type="button"
          className="bg-green-100 rounded-lg hover:bg-green-200 p-1 justify-items-center"
        >
          Add task
        </button>
      </div>
    </form>
  );
};

export default Input;
